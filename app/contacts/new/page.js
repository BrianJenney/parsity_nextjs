'use client';
import ContactForm from '../../components/ContactForm';
import { CONSTANTS } from '../../constants';
import { useContext } from 'react';
import { ContactContext } from '../../providers/ContactsProvider';

function AddNewContact() {
	const { addContact } = useContext(ContactContext);

	return (
		<div className='container'>
			<h1>Add New Contact</h1>
			<ContactForm
				editContact={addContact}
				btnLabel={CONSTANTS.ADD_NEW_CONTACT}
			/>
		</div>
	);
}

export default AddNewContact;
