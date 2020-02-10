import React from 'react';
import { Link } from 'gatsby';

function Banner({ image, altText, text }) {
    return (
        <>
            <img className="object-cover h-75 md:h-auto w-full" src={image} alt={altText} />

            <div className="absolute inset-0 z-5 flex items-center">
                <div className="container mx-auto px-4">
                    <div className="lg:w-1/3">
                        <h2 className="text-2xl text-orange-100 italic font-light mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: text }} />
                        <Link className="inline-flex bg-teal-400 rounded-full px-6 py-2 uppercase text-sm hover:opacity-75 transiion-opacity duration-500 ease-in-out text-orange-100" to="/">Confira</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
