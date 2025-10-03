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
    const menuItems = ['Beginners', 'Intermediates'];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className='sm:hidden'
                />
                <NavbarBrand>
                    <Modules />
                    <p className='font-bold text-inherit'>2513 MODULE</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-4' justify='end'>
                <NavbarItem>
                    <button
                        color='foreground'
                        onClick={() => router.push('/beginners')}
                        className='cursor-pointer'
                    >
                        Beginners
                    </button>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color='foreground'
                        onClick={() => router.push('/intermediates')}
                        className='cursor-pointer'
                    >
                        Intermediates
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className='w-full'
                            color={
                                index === 2
                                    ? 'primary'
                                    : index === menuItems.length - 1
                                      ? 'danger'
                                      : 'foreground'
                            }
                            href='#'
                            size='lg'
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
