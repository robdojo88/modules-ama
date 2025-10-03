'use client';

import { useRouter } from 'next/navigation';
import { useLastVisited } from '@/hooks/useLastVisited';
import { Button } from '@heroui/button';

export default function RecentPageButton() {
    const router = useRouter();
    const lastVisited = useLastVisited();

    return (
        <div>
            {lastVisited ? (
                <>
                    <Button
                        color='default'
                        variant='ghost'
                        onClick={() => router.push(lastVisited.lastVisited)}
                        className='flex justify-self-center cursor-pointer text-[1.2rem] rounded-2xl text-blue-900 font-semibold mb-5 mt-5'
                    >
                        Recent Activity -{' '}
                        {lastVisited.pageTitle || lastVisited.lastVisited}
                    </Button>
                </>
            ) : (
                <>
                    <Button
                        color='default'
                        variant='ghost'
                        onClick={() => router.push('/')}
                        className='flex justify-self-center cursor-pointer text-[1.2rem] rounded-2xl text-blue-900 font-semibold mb-5 mt-5'
                        isDisabled
                    >
                        No recent module activity.
                    </Button>
                </>
            )}
        </div>
    );
}
