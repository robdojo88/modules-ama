'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

type LastVisitedData = {
    lastVisited: string;
    pageTitle: string;
    timestamp: string;
};

// Helper: check if path should be excluded
function isExcludedPath(pathname: string): boolean {
    const excludedExact: string[] = [
        '/',
        '/beginners',
        '/intermediates',
        '/bSummary',
    ];

    // Exclude exact matches
    if (excludedExact.includes(pathname)) return true;

    // Exclude /bWeek1 to /bWeek11
    if (/^\/bWeek([1-9]|1[0-1])$/.test(pathname)) return true;

    // Exclude /beginners/bWeek1 to /beginners/bWeek11
    if (/^\/beginners\/bWeek([1-9]|1[0-1])$/.test(pathname)) return true;

    return false;
}

export default function LastVisitedTracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (!pathname) return;
        if (isExcludedPath(pathname)) return;

        const h1Element = document.querySelector<HTMLHeadingElement>('h1');
        const h1Text: string = h1Element?.textContent?.trim() ?? '';

        const data: LastVisitedData = {
            lastVisited: pathname,
            pageTitle: h1Text,
            timestamp: new Date().toISOString(),
        };

        localStorage.setItem('lastVisitedPage', JSON.stringify(data));
    }, [pathname]);

    return null;
}
