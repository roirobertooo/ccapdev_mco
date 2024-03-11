"use server";

import {cookies} from 'next/headers';
import {AuthError} from 'next-auth';

import {signIn, signOut} from '@/auth';

async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
        await signIn("credentials", formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return "Incorrect username or password.";
                default:
                    return "Something went wrong.";
            }
        }

        throw error;
    }
}

async function deauthenticate() {
    cookies().delete({name: "currentUser"});

    await signOut();
}

export {authenticate, deauthenticate};