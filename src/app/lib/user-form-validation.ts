'use client';

import {UserAccount} from './definitions';
import {postData} from "./utils";

interface UserForm {
    user: UserAccount | null;
    userAccounts: string[] | undefined;
    userId: string;
    name: string;
    username: string | null;
    password: string | null;
    repeatPassword: string | null;
    description: string;
}

function ValidateForm(userForm: UserForm) {
    const usernameRegex = /^[a-z0-9]{4,15}$/i;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const {
        user, userAccounts, userId,
        name, username, password, repeatPassword, description
    } = userForm;

    if (user && name !== user.name) {
        if (name === "") {
            alert("Invalid name. It cannot be empty.");
            return -1;
        }
    }

    if (user && username && username !== user.username) {
        if (!usernameRegex.test(username)) {
            alert("Invalid username. It should be alphanumeric and between 4 to 15 characters long.");
            return -1;
        }

        if (userAccounts && userAccounts.includes(username)) {
            alert("Username already exists.");
            return -1;
        }
    }

    if (password !== "") {
        if (password !== null && !passwordRegex.test(password)) {
            alert("Invalid password. It should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return -1;
        }

        if (password !== repeatPassword) {
            alert("Passwords do not match.");
            return -1;
        }
    }

    return name !== user?.name || username !== user?.username || password !== "" || description !== user?.description;
}

export default ValidateForm;