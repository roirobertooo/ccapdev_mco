import React, {useEffect, useRef} from 'react';

interface OutsideClickHandlerProps {
    children: React.ReactNode;
    onOutsideClick: () => void;
}

const OutsideClickHandler: React.FC<OutsideClickHandlerProps> = ({children, onOutsideClick}) => {
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onOutsideClick();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onOutsideClick]);

    return <div ref={dropdownRef}>{children}</div>;
};

export default OutsideClickHandler;