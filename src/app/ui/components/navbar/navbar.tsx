import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import BusinessDropdown from './business-dropdown';

function Navbar() {
    return (
        <div className="w-2/3 mx-auto m-3">
            <nav className="flex flex-wrap justify-between items-center">
                <div className="p-5 unselectable">
                    <Link href="/" className="flex gap-3">
                        <Image src="/logo.png" width={40} height={40} alt="Logo" priority/>
                        <div className="font-bold text-4xl">
                            chow.
                        </div>
                    </Link>
                </div>

                <div className="flex gap-20">
                    <Link href="/about_us"
                          className="font-bold text-lg hover:underline underline-offset-8">About Us</Link>
                    <Link href="/restaurants"
                          className="font-bold text-lg hover:underline underline-offset-8">Restaurants</Link>
                </div>

                <div className="flex gap-10 items-center">
                    <BusinessDropdown/>

                    <Link href="/login" className="font-bold -mr-4">Login</Link>
                    <Link href="/signup" className="font-bold
                                                    border-2 border-solid border-brandBlue rounded-xl
                                                    bg-brandBlue text-white
                                                    hover:border-blue-600 hover:bg-blue-600
                                                    p-4 pt-2 pb-2
                                                    transition ease-linear duration-200">
                        Sign Up
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;