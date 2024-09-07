import Link from 'next/link';
import React from 'react';

const MainMenu = () => {
    return (
        <>
            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/resume">Resume</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;