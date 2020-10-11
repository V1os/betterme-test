export const delay = (duration = 1000) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

export const getFullApiUrl = (api) => {
    if (typeof api !== 'string') {
        throw new Error("'api' arguments passed should be a string!");
    }

    return `${api}`;
};
