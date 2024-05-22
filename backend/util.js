// Utils library for common functions


export function generateRandomId() {
    return Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
}

export function getCurrentDate() {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}