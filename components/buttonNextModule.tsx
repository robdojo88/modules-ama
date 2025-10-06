'use client';

import { Button } from '@heroui/button';
import { useRouter } from 'next/navigation';

type ButtonNextModuleProps = {
    nextModule: {
        title: string;
        path: string;
    };
};

export default function ButtonNextModule({
    nextModule,
}: ButtonNextModuleProps) {
    const router = useRouter();

    const handleNext = () => {
        router.push(nextModule.path);
    };

    return (
        <div className='text-center'>
            <Button
                onPress={handleNext}
                className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-3/12'
                radius='full'
            >
                {`Go to ${nextModule.title}`}
            </Button>
        </div>
    );
}
