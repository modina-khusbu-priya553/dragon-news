import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightSidebar = () => {
    return (
        <div className='space-y-2'>
            <h2>Login with</h2>

            <div className='flex flex-col gap-2'>
                <button className="btn bg-white text-blue-400 border-blue-200">
                <FaGoogle />
                Login with Google
                </button>

                <button className="btn text-black border-black">
                    <FaGithub />
                    Login with GitHub
                    </button>
            </div>
            
        </div>
    );
};

export default RightSidebar;