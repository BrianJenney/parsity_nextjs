'use client';
import { useParams } from 'next/navigation';
import { CONSTANTS } from '../../../constants';
import ContactForm from '../../../components/ContactForm';
import { useContext } from 'react';
import { ContactContext } from '../../../providers/ContactsProvider';

function EditContact() {
	const { contacts, editContact } = useContext(ContactContext);
	const { id } = useParams();

	const contact = contacts.find((person) => person.id === Number(id)) || {};

	return (
		<div>
			<h1>Edit Contact</h1>
			<ContactForm
				contact={contact}
				editContact={editContact}
				contacts={contacts}
				btnLabel={CONSTANTS.SAVE_CHANGES}
			/>
		</div>
	);
}

export default EditContact;
