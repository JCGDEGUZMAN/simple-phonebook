import { getData, addData, updateData, deleteData } from '../database/queries.js';

export const getContacts = async () => {
    return await getData('contacts');
}

export const addContact = async (data) => {
    return await addData('contacts', data);
}

export const updateContact = async (id,data) => {
    return await updateData('contacts', id, data);
}

export const deleteContact = async (id) => {
    return await deleteData('contacts', id);
}