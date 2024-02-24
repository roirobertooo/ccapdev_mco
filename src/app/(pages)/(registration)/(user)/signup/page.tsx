// TODO: Sign Up Page: forms functionality
'use client';
import React, {useState} from 'react';

import {AvatarPreview} from '@/app/ui/signup/avatar-preview';

import Image from 'next/image';

export default function Page() {
    const [avatar, setAvatar] = useState<string | null>("/signup_assets/avatar.png");

    return (
        <div className="relative flex justify-center h-full overflow-hidden lg:px-0 md:px-12">
            <div
                className="relative z-10 flex flex-col flex-1 px-4 py-10 bg-white shadow-2xl lg:py-24 md:flex-none md:px-28 sm:justify-center">
                <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                    <div className="flex flex-col pb-7 md:-mt-32">
                        <h2 className="text-4xl font-medium text-gray-900">Start sharing your dining
                            experiences.</h2>
                    </div>

                    <form>
                        <div className="mt-4 space-y-6">
                            <div className="flex flex-row gap-5">
                                <div>
                                    <label className="block mb-3 text-sm font-medium text-gray-600"
                                           htmlFor="first_name">
                                        First name
                                    </label>
                                    <input
                                        className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                        placeholder="First" required/>
                                </div>

                                <div>
                                    <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="last_name">
                                        Last name
                                    </label>
                                    <input
                                        className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                        placeholder="Last" required/>
                                </div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="username">
                                        Username
                                    </label>
                                    <input
                                        className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                        placeholder="Username" required/>
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                        placeholder="Password" autoComplete="off" type="password" required/>
                                </div>
                            </div>

                            <div>
                                <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="avatar">
                                    Profile Avatar
                                </label>
                                <div className="flex gap-10 items-center">
                                    <AvatarPreview onAvatarChange={setAvatar}/>
                                    {avatar && <Image src={avatar} alt="Avatar preview" width="50" height="50"
                                                      className="w-16 h-16 object-cover rounded-full border-2 border-gray-200"/>}
                                </div>
                            </div>


                            <div>
                                <label className="block mb-3 text-sm font-medium text-gray-600"
                                       htmlFor="message">
                                    Profile Description
                                    <span className="text-sm font-normal ml-2">
                                        (optional)
                                    </span>
                                </label>
                                <div className="mt-1">
                                            <textarea
                                                className="resize-none block w-full h-40 px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                                placeholder="Tell us about yourself!"></textarea>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <button
                                    className="items-center justify-center w-full px-6 py-2.5 text-center text-white font-medium duration-200 bg-brandBlue border-2 border-brandBlue rounded-full nline-flex hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                                    type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="hidden bg-white lg:block lg:flex-1 lg:relative sm:contents">
                <div className="absolute inset-0 w-full h-full bg-white">
                    <Image className="object-center object-cover h-full bg-gray-200"
                           src="/signup_assets/cover.png"
                           alt="" width="1310" height="873"/>
                </div>
            </div>
        </div>
    );
}
