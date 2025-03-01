"use client"
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import Image from 'next/image';

// Firebase configuration object (use your own credentials)
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface InputValues {
    name: string;
    email: string;
    phone: string;
    address: string;
}

const BuyCourse: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [inputValues, setInputValues] = useState<InputValues>({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInputValues((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            // Generate a unique enrollment ID (e.g., using Firestore's auto-generated ID or your own method)
            const enrollmentId = doc(collection(db, "courseApplicants")).id;

            // Saving data to Firebase Firestore under 'courseApplicants'
            await setDoc(doc(db, "courseApplicants", enrollmentId), {
                enrollmentId,  // Use the generated enrollmentId here
                name: inputValues.name,
                email: inputValues.email,
                phone: inputValues.phone,
                address: inputValues.address,
                timestamp: new Date(),  // Optionally, add a timestamp
            });

            alert('Enrollment successful!');
            setIsOpen(false);
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Failed to submit. Please try again.');
        }
    };

    const isDisabled = Object.values(inputValues).some((value) => value === '');

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <button
                onClick={openModal}
                className="mt-4 bg-purple text-white px-4 py-2 rounded-lg"
            >
               🎉 Grab the Opportunity
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                                        <Image
                                            className="mx-auto h-12 w-auto"
                                            src="/assets/logo/Logo.svg"
                                            alt="Your Company"
                                        />
                                        <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                                            🚀 Keep pushing forward, every step brings you closer to success! 💡
                                        </p>

                                        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
                                            {/* Name */}
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Your Name
                                                </label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    value={inputValues.name}
                                                    onChange={handleChange}
                                                    type="text"
                                                    required
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Name..."
                                                />
                                            </div>
                                            {/* Email */}
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Your Email
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    value={inputValues.email}
                                                    onChange={handleChange}
                                                    type="email"
                                                    required
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="xyz@email.com"
                                                />
                                            </div>
                                            {/* Phone */}
                                            <div>
                                                <label
                                                    htmlFor="phone"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Your Phone
                                                </label>
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    value={inputValues.phone}
                                                    onChange={handleChange}
                                                    type="tel"
                                                    required
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="+91 9876543210"
                                                />
                                            </div>
                                            {/* Address */}
                                            <div>
                                                <label
                                                    htmlFor="address"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Your Address
                                                </label>
                                                <textarea
                                                    id="address"
                                                    name="address"
                                                    value={inputValues.address}
                                                    onChange={handleChange}
                                                    required
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Enter your address..."
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={isDisabled}
                                                className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-purple hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default BuyCourse;
