'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {redirect} from 'next/navigation';
import {useCookies} from 'next-client-cookies';
import {deauthenticate} from '@/app/lib/actions';

import {useFetchData} from '@/app/lib/utils';
import {UserAccount} from '@/app/lib/definitions';

import BusinessDropdown from './business-dropdown';
import OutsideClickHandler from '@/app/ui/components/interactivity/outside-click-handler';

function Navbar() {
    const currentUser = useCookies().get("currentUser");

    const fetchString = `/api/get?collectionName=user_accounts&findKeys=_id&findValues=${currentUser}`;
    const [userData, error] = useFetchData<UserAccount[]>(fetchString);
    const user = userData ? userData[0] : null;

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

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

                    {!user ?
                        <>
                            <Link href="/login" className="font-bold -mr-4">Login</Link>
                            <Link href="/signup" className="font-bold
                                                    border-2 border-solid border-brandBlue rounded-xl
                                                    bg-brandBlue text-white
                                                    hover:border-blue-600 hover:bg-blue-600
                                                    p-4 pt-2 pb-2
                                                    transition ease-linear duration-200">
                                Sign Up
                            </Link>
                        </>
                        :
                        <OutsideClickHandler onOutsideClick={() => setDropdownOpen(false)}>
                            <div onClick={toggleDropdown} className="relative z-10">
                                <Image src={user.avatar_url} alt="" width={50} height={50}
                                       className="rounded-full border-2 border-gray-400 unselectable cursor-pointer"/>
                                <div
                                    className={`absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded shadow-xl ${dropdownOpen ? '' : 'hidden'}`}>
                                    <Link href={`/users/${user._id}`}
                                          className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        Profile
                                    </Link>
                                    <Link href={`/users/${user._id}/settings`}
                                          className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        Settings
                                    </Link>
                                    <form action={deauthenticate}>
                                        <button onClick={() => redirect("/")}
                                                className="flex justify-start px-4 py-2 w-36 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                            Sign Out
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </OutsideClickHandler>
                    }
                </div>
            </nav>
        </div>
    );
}

export default Navbar;