'use client';

import { Card, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';

export default function Cards() {
    const list = [
        {
            title: 'Orange',
            img: '1.png',
            price: '$5.50',
        },
        {
            title: 'Tangerine',
            img: '2.png',
            price: '$3.00',
        },
        {
            title: 'Raspberry',
            img: '3.png',
            price: '$10.00',
        },
        {
            title: 'Lemon',
            img: '4.png',
            price: '$5.30',
        },
        {
            title: 'Avocado',
            img: '5.png',
            price: '$15.70',
        },
        {
            title: 'Lemon 2',
            img: '6.png',
            price: '$8.00',
        },
        {
            title: 'Banana',
            img: '7.png',
            price: '$7.50',
        },
        {
            title: 'Watermelon',
            img: '8.png',
            price: '$12.20',
        },
        {
            title: 'Watermelon',
            img: '9.png',
            price: '$12.20',
        },
        {
            title: 'Watermelon',
            img: '10.png',
            price: '$12.20',
        },
        {
            title: 'Watermelon',
            img: '11.png',
            price: '$12.20',
        },
        {
            title: 'Watermelon',
            img: '12.png',
            price: '$12.20',
        },
    ];

    return (
        <div className='gap-2 grid grid-cols-2 sm:grid-cols-4'>
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
                        <p className='text-default-500'>{item.price}</p>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
