import React from 'react';

interface DropdownItemProps {
    label: string;
    setSelectedItem: (label: string) => void;
    setIsOpen: (isOpen: boolean) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({label, setSelectedItem, setIsOpen}) => {
    return (
        <a onClick={() => {
            setSelectedItem(label);
            setIsOpen(false);
        }}
           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
           role="menuitem">
            {label}
        </a>
    );
}

export default DropdownItem;