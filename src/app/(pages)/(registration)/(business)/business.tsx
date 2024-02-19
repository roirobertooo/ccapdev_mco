'use client';
import React, {useEffect, useRef, useState} from "react";

import Link from "next/link";

import {FaChevronDown} from "react-icons/fa6";
import {FaUserCircle} from "react-icons/fa";
import {MdAddBusiness, MdVerifiedUser} from "react-icons/md";

export default function Business() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className='inline-flex items-center gap-2 justify-center
                                rounded-md border border-gray-300 shadow-sm px-4 py-2
                                bg-white text-sm font-medium text-black
                                hover:bg-gray-100
                                focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-brandYellow'>
                For Business
                <FaChevronDown size="0.7em"/>
            </button>

            {isDropdownOpen && (
                <div
                    className="origin-top-right absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <Link href="/add_a_business"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem">
                            <MdAddBusiness size="1.2em" className="inline-block ml-0.5 -mt-1 mr-2"/>
                            Add a Business
                        </Link>
                        <Link href="/claim_a_business"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem">
                            <MdVerifiedUser size="1.1em" className="inline-block -mt-1 mr-2.5"/>
                            Claim a Business
                        </Link>
                        <Link href="/login_to_business"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem">
                            <FaUserCircle size="1.1em" className="inline-block -mt-1 mr-3"/>
                            Log In to Business
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
