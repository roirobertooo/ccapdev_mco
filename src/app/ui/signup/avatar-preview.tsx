import React from 'react';

interface AvatarPreviewProps {
    onAvatarChange: (avatar: string | null) => void;
    isRequired?: boolean;
    upload?: boolean;
}

const AvatarPreview: React.FC<AvatarPreviewProps> = ({onAvatarChange, isRequired, upload}) => {
    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();

            reader.onload = (event) => {
                // TODO: do image upload
                onAvatarChange(event.target?.result as string);
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div>
            <input
                className="block px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                type="file"
                id="avatar"
                name="avatar"
                accept="image/*"
                onChange={handleAvatarChange}
                required={isRequired !== undefined ? isRequired : true}
            />
        </div>
    );
};

export default AvatarPreview;