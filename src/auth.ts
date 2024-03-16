import {cookies} from 'next/headers';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import clientPromise from '@/app/lib/mongodb';
import {UserAccount} from '@/app/lib/definitions';

import {authConfig} from './auth.config';

const bcrypt = require('bcryptjs');

const {auth, signIn, signOut} = NextAuth({
    ...authConfig,
    providers: [Credentials({
        async authorize(credentials, req) {
            const rememberMe = credentials.remember_me;
            const username = (credentials.username as string).toLowerCase();

            const client = await clientPromise;
            const db = client.db();

            let users: any[] = [];

            users = await db
                .collection("user_accounts")
                .find({username: username})
                .toArray();

            if (!users) return null;

            const user = users[0] as UserAccount;

            const passwordMatch = bcrypt.compareSync(credentials.password, user.password);

            if (passwordMatch) {
                console.log("Valid credentials");

                cookies().set({
                    name: "currentUser",
                    value: user._id,
                    ...(rememberMe ? {maxAge: 60 * 60 * 24 * 7 * 3} : {}) // 3 weeks session if rememberMe is true
                })

                return users[0];
            }

            console.log("Invalid credentials");
            return null;
        }
    })
    ]
});

export {auth, signIn, signOut};