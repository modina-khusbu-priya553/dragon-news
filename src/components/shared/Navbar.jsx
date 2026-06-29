import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {

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
        </div>
    );
};

export default Navbar;