import React from 'react';
import Logo from '@/assets/logo.png'
import Image from 'next/image'
import { compareAsc, format } from "date-fns";

const Header = () => {
    return (
        <div className='my-2 space-y-3'>
            <Image
                src={Logo}
                alt="Header logo"
                width={300}
                height={200}
                className='mx-auto'
                />

            <div className='text-center'>
                <h2>Journalism Without Fear or Favour</h2>
            <h2>{format(new Date(), "EEEE,MMM dd, yyyy")}</h2>
            </div>
        </div>
    );
};

export default Header;