
/**
 * Different categories of invoices
 */
export const invoiceStatusCategories = ['Invoice Not Sent', 'Payment Not Received', 'Payment Received'];

/**
 * Takes an invoice integer and returns its corresponding category name
 * @param {number} number 
 * @returns {string} Invoice category name
 */
export function invoiceStatusToString(number) {
    if (number >= invoiceStatusCategories.length) {
        return "Invalid Invoice Status";
    }
    return invoiceStatusCategories[number];
}