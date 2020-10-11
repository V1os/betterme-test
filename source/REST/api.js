// Instruments
import { MAIN_URL } from './config';

const initialHeader = {
    'X-RateLimit-Limit': 30,
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

            return fetch(`${MAIN_URL}/?${query}`, {
                method: 'GET',

                headers: {
                    // Authorization: this.token,
                    ...headers,
                },
            });
        },
    },
};
