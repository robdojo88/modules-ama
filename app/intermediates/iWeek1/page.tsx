import ModuleCards from '@/components/moduleCards';

export default function IWeek1() {
    const beginner_contents = [
        {
            title: '1. HTML & CSS',
            description: 'Crash course for basic web',
            path: '/intermediates/iWeek1/iModule1',
        },
        {
            title: '1. HTML & CSS',
            description: 'Crash course for basic web',
            path: '/intermediates/iWeek1/iModule1',
        },
        {
            title: '1. HTML & CSS',
            description: 'Crash course for basic web',
            path: '/intermediates/iWeek1/iModule1',
        },
        {
            title: '1. HTML & CSS',
            description: 'Crash course for basic web',
            path: '/intermediates/iWeek1/iModule1',
        },
    ];

    return (
        <section className='p-4'>
            <ModuleCards beginner_contents={beginner_contents} />
        </section>
    );
}
