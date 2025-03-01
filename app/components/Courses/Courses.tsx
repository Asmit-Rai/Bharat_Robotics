"use client";
import * as React from "react";
import { useState } from "react";
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Image from "next/image";

interface Name {
    products: string;
    imageSrc: string;
    profession: string;
    price: string;
    category: 'Arduino' | 'Ros';
}

const names: Name[] = [
    {
        products: 'Storage and Processing Unit',
        imageSrc: '/assets/courses/uno.png',
        profession: 'Arduino Uno',
        price: '40',
        category: 'Arduino'
    },
    {
        products: 'Sending Data',
        imageSrc: '/assets/courses/cable.png',
        profession: 'USB Cable',
        price: '21',
        category: 'Arduino'
    },
    {
        products: 'Reading Signal',
        imageSrc: '/assets/courses/ir.png',
        profession: 'IR Sensor',
        price: '21',
        category: 'Arduino'
    },
    {
        products: 'Rotation',
        imageSrc: '/assets/courses/servo.png',
        profession: 'Servo Motor',
        price: '99',
        category: 'Arduino'
    },
];

const NamesList = () => {
    const [selectedButton, setSelectedButton] = useState<'Arduino' | 'Ros'>('Arduino');

    const selectedNames = names.filter((name) => name.category === selectedButton);

    return (
        <div>
            <div id='courses-section' className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className='sm:flex justify-between items-center pb-12'>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Products</h2>
                    <div>
                        <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded">
                            Explore More Products
                        </button>
                    </div>
                </div>

                <div className='flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto'>
                    {/* FOR DESKTOP VIEW */}
                    <button 
                        onClick={() => setSelectedButton('Arduino')} 
                        className={`bg-white pb-2 text-lg hidden sm:block ${selectedButton === 'Arduino' ? 'text-black border-b-2 border-orange' : 'text-lightgrey'}`}
                    >
                        Arduino Starter Kit
                    </button>
                    <button 
                        onClick={() => setSelectedButton('Ros')} 
                        className={`bg-white pb-2 text-lg hidden sm:block ${selectedButton === 'Ros' ? 'text-black border-b-2 border-orange' : 'text-lightgrey'}`}
                    >
                        Ros
                    </button>

                    {/* FOR MOBILE VIEW */}
                    <GlobeAltIcon 
                        onClick={() => setSelectedButton('Arduino')} 
                        width={70} height={70} 
                        className={`bg-white pb-2 block sm:hidden ${selectedButton === 'Arduino' ? 'border-b-2 border-orange fill-orange' : ''}`} 
                    />
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
                        <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                            {selectedNames.length > 0 ? (
                                selectedNames.map((name, index) => (
                                    <div key={index}>
                                        <div className="text-lg sm:text-sm py-5 lg:py-0">
                                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                <Image
                                                    src={name.imageSrc}
                                                    alt={name.products}
                                                    width={300}
                                                    height={300}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className='flex justify-between'>
                                                <div className="mt-6 block font-normal text-gray-900">
                                                    {name.products}
                                                </div>
                                                <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1">
                                                    ${name.price}
                                                </div>
                                            </div>
                                            <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold ">
                                                {name.profession}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No data to show</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NamesList;
