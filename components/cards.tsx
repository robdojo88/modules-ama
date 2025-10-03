'use client';

import { Card, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';

export default function Cards() {
    const list = [
        {
            title: 'WEEK 1',
            img: 'https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?t=st=1759453153~exp=1759456753~hmac=1ea49e8009ffe88e83aecb44edcae63915e7ef54662511b2f56928a1e1baeb91&w=1480',
            modules: 'MODULE 1-5',
        },
        {
            title: 'WEEK 2',
            img: 'https://img.freepik.com/free-vector/flat-hand-drawn-time-management-illustration_23-2148828674.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
        },
        {
            title: 'WEEK 3',
            img: 'https://img.freepik.com/free-vector/hand-drawn-rpa-illustration_23-2149243386.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
        },
        {
            title: 'WEEK 4',
            img: 'https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
        },
        {
            title: 'WEEK 5',
            img: 'https://img.freepik.com/premium-vector/coding-workshop-concept-illustration_114360-22489.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
        },
        {
            title: 'WEEK 6',
            img: 'https://img.freepik.com/free-vector/flat-hand-drawn-web-developers-illustration_23-2148842972.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
        },
        {
            title: 'WEEK 7',
            img: 'https://img.freepik.com/premium-vector/web-development-concept-with-people-scene-flat-design-woman-working-with-abstract-programming-code-searching-fixing-bugs-vector-illustration-social-media-banner-marketing-material_9209-13873.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
        },
        {
            title: 'WEEK 8',
            img: 'https://img.freepik.com/free-vector/app-development-web-programming-testing-concept_107791-13008.jpg?uid=R148155645',
            modules: 'MODULE 1-5',
        },
        {
            title: 'WEEK 9',
            img: 'https://img.freepik.com/premium-vector/colorful-picture-computer-with-clock-top_1230457-46867.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
        },
        {
            title: 'WEEK 10',
            img: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-business-planning-concept_23-2149155669.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
        },
        {
            title: 'WEEK 11',
            img: 'https://img.freepik.com/premium-vector/retro-cartoon-set-web-pages-geometric-frames-90s-memphis-style-vibrant-colors-notes-web_954540-392.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
        },
        {
            title: 'SUMMARY',
            img: 'https://img.freepik.com/free-vector/online-certification-graduation_23-2148618064.jpg?uid=R148155645',
            modules: 'MODULE 1-5',
        },
    ];

    return (
        <div className='gap-4 grid grid-cols-2 sm:grid-cols-4 px-20'>
            {list.map((item, index) => (
                /* eslint-disable no-console */
                <Card
                    key={index}
                    isPressable
                    shadow='sm'
                    onPress={() => console.log('item pressed')}
                >
                    <CardBody className='overflow-visible p-0 min-h-[200px]'>
                        <Image
                            alt={item.title}
                            className='w-full object-cover h-[200px]'
                            radius='lg'
                            shadow='sm'
                            src={item.img}
                            width='100%'
                        />
                    </CardBody>
                    <CardFooter className='text-small justify-between'>
                        <b>{item.title}</b>
                        <p className='text-default-500'>{item.modules}</p>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
