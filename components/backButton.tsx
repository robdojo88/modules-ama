'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();
    const pathname = usePathname();

    if (pathname === '/') return null;

    return (
        <button
            onClick={() => {
                if (window.history.length > 1) {
                    router.back();
                } else {
                    router.push('/');
                }
            }}
            className='hidden md:flex'
        >
            <img
                src='/arrow-left.svg'
                alt='arrow-back'
                className='h-12 bg-gray-200 hover:bg-gray-300 rounded-full 
                   transition duration-200 hover:cursor-pointer hover:scale-105'
            />
        </button>
    );
}
