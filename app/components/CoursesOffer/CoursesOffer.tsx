import React from 'react';

const CoursesOffer = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Courses Offer</h1>
                <p className="text-lg text-gray-600">Explore our courses designed for School and College Students</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">For School Students</h2>
                    <div className="mb-4">
                        <img src="/assets/courses_offer/course_school_students.png" alt="School Course Poster" className="w-full h-70 object-cover rounded-lg" />
                    </div>
                    <p className="text-gray-700 mb-4">This course is designed to help school students excel in their studies and prepare for future academic challenges.</p>
                    <p className="text-xl font-bold text-purple-600 mb-2">Price: ₹1000</p>
                    <p className="text-lg text-gray-600">Contact: +91 7022971047</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">For College Students</h2>
                    <div className="mb-4">
                        <img src="/assets/courses_offer/course_college_students.png" alt="College Course Poster" className="w-full h-70 object-cover rounded-lg" />
                    </div>
                    <p className="text-gray-700 mb-4">This course is tailored for college students to enhance their skills and knowledge for a successful career.</p>
                    <p className="text-xl font-bold text-purple-600 mb-2">Price:  ₹2000</p>
                    <p className="text-lg text-gray-600">Contact: +91 7022971047</p>
                </div>
            </div>
        </div>
    );
};

export default CoursesOffer;