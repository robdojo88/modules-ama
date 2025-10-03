'use client';
import { useRouter } from 'next/navigation';

import { Card, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';

type CardItem = {
    title: string;
    img: string;
    modules: string;
    path: string;
};

type CardListProps = {
    list: CardItem[];
};

export default function Cards({ list }: CardListProps) {
    const router = useRouter();

    return (
        <div className='gap-4 grid grid-cols-2 sm:grid-cols-4 px-5 md:px-20'>
            {list.map((item, index) => (
                /* eslint-disable no-console */
                <Card
                    key={index}
                    isPressable
                    shadow='sm'
                    onPress={() => console.log('item pressed')}
                    onClick={() => router.push(item.path)}
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
