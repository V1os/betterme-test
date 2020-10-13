// Instruments
import { MAIN_URL } from './config';

const initialHeader = {
    "Content-Type": "application/json",
};

export const api = {
    // get token () {
    //     return localStorage.getItem('token');
    // },
    search: {
        fetch (parameters, headers = initialHeader) {
            const query = Object.keys(parameters).map((key) => {
                return `${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}`;
            }).join('&');

            return fetch(`${MAIN_URL}?${query}`);
        },
    },
};
