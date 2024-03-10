import {useState} from 'react';
import {Dialog} from '@headlessui/react';

import {Review} from '@/app/lib/definitions';

import ReviewImagesCarousel from './review-images-carousel';

function ReviewImagesModal({review}: { review: Review }) {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    }

    const openModal = () => {
        setIsOpen(true);
    }

    return (
        <>
            <button onClick={openModal} className="text-blue-700 font-medium hover:underline">
                View Media
            </button>

            <Dialog open={isOpen} onClose={closeModal} className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true">
                        &#8203;
                    </span>

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl">
                        <ReviewImagesCarousel review={review}/>
                    </div>
                </div>
            </Dialog>
        </>
    );
}

export default ReviewImagesModal;