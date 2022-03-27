import * as request from './requester.js'

const saveUser = (user) => {
    if (user.accessToken) {
        localStorage.setItem('user', JSON.stringify(user));
    }
};

const deleteUser = () => {
    localStorage.removeItem('user');
}

export const getUser = () => {
    let serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        let user = JSON.parse(serializedUser);

        return user;
    }
}

export const getToken = () => {
    return getUser()?.accessToken;
}
