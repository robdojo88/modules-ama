'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ForwardButton() {
    const pathname = usePathname();
    const [canGoForward, setCanGoForward] = useState(false);

    useEffect(() => {
        const handlePopState = () => {
            // After going back, forward becomes available
            setCanGoForward(true);
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    if (pathname === '/') return null;

    return (
        <button
            onClick={() => {
                if (canGoForward) {
                    window.history.forward();
                    setCanGoForward(false); // disable until user goes back again
                }
            }}
            disabled={!canGoForward}
            className={`rounded-full transition duration-200 hidden md:flex
        ${
            canGoForward
                ? 'hover:bg-gray-300 hover:scale-105 cursor-pointer'
                : 'opacity-50 cursor-not-allowed'
        }`}
        >
            <img
                src='/arrow-right.svg'
                alt='arrow-forward'
                className='h-12 bg-gray-200 rounded-full'
            />
        </button>
    );
}
