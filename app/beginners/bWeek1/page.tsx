import ModuleCards from '@/components/moduleCards';

export default function BWeek1() {
    const beginner_contents = [
        {
            title: '1. HTML & CSS',
            description: 'Crash course for basic web',
            path: '/beginners/bWeek1/bModule1',
        },
        {
            title: '1. HTML & CSS',
            description: 'Crash course for basic web',
            path: '/beginners/bWeek1/bModule1',
        },
        {
            title: '1. HTML & CSS',
            description: 'Crash course for basic web',
            path: '/beginners/bWeek1/bModule1',
        },
        {
            title: '1. HTML & CSS',
            description: 'Crash course for basic web',
            path: '/beginners/bWeek1/bModule1',
        },
    ];

    return (
        <section className='p-4'>
            <ModuleCards beginner_contents={beginner_contents} />
        </section>
    );
}
