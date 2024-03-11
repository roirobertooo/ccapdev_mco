'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useFormState, useFormStatus} from 'react-dom';

import {authenticate} from '@/app/lib/actions';

function LoginButton() {
    const {pending} = useFormStatus();

    return (
        <button aria-disabled={pending}
                type="submit"
                className="flex w-full justify-center
                           rounded-full bg-brandBlue
                           px-3 py-2
                           text-sm font-semibold leading-6 text-white
                           shadow-sm
                           hover:bg-blue-600
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                           focus-visible:outline-indigo-600
                           duration-200">
            Login
        </button>
    )
}

function Page() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <div className="flex flex-1 flex-col justify-center min-h-full px-6 py-12 lg:px-8 -mt-28">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image className="mx-auto h-10 w-auto unselectable" src="/logo.png" width={40} height={40} alt="Logo"
                       priority/>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Log in to your account
                </h2>
            </div>

            <div className={`${errorMessage ? "" : "mt-10"} sm:mx-auto sm:w-full sm:max-w-sm`}>
                <form className="space-y-6" action={dispatch}>
                    <div className="flex justify-center">
                        {errorMessage &&
                            <div
                                className="w-fit bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded relative"
                                role="alert">
                                <span className="block sm:inline font-medium">
                                    {errorMessage}
                                </span>
                            </div>
                        }
                    </div>

                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="block w-full py-1.5 shadow-sm
                                            text-gray-900 sm:text-sm sm:leading-6
                                            rounded-xl border-0
                                            ring-1 ring-inset ring-gray-300
                                            focus:ring-2 focus:ring-inset focus:ring-brandBlue
                                            placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full py-1.5 shadow-sm
                                            text-gray-900 sm:text-sm sm:leading-6
                                            rounded-xl border-0
                                            ring-1 ring-inset ring-gray-300
                                            focus:ring-2 focus:ring-inset focus:ring-brandBlue
                                            placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox"
                                   className="h-4 w-4 text-brandBlue focus:ring-brandBlue border-gray-300 rounded transition ease-linear duration-100"/>
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>
                    </div>

                    <div>
                        <LoginButton/>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{" "}
                    <Link href="/signup" className="font-semibold leading-6 text-brandBlue hover:text-blue-600">
                        Sign up!
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Page;