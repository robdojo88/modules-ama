'use client';

import { useRouter } from 'next/navigation';

type Module = {
    title: string;
    description: string;
    path: string;
};

type ModuleCardsProps = {
    beginner_contents: Module[];
};

export default function moduleCards({ beginner_contents }: ModuleCardsProps) {
    const router = useRouter();
    return (
        <section>
            <h1 className='text-2xl font-bold mb-4'>Week 1 Contents</h1>

            <div className='grid gap-4'>
                {beginner_contents.map((item, index) => (
                    <div
                        key={index}
                        className='p-4 border border-gray-100 rounded-lg shadow hover:bg-gray-100 cursor-pointer space-y-3'
                        onClick={() => router.push(item.path)}
                    >
                        <h2 className='text-xl font-semibold'>{item.title}</h2>
                        <p className='text-gray-600'>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
