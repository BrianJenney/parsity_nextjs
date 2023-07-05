'use client';
import { createContext, useState } from 'react';
import { generateId } from '../utils';
export const ContactContext = createContext({});

export default function ContactContextProvider({ children }) {
	const [contacts, setContacts] = useState([
		{
			id: generateId(),
			name: 'Albert Einstein',
			image_url:
				'https://cdn.pixabay.com/photo/2016/12/27/06/38/albert-einstein-1933340_1280.jpg',
			email: 'aeinstein@example.com',
			phone_number: '15555555555',
		},
	]);

	const addContact = (contact) => {
		setContacts([...contacts, contact]);
	};

	const editContact = (contact) => {
		const newContacts = contacts.map((c) => {
			if (c.id === contact.id) {
				return contact;
			}
			return c;
		});
		setContacts(newContacts);
	};
	return (
		<ContactContext.Provider value={{ editContact, addContact, contacts }}>
			{children}
		</ContactContext.Provider>
	);
}
