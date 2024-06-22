import { isValidEmail } from '../utils/validation';

/**
 * Finds if applicant is valid
 * 
 * @typedef {Object} Applicant
 * @property {string} advisorPhone - Phone number of the advisor.
 * @property {int} delegationSize - Size of the delegation.
 * @property {string} headDelegateName - Name of the head delegate.
 * @property {string} schoolName - Name of the school.
 * @property {string} advisorOtherInformation - Additional information about the advisor.
 * @property {string} commentsOrQuestions - Comments or questions from the applicant.
 * @property {string} advisorEmail - Email address of the advisor.
 * @property {string} advisorRelation - Relation of the advisor to the applicant.
 * @property {string} schoolMailingAddress - Mailing address of the school.
 * @property {string} headDelegateEmail - Email address of the head delegate.
 * @property {string} headDelegatePhone - Phone number of the head delegate.
 * @property {string} advisorName - Name of the advisor.
 * @property {string} delegateList - List of delegates. Each delegate is represented as an object.
 * @property {int} invoiceStatus - Status of the invoice.
 * 
 * @param {Applicant} applicant - applicant to be checked
 * @returns {bool} if applicant is valid
 */
export function isApplicantValid(applicant) {
    return Object.keys(findApplicantErrors(applicant)).length === 0;
}

/**
 * Finds if exact errors applicant has
 * 
 * @typedef {Object} Applicant
 * @property {string} advisorPhone - Phone number of the advisor.
 * @property {int} delegationSize - Size of the delegation.
 * @property {string} headDelegateName - Name of the head delegate.
 * @property {string} schoolName - Name of the school.
 * @property {string} advisorOtherInformation - Additional information about the advisor.
 * @property {string} commentsOrQuestions - Comments or questions from the applicant.
 * @property {string} advisorEmail - Email address of the advisor.
 * @property {string} advisorRelation - Relation of the advisor to the applicant.
 * @property {string} schoolMailingAddress - Mailing address of the school.
 * @property {string} headDelegateEmail - Email address of the head delegate.
 * @property {string} headDelegatePhone - Phone number of the head delegate.
 * @property {string} advisorName - Name of the advisor.
 * @property {string} delegateList - List of delegates. Each delegate is represented as an object.
 * @property {int} invoiceStatus - Status of the invoice.
 * @returns {bool} if applicant is valid
 * 
 * @param {Applicant} applicant - applicant to be checked
 * @returns {Object} errors of applicant
 */
export function getApplicantErrors(applicant) {
    const newErrors = {};

    if (!applicant.advisorEmail) newErrors.advisorEmail = "Advisor Email is required";
    if (!isValidEmail(applicant.advisorEmail)) newErrors.advisorEmail = "Advisor Email is invalid";
    if (!applicant.advisorName) newErrors.advisorName = 'Advisor Name is required';
    if (!applicant.advisorPhone) newErrors.advisorPhone = 'Advisor Phone is required';
    if (!applicant.advisorRelation) newErrors.advisorRelation = "Advisor Relation is required";

    if (!applicant.schoolName) newErrors.schoolName = 'School Name is required';
    if (applicant.delegationSize <= 0) newErrors.delegationSize = 'Delegation Size is required';
    if (!applicant.schoolMailingAddress) newErrors.schoolMailingAddress = 'School Mailing Address is required';
    if (!applicant.isAgreeWithTerms) newErrors.isAgreeWithTerms = 'You must agree to the terms';
    return newErrors;
}

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

