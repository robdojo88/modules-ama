'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Link } from '@heroui/link';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from '@heroui/navbar';

export const Modules = () => {
    return <img src='/logo.svg' alt='Logo' width={50} height={50} />;
};

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const router = useRouter();

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className='z-10'>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className='sm:hidden'
                />
                <NavbarBrand
                    onClick={() => router.push('/')}
                    className='cursor-pointer'
                >
                    <Modules />
                    <p className='font-bold text-inherit'>2513 MODULE</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-5' justify='end'>
                <NavbarItem>
                    <button
                        color='foreground'
                        onClick={() => router.push('/beginners')}
                        className='cursor-pointer text-2xl text-blue-900 font-semibold hover:underline rounded-[2px] p-1'
                    >
                        Beginners
                    </button>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color='foreground'
                        onClick={() => router.push('/intermediates')}
                        className='cursor-pointer text-2xl text-blue-900 font-semibold hover:underline rounded-[2px] p-1'
                    >
                        Intermediates
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <NavbarItem>
                    <button
                        color='foreground'
                        onClick={() => router.push('/beginners')}
                        className='cursor-pointer text-2xl text-blue-900 font-semibold hover:underline rounded-[2px] p-1'
                    >
                        Beginners
                    </button>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color='foreground'
                        onClick={() => router.push('/intermediates')}
                        className='cursor-pointer text-2xl text-blue-900 font-semibold hover:underline rounded-[2px] p-1'
                    >
                        Intermediates
                    </Link>
                </NavbarItem>
            </NavbarMenu>
        </Navbar>
    );
}
