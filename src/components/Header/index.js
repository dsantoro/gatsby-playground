import React from 'react';

import { Link } from 'gatsby';

import Menu from '../Menu';

import logo from '../../assets/logo.png';
import { MENU } from '../../data/header';

function Header() {
    return (
        <header className="absolute w-full z-10">
            <div className="container mx-auto px-4 flex justify-between items-start">
                <Link to="/" className="bg-teal-400 p-8 transition-opacity duration-500 ease-in-out hover:opacity-75">
                    <img className="h-16 lg:h-auto" src={logo} alt="Vasos Raiz" />
                </Link>

                <Menu items={MENU} />
            </div>
        </header >
    );
}

export default Header;
