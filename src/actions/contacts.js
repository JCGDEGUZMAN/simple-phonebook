import { getData } from '../database/queries.js';

export const getContacts = async () => {
    return await getData('contacts');
}