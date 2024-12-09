'use client'
import React from 'react'
import UseActiveNav from './UseActiveNav'
import Image from 'next/image'
import Button from './Button'
import { FaBars } from 'react-icons/fa'
const Header = () => {
    const { activeLink, handleActiveChange } = UseActiveNav('home')

    return (
        <header className='header'>
            <nav className='navBar'>
                <div className='logo'>
                    <Image
                        src='/logo.png'
                        alt='Trippy'
                        width={100}
                        height={100}
                        className='object-contain'
                    />
                </div>
                <div className='navLinks'>
                    <ul className='flex flex-row gap-6'>
                        <li className='font-roboto'><a href="#home" onClick={() => handleActiveChange('home')} className={`${activeLink === 'home' ? 'linkActive' : ''}`}>Home</a></li>
                        <li className='font-roboto'><a href="#discover" onClick={() => handleActiveChange('discover')} className={`${activeLink === 'discover' ? 'linkActive' : ''}`}>Discover</a></li>
                        <li className='font-roboto'><a href="#specials" onClick={() => handleActiveChange('special')} className={`${activeLink === 'special' ? 'linkActive' : ''}`}>Special Deals</a></li>
                        <li className='font-roboto'><a href="#contact" onClick={() => handleActiveChange('contact')} className={`${activeLink === 'contact' ? 'linkActive' : ''}`}>Contact</a></li>
                    </ul>
                </div>
                <div className='headerBtns'>
                    <Button
                        styles='bg-transparent'
                        event={() => alert('Not yet available')}
                        title='Login'
                    />
                    <Button
                        styles='bg-primaryBlue px-8 py-2 rounded-full text-white'
                        event={() => alert('Not yet available')}
                        title='Sign Up'
                    />
                </div>

                <div className='mobileHamburger'>
                <FaBars className="text-gray-700 hover:text-blue-500 w-8 h-8" />

                </div>
            </nav>
        </header>
    )
}

export default Header