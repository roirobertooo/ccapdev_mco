'use client';

import React, {useEffect, useState} from 'react';
import {useCookies} from 'next-client-cookies';
import Image from 'next/image';
import Link from 'next/link';
import {redirect} from 'next/navigation';
import bcrypt from 'bcryptjs';


import {postData, putData, useFetchData} from '@/app/lib/utils';
import {UserAccount} from '@/app/lib/definitions';
import validateForm from '@/app/lib/user-form-validation';

import AvatarPreview from '@/app/ui/signup/avatar-preview';

function UserForm({requireAll}: { requireAll: boolean }) {
    const userId = useCookies().get("currentUser");

    // When editing
    const userFetchString = `/api/get?collectionName=user_accounts&findKeys=_id&findValues=${userId}`;
    const [userData, userDataError] = useFetchData<UserAccount[]>(userFetchString);
    const user = userData ? userData[0] : null;

    // General, for both editing and signup
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [avatarUrl, setAvatarUrl] = useState<string | null>("/signup/avatar.png");
    const [description, setDescription] = useState("");

    // General, for both editing and signup
    const usersFetchString = "/api/get?collectionName=user_accounts";
    const [users, usersError] = useFetchData<UserAccount[]>(usersFetchString);

    const userAccounts = users?.map((user) => user.username);

    // When editing
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
            requireAll: requireAll,

            user: user,
            userAccounts: userAccounts,

            name: name,
            username: username,
            password: password,
            repeatPassword: repeatPassword,
            description: description
        }

        const formValidation = validateForm(userForm);

        if (formValidation === true) {
            setUsername(username.toLowerCase());

            const hashedPassword = bcrypt.hashSync(password, 10);

            if (requireAll) {
                putData(`/api/put?collectionName=user_accounts&putKeys=name,username,password,avatar_url,description&putValues=${name},${username},${hashedPassword},${avatarUrl},${description}`);

                alert("Success! Your account has been created.");

                redirect("/login");
            } else {
                if (user && name !== user.name) {
                    postData(`/api/post?collectionName=user_accounts&findKeys=_id&findValues=${userId}&updateKeys=name&updateValues=${name}`);
                }

                if (user && username !== user.username) {
                    postData(`/api/post?collectionName=user_accounts&findKeys=_id&findValues=${userId}&updateKeys=username&updateValues=${username}`);
                }

                if (password !== "") {
                    postData(`/api/post?collectionName=user_accounts&findKeys=_id&findValues=${userId}&updateKeys=password&updateValues=${hashedPassword}`);

                    setPassword("");
                    setRepeatPassword("");
                }

                if (user && description !== user.description) {
                    postData(`/api/post?collectionName=user_accounts&findKeys=_id&findValues=${userId}&updateKeys=description&updateValues=${description}`);
                }

                alert("Success! Your changes were saved.");

                location.reload();
            }
        } else if (formValidation === false) {
            alert("No changes were detected in the form.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mt-4 mb-20 space-y-6 flex flex-col">
                <div className="flex flex-row justify-start gap-10">
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
                            placeholder={requireAll ? "Name" : ""}
                            onChange={(event) => setName(event.target.value)}
                            required={requireAll}/>
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
                            placeholder={requireAll ? "Username" : ""}
                            onChange={(event) => setUsername(event.target.value)}
                            required={requireAll}/>
                    </div>
                </div>

                <hr/>

                <div className="flex flex-row justify-start gap-10">
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
                            onChange={(event) => setPassword(event.target.value)}
                            required={requireAll}/>
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
                            onChange={(event) => setRepeatPassword(event.target.value)}
                            required={requireAll}/>
                    </div>
                </div>

                <hr/>

                <div className="">
                    <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="avatar">
                        Profile Avatar
                    </label>
                    <div className="flex flex-row gap-10 items-center">
                        <AvatarPreview onAvatarChange={setAvatarUrl} isRequired={requireAll} upload={true}/>

                        <div className="w-16 h-16">
                            {avatarUrl && <Image src={avatarUrl} alt="Avatar preview" width="50" height="50"
                                                 className="w-16 h-16 object-cover rounded-full border-2 border-gray-200"/>}
                        </div>
                    </div>
                </div>

                <hr/>

                <div>
                    <label className="block mb-3 text-sm font-medium text-gray-600"
                           htmlFor="message">
                        Profile Description
                    </label>
                    <div className="mt-1">
                                            <textarea
                                                className="resize-none
                                                            block w-full h-24 px-6 py-3
                                                            text-black sm:text-sm
                                                            border border-gray-200 rounded-xl
                                                            bg-white appearance-none
                                                            placeholder:text-gray-400
                                                            focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                                value={description}
                                                placeholder={requireAll ? "Tell us about yourself!" : ""}
                                                onChange={(event) => setDescription(event.target.value)}
                                                maxLength={300}>
                                            </textarea>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <button
                        className={`items-center justify-center
                                    ${requireAll ? "w-3/5" : "w-1/6"} px-6 py-2.5
                                    text-center text-white font-medium text-sm
                                    duration-200
                                    bg-brandBlue border-2 border-brandBlue rounded-full
                                    inline-flex
                                    hover:bg-blue-600 hover:border-blue-600
                                    focus:outline-none focus-visible:outline-black focus-visible:ring-black`}
                        type="submit">
                        {requireAll ? "Sign Up" : "Save changes"}
                    </button>

                    {requireAll &&
                        <p className="mt-5 text-center text-sm text-gray-500">
                            Already a member?{" "}
                            <Link href="/login"
                                  className="font-semibold leading-6 text-brandBlue hover:text-blue-600">
                                Log in!
                            </Link>
                        </p>
                    }
                </div>
            </div>
        </form>
    );
}

export default UserForm;