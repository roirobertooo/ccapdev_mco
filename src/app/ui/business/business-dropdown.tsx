'use client';
import React, {useState} from "react";

import Link from "next/link";

import OutsideClickHandler from '../interactivity/outside-click-handler';

import {FaChevronDown} from "react-icons/fa6";
import {FaUserCircle} from "react-icons/fa";
import {MdAddBusiness, MdVerifiedUser} from "react-icons/md";

interface BusinessLinkItemProps {
    hrefLink: string;
    label: string;
    Icon: React.ElementType;
    setIsOpen: (isOpen: boolean) => void;
    className: string;
    iconClassName: string;
}

const BusinessLinkItem: React.FC<BusinessLinkItemProps> = ({hrefLink, label, Icon, setIsOpen, className, iconClassName}) => {
    return (
        <Link onClick={() => setIsOpen(false)}
              href={hrefLink}
              className={className}
              role="menuitem">
            <Icon size="1.1em" className={iconClassName}/>
            {label}
        </Link>
    );
}

export default function BusinessDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
            <div className="relative inline-block text-left">
                <button onClick={() => setIsOpen(!isOpen)} data-dropdown-toggle="dropdown"
                        type="button" className="
                                                inline-flex items-center gap-2 justify-center
                                                rounded-md border border-gray-300 shadow-sm px-4 py-2
                                                bg-white text-sm font-medium text-black
                                                hover:bg-gray-100
                                                focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-brandYellow
                                                transition ease-linear duration-200"
                        aria-haspopup="true" aria-expanded={isOpen}>
                    For Business
                    <FaChevronDown size="0.7em"/>
                </button>

                <div id="dropdown"
                     className={`${isOpen ? '' : 'hidden'} origin-top-right absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <BusinessLinkItem hrefLink="/add_a_business" label="Add a Business" Icon={MdAddBusiness}
                                          setIsOpen={setIsOpen}
                                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                          iconClassName="inline-block ml-0.5 -mt-1 mr-2"/>
                        <BusinessLinkItem hrefLink="/claim_a_business" label="Claim a Business" Icon={MdVerifiedUser}
                                          setIsOpen={setIsOpen}
                                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                          iconClassName="inline-block -mt-1 mr-2.5"/>
                        <BusinessLinkItem hrefLink="/login_to_business" label="Log In to Business" Icon={FaUserCircle}
                                          setIsOpen={setIsOpen}
                                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                          iconClassName="inline-block -mt-1 mr-3"/>
                    </div>
                </div>
            </div>
        </OutsideClickHandler>
    )
}
