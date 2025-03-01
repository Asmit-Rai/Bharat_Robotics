import Image from "next/image";

interface Product {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    color: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Head of Team',
        href: '#',
        imageSrc: '/assets/mentor/1.jpg',
        imageAlt: "Portrait of Shashank Kumar Rai",
        color: 'Shashank Kumar Rai',
    },
];

const Mentor = () => {
    return (
        <div id="mentors-section" className="mx-auto max-w-2xl pb-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className='sm:flex justify-between items-center mb-12'>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
                    Meet with our Mentors
                </h2>
                <div>
                    <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-lightgrey hover:border-transparent rounded">
                        Explore Mentors
                    </button>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products.map((product) => (
                    <div key={product.id} className="group relative">
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                            <Image
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                width={300}
                                height={300}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-center">
                            <div>
                                <div className='border border-white rounded-lg -mt-8 bg-white p-2 mentorShadow'>
                                    <h3 className="text-sm text-gray-700 text-center">
                                        <a href={product.href}>
                                            {product.name}
                                        </a>
                                    </h3>
                                </div>
                                <p className="mt-3 text-2xl font-semibold text-offblack text-center">
                                    {product.color}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mentor;
