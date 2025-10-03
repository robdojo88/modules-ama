'use client';

import { useEffect, useState } from 'react';

type LastVisitedData = {
    lastVisited: string;
    timestamp: string;
    pageTitle: string;
};

export function useLastVisited() {
    const [lastVisited, setLastVisited] = useState<LastVisitedData | null>(
        null
    );

    useEffect(() => {
        const stored = localStorage.getItem('lastVisitedPage');
        if (stored) {
            setLastVisited(JSON.parse(stored) as LastVisitedData);
        }
    }, []);

    return lastVisited;
}
