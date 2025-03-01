import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Contactus from "./Contactus";
import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'Courses', href: '/courses-offer', current: false },
    { name: 'Products', href: '#courses-section', current: false },
    { name: 'Mentors', href: '#mentors-section', current: false },
    { name: 'Testimonial', href: '#testimonial-section', current: false },
    { name: 'Join', href: '#join-section', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="bg-lightpink navbar">
            <>
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Image
                                    className="block h-8 w-auto lg:hidden"
                                    src={'/assets/logo/Logo.svg'}
                                    alt="Courses-Logo"
                                />
                                <Image
                                    className="hidden h-10 w-auto lg:block"
                                    src={'/assets/logo/Logo.svg'}
                                    alt="Courses-Logo"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'text-purple' : 'hover:text-purple',
                                                'px-3 py-2 rounded-md text-sm font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Contactus />
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <Signdialog />
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                            </Disclosure.Button>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item) => (
                            <Disclosure.Button
                                key={item.name}
                                as={Link}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-purple-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block px-3 py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Disclosure.Button>
                        ))}
                        <Contactus />
                    </div>
                </Disclosure.Panel>

                <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                    <Drawerdata />
                </Drawer>
            </>
        </Disclosure>
    )
}

export default Navbar;