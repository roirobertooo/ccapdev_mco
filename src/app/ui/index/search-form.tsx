// TODO: Add forms functionality

import React, {useState} from 'react';
import {FaChevronDown} from 'react-icons/fa6';

import DropdownItem from '@/app/ui/components/interactivity/dropdown-item';
import OutsideClickHandler from '@/app/ui/components/interactivity/outside-click-handler';

function SearchForm() {
    const [isOpen, setIsOpen] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const [selectedItem, setSelectedItem] = useState("All");

    return (
        <form className="max-w-lg mx-auto" action="#" method="POST">
            <div className="flex justify-center">
                <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
                    <div className="flex h-12">
                        <button onClick={() => setIsOpen(!isOpen)} data-dropdown-toggle="dropdown"
                                type="button" className="
                                                        inline-flex items-center justify-center gap-3
                                                        rounded-l-xl border border-gray-300 shadow px-4 py-2
                                                        bg-white text-sm font-medium text-gray-700
                                                        hover:bg-gray-100
                                                        focus:outline-none focus:ring-2 focus:ring-offset-1
                                                        focus:ring-offset-gray-100 focus:ring-brandBlue
                                                        transition ease-linear duration-100
                                                        z-10"
                                aria-haspopup="true" aria-expanded={isOpen}>
                            {selectedItem}
                            <FaChevronDown size="1em"/>
                        </button>

                        <div className="flex">
                            <input type="search" value={searchTerm} onChange={handleSearchChange}
                                   placeholder="what's on your mind?..."
                                   className="px-3 py-2 border border-gray-300 text-sm focus:border-gray-300 focus:ring-0 w-96 shadow"/>

                            <button type="submit"
                                    className="
                                                bg-brandBlue text-white px-4 py-2 rounded-r-3xl
                                                hover:bg-blue-600
                                                transition ease-linear duration-100 w-24 shadow">
                                <div className={'-ml-2 font-medium'}>
                                    Search
                                </div>
                            </button>
                        </div>
                    </div>

                    <div id="dropdown"
                         className={`${isOpen ? "" : "hidden"} absolute z-10 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
                        <div className="py-1" role="menu" aria-orientation="vertical"
                             aria-labelledby="category-selector">
                            <DropdownItem label="All" setSelectedItem={setSelectedItem} setIsOpen={setIsOpen}/>
                            <DropdownItem label="Restaurants" setSelectedItem={setSelectedItem} setIsOpen={setIsOpen}/>
                            <DropdownItem label="Reviews" setSelectedItem={setSelectedItem} setIsOpen={setIsOpen}/>
                        </div>
                    </div>
                </OutsideClickHandler>
            </div>
        </form>
    );
}

export default SearchForm;