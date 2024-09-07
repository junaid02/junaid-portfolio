"use client"
import React from 'react';
import logo from '@/assets/img/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import useStickyMenu from '@/hooks/useStickyMenu';
import MainMenu from './MainMenu';
import useSidebarMenu from '@/hooks/useSidebarMenu';

const HeaderStyle2 = () => {

    const isMenuSticky = useStickyMenu();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-common navbar-sticky navbar-default validnavs on no-full ${isMenuSticky ? 'sticked' : ''}`}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link className="navbar-brand" href="/">
                                <Image src={logo} className="logo" alt="Logo" />
                            </Link>
                        </div>
                        <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                            <Image src={logo} alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times"></i>
                            </button>
                            <MainMenu isOpen={isOpen} closeMenu={closeMenu} />
                        </div>
                        <div className="attr-right">
                            <div className="attr-nav">
                                <ul>
                                    <li className="button"><Link href="/contact" className='btn btn-md circle btn-theme'>Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu}></div>
                </nav>
            </header>
        </>
    );
};

export default HeaderStyle2;