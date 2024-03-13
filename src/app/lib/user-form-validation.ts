'use client';

import {UserAccount} from './definitions';

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

    if (user && name !== user.name) {
        const postString = `/api/post?collectionName=user_accounts&findKeys=_id&findValues=${userId}&updateKeys=name&updateValues=${name}`;

        fetch(postString, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error(error);
            });
    }

    if (user && username !== user.username) {
        const postString = `/api/post?collectionName=user_accounts&findKeys=_id&findValues=${userId}&updateKeys=username&updateValues=${username}`;

        fetch(postString, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error(error);
            });
    }

    if (password !== "") {
        const postString = `/api/post?collectionName=user_accounts&findKeys=_id&findValues=${userId}&updateKeys=password&updateValues=${password}`;

        fetch(postString, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error(error);
            });
    }

    if (user && description !== user.description) {
        const postString = `/api/post?collectionName=user_accounts&findKeys=_id&findValues=${userId}&updateKeys=description&updateValues=${description}`;

        fetch(postString, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error(error);
            });
    }

    return name !== user?.name || username !== user?.username || password !== "" || description !== user?.description;
}

export default ValidateForm;