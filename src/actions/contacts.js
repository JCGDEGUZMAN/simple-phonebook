import { getData, addData } from '../database/queries.js';

export const getContacts = async () => {
    return await getData('contacts');
}

export const addContact = async (data) => {
    return await addData('contacts', data);
}