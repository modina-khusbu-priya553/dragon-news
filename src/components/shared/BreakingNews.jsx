import React from 'react';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className='flex items-center justify-center text-center bg-gray-200 p-4 gap-3 container mx-auto'>

            <button className='btn bg-red-600 text-white'>Latest</button>

            <Marquee pauseOnHover={true} speed={100}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
            
        </div>
    );
};

export default BreakingNews;