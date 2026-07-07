import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const loading = () => {
    return (
        <div className="flex justify-center items-center h-[85vh]">
            <DotLottieReact
                src="https://lottie.host/08adcc6e-809c-4504-9966-ee350f5958cc/Gwn2lvKxvP.lottie"
                loop
                autoplay
                />

        </div>
    );
};

export default loading;