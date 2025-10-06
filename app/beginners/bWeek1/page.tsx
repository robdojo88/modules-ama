import ModuleCards from '@/components/moduleCards';

export default function BWeek1() {
    const beginner_contents = [
        {
            title: 'Module 1: Git & Github',
            description:
                'Introduces the four essential concepts of Git: repositories, commits, branches, and merges. You will learn how these concepts work together to track and manage changes in your projects. The session also covers the basics of using Git commands for version control and how to connect with GitHub for collaboration, code sharing, and project management.',
            path: '/beginners/bWeek1/bModule1',
        },
        {
            title: 'Module 2: How the Web Works',
            description:
                'Introduces the foundational concepts of the web and the internet. Students will explore how websites work by understanding the roles of clients and servers, and uncover the step-by-step process that happens behind every website visit.',
            path: '/beginners/bWeek1/bModule2',
        },
        {
            title: 'Module 3: Basic in Web',
            description:
                'Explores how computers communicate through the web by understanding the structure of a URL and the role of the Domain Name System (DNS). Students will also discover how a computer can function as both a client and a server, deepening their grasp of how the internet truly connects everything.',
            path: '/beginners/bWeek1/bModule3',
        },
        {
            title: 'Module 4: Full Stack Development',
            description:
                'To nderstand the three main areas of web development—front-end, back-end, and full-stack. It also introduces the various technologies, tools, and frameworks commonly used in each stack, giving learners a clearer picture of how different parts of a web application work together.',
            path: '/beginners/bWeek1/bModule4',
        },
    ];

    return (
        <section className='p-4'>
            <ModuleCards beginner_contents={beginner_contents} />
        </section>
    );
}
