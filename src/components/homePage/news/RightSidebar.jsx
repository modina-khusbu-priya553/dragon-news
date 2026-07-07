'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightSidebar = () => {

    // google login
    const handleGoogleLogin = async () =>{
        const data = await authClient.signIn.social({
        provider: "google",
        });
    }
//   // github login
    const handleGithubLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });

    }

    return (
        <div className='space-y-2'>
            <h2 className='text-2xl font-bold'>Login with</h2>

            <div className='flex flex-col gap-2'>
                <button className="btn bg-white text-blue-400 border-blue-200" onClick={handleGoogleLogin}>
                <FaGoogle />
                Login with Google
                </button>

                <button className="btn text-black border-black" onClick={handleGithubLogin}>
                    <FaGithub />
                    Login with GitHub
                    </button>
            </div>
            
        </div>
    );
};

export default RightSidebar;