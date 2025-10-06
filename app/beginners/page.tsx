'use client';
import Card from '@/components/cards';
import { useRouter } from 'next/navigation';

export default function Beginners() {
    const router = useRouter();

    const list = [
        {
            title: 'WEEK 1',
            img: 'https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?t=st=1759453153~exp=1759456753~hmac=1ea49e8009ffe88e83aecb44edcae63915e7ef54662511b2f56928a1e1baeb91&w=1480',
            modules: 'MODULE 1-4',
            path: '/beginners/bWeek1',
        },
        {
            title: 'WEEK 2',
            img: 'https://img.freepik.com/free-vector/flat-hand-drawn-time-management-illustration_23-2148828674.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 4 - ??',
            path: '/beginners/bWeek2',
        },
        {
            title: 'WEEK 3',
            img: 'https://img.freepik.com/free-vector/hand-drawn-rpa-illustration_23-2149243386.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE ???',
            path: '/beginners/bWeek3',
        },
        {
            title: 'WEEK 4',
            img: 'https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE ???',
            path: '/beginners/bWeek4',
        },
        {
            title: 'WEEK 5',
            img: 'https://img.freepik.com/premium-vector/coding-workshop-concept-illustration_114360-22489.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE ???',
            path: '/beginners/bWeek5',
        },
        {
            title: 'WEEK 6',
            img: 'https://img.freepik.com/free-vector/flat-hand-drawn-web-developers-illustration_23-2148842972.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE ???',
            path: '/beginners/bWeek6',
        },
        {
            title: 'WEEK 7',
            img: 'https://img.freepik.com/premium-vector/web-development-concept-with-people-scene-flat-design-woman-working-with-abstract-programming-code-searching-fixing-bugs-vector-illustration-social-media-banner-marketing-material_9209-13873.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE ???',
            path: '/beginners/bWeek7',
        },
        {
            title: 'WEEK 8',
            img: 'https://img.freepik.com/free-vector/app-development-web-programming-testing-concept_107791-13008.jpg?uid=R148155645',
            modules: 'MODULE ???',
            path: '/beginners/bWeek8',
        },
        {
            title: 'WEEK 9',
            img: 'https://img.freepik.com/premium-vector/colorful-picture-computer-with-clock-top_1230457-46867.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE ???',
            path: '/beginners/bWeek9',
        },
        {
            title: 'WEEK 10',
            img: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-business-planning-concept_23-2149155669.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE ???',
            path: '/beginners/bWeek10',
        },
        {
            title: 'WEEK 11',
            img: 'https://img.freepik.com/premium-vector/retro-cartoon-set-web-pages-geometric-frames-90s-memphis-style-vibrant-colors-notes-web_954540-392.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE ???',
            path: '/beginners/bWeek11',
        },
        {
            title: 'SUMMARY',
            img: 'https://img.freepik.com/free-vector/online-certification-graduation_23-2148618064.jpg?uid=R148155645',
            modules: 'MODULE ???',
            path: '/beginners/bSummary',
        },
    ];

    return (
        <section>
            <h1 className='text-center mb-2 md:mb-5 text-2xl font-bold'>
                Beginners
            </h1>
            <div>
                <Card list={list} />
            </div>
        </section>
    );
}
