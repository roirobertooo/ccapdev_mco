'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';

import {postData, useFetchData} from '@/app/lib/utils';
import {UserAccount} from '@/app/lib/definitions';
import validateForm from '@/app/lib/user-form-validation';

import AvatarPreview from '@/app/ui/signup/avatar-preview';

function UserForm({userId}: { userId: string }) {
    const userFetchString = `/api/get?collectionName=user_accounts&findKeys=_id&findValues=${userId}`;
    const [userData, userDataError] = useFetchData<UserAccount[]>(userFetchString);
    const user = userData ? userData[0] : null;

    const usersFetchString = "/api/get?collectionName=user_accounts";
    const [users, usersError] = useFetchData<UserAccount[]>(usersFetchString);

    const userAccounts = users?.map((user) => user.username);

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [avatarUrl, setAvatarUrl] = useState<string | null>("/signup/avatar.png");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (user) {
            setName(user.name);
            setAvatarUrl(user.avatar_url);
            setUsername(user.username);
            setDescription(user.description);
        }
    }, [user]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const userForm = {
            user: user,
            userAccounts: userAccounts,
            userId: userId,
            name: name,
            username: username,
            password: password,
            repeatPassword: repeatPassword,
            description: description
        };

        const formValidation = validateForm(userForm);

        if (formValidation === true) {
            if (user && name !== user.name) {
                postData(`/api/post?collectionName=user_accounts&findKeys=_id&findValues=${userId}&updateKeys=name&updateValues=${name}`);
            }

            if (user && username !== user.username) {
                postData(`/api/post?collectionName=user_accounts&findKeys=_id&findValues=${userId}&updateKeys=username&updateValues=${username}`);
            }

            if (password !== "") {
                postData(`/api/post?collectionName=user_accounts&findKeys=_id&findValues=${userId}&updateKeys=password&updateValues=${password}`);
            }

            if (user && description !== user.description) {
                postData(`/api/post?collectionName=user_accounts&findKeys=_id&findValues=${userId}&updateKeys=description&updateValues=${description}`);
            }

            alert("Success! Your changes were saved.");
        } else if (formValidation === false) {
            alert("No changes were detected in the form.");
        }

        window.location.reload();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="ml-10 mt-4 mb-20 space-y-6 w-2/3 flex flex-col">
                <div className="flex flex-row justify-start gap-10 w-2/3">
                    <div>
                        <label className="block mb-3 text-sm font-medium text-gray-600"
                               htmlFor="name">
                            Name
                        </label>
                        <input
                            className="block w-full px-6 py-3
                                                    text-black bg-white border border-gray-200
                                                    appearance-none
                                                    rounded-xl
                                                    focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            value={name}
                            onChange={(event) => setName(event.target.value)}/>
                    </div>

                    <div className="col-span-full">
                        <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="block w-full px-6 py-3
                                                    text-black bg-white border border-gray-200
                                                    appearance-none
                                                    rounded-xl
                                                    focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}/>
                    </div>
                </div>

                <hr className="w-full"/>

                <div className="flex flex-row justify-start gap-10 w-2/3">
                    <div className="col-span-full">
                        <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="block w-full px-6 py-3
                                                    text-black bg-white border border-gray-200
                                                    appearance-none
                                                    rounded-xl
                                                    placeholder:text-gray-400
                                                    focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="Password" autoComplete="off" type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div className="col-span-full">
                        <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="password">
                            Repeat Password
                        </label>
                        <input
                            className="block w-full px-6 py-3
                                                    text-black bg-white border border-gray-200
                                                    appearance-none
                                                    rounded-xl
                                                    placeholder:text-gray-400
                                                    focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="Password" autoComplete="off" type="password"
                            value={repeatPassword}
                            onChange={(event) => setRepeatPassword(event.target.value)}/>
                    </div>
                </div>

                <hr className="w-full"/>

                <div className="w-full">
                    <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="avatar">
                        Profile Avatar
                    </label>
                    <div className="flex flex-row gap-10 items-center">
                        <AvatarPreview onAvatarChange={setAvatarUrl} isRequired={false} upload={true}/>

                        <div>
                            {avatarUrl && <Image src={avatarUrl} alt="Avatar preview" width="50" height="50"
                                                 className="w-16 h-16 object-cover rounded-full border-2 border-gray-200"/>}
                        </div>
                    </div>
                </div>

                <hr className="w-full"/>

                <div className="w-full">
                    <label className="block mb-3 text-sm font-medium text-gray-600"
                           htmlFor="message">
                        Profile Description
                    </label>
                    <div className="mt-1">
                                            <textarea
                                                className="resize-none
                                                            block w-full h-40 px-6 py-3
                                                            text-black sm:text-sm
                                                            border border-gray-200 rounded-xl
                                                            bg-white appearance-none
                                                            placeholder:text-gray-400
                                                            focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                                value={description}
                                                onChange={(event) => setDescription(event.target.value)}
                                                maxLength={300}>
                                            </textarea>
                    </div>
                </div>

                <div className="flex flex-col items-center w-full">
                    <button
                        className="items-center justify-center
                                                w-3/5 px-6 py-2.5
                                                text-center text-white font-medium text-sm
                                                duration-200
                                                bg-brandBlue border-2 border-brandBlue rounded-full
                                                inline-flex
                                                hover:bg-blue-600 hover:border-blue-600
                                                focus:outline-none focus-visible:outline-black focus-visible:ring-black"
                        type="submit">
                        Save changes
                    </button>
                </div>
            </div>
        </form>
    );
}

export default UserForm;