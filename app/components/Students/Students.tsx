"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
    starimg: string;
    detail: string;
}

const postData: DataType[] = [
    {
        profession: 'Robotics Engineer',
        name: 'Amit Kumar',
        imgSrc: '/assets/students/amit.jpg',
        starimg: '/assets/students/stars.png',
        detail: "This course helped me dive deep into robotics, learning the basics of Arduino and creating projects like Obstacle Avoidance Robots. The practical approach made everything click!"
    },
    {
        profession: 'Embedded Systems Developer',
        name: 'Aryan Tripathi',
        imgSrc: '/assets/students/aryan.jpg',
        starimg: '/assets/students/stars.png',
        detail: "Building a Remote Control Robot was fascinating. The way this course breaks down Arduino programming is just amazing. Highly recommended for beginners and experts alike!"
    },
    {
        profession: 'Tech Enthusiast',
        name: 'Gautam Rai',
        imgSrc: '/assets/students/gautam.jpg',
        starimg: '/assets/students/stars.png',
        detail: "The hands-on projects like Obstacle Avoidance and Remote Control Robots made learning fun and impactful. This course ignited my passion for robotics!"
    },
    {
        profession: 'Software Engineer',
        name: 'Alok Yadav',
        imgSrc: '/assets/students/alok.jpg',
        starimg: '/assets/students/stars.png',
        detail: "Learning Arduino and creating projects like Line Follower Robots was a game-changer for me. The instructors explain everything so clearly and thoroughly!"
    }
];

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 1000,
            autoplaySpeed: 1000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };

        return (
            <div id="testimonial-section" className='bg-bgpink'>
                <div className="mx-auto max-w-2xl px-4 pt-16 pb-64 sm:pt-24 lg:max-w-7xl lg:px-8">
                    <div className='sm:flex justify-between items-center pb-6'>
                        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Our Reviews</h2>
                        <div>
                            <button className="bg-transparent hover:bg-purple text-purple font-semibold hover:text-white py-3 px-4 border border-lightgrey hover:border-transparent rounded">
                                Give Your Review
                            </button>
                        </div>
                    </div>

                    <p className='text-lg font-medium pb-12'>Build skills with our courses and mentor from world-class companies.</p>
\
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='bg-white m-4 pt-8 px-12 pb-10 text-center rounded-lg'>
                                    <div className='relative w-20 h-20 mx-auto'>
                                        <Image 
                                            src={items.imgSrc} 
                                            alt={`Photo of ${items.name}`} 
                                            width={120} 
                                            height={100} 
                                            className="rounded-full ring-2 ring-white object-cover"
                                        />
                                        <Image 
                                            src={'/assets/students/greenpic.svg'} 
                                            alt="Green background decoration" 
                                            width={14} 
                                            height={14} 
                                            className="absolute left-1 top-1"
                                        />
                                    </div>
                                    <h3 className='text-sm pt-12 pb-2'>{items.profession}</h3>
                                    <h4 className='text-2xl font-semibold pb-3'>{items.name}</h4>
                                    <Image 
                                        src={items.starimg} 
                                        alt="5-star rating image" 
                                        width={120} 
                                        height={20} 
                                        className='m-auto pb-6'
                                    />
                                    <p className='text-lg font-medium leading-9'>{items.detail}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
