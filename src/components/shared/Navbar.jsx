'use client'
import React from 'react';
import userAvatar from '@/assets/user.png';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {

    const router = useRouter();

    // Using the authClient to get the current session and user information
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    
    const links = <>
        <li><NavLink href={'/'}>Home</NavLink></li>
        <li><NavLink href={'/about'}>About</NavLink></li>
        <li><NavLink href={'/career'}>Career</NavLink></li>
    </>
    return (
        <div className='container mx-auto flex justify-between gap-4 mt-6'>
            <div></div>
            <ul className='flex justify-between items-center text-gray-700 gap-3'>
                {links}

            </ul>
            <div></div>

            {isPending ? (
                <p>Loading...</p>
            ) : user ? (
                <div className='flex justify-between items-center gap-3'>
                <h2 className='text-lg font-bold'>{user?.name || 'User'}</h2>
                <Image
                    src={user?.image || userAvatar}
                    alt="user avatar"
                    width={60}
                    height={60}
                />
                <button 
                    onClick={async() => authClient.signOut({fetchOptions: {onSuccess: () =>{router.push("/login");},},})}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
                 
                
            </div>
            ):(<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link href="/login">Login</Link>
                </button>)}
        </div>
    );
};

export default Navbar;