'use client';
import { ContactContext } from '../../providers/ContactsProvider';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useContext } from 'react';

function ContactInfo() {
	const { contacts } = useContext(ContactContext);
	const { id } = useParams();

	const contact = contacts.find((person) => person.id === Number(id));

	if (!contact) return <h1>Contact not found</h1>;

	return (
		<div className='container-md'>
			<h1>Contact Info</h1>
			<Link href='/'>Back</Link>
			<h2>{contact.name}</h2>
			<img
				className='rounded'
				width={500}
				height={500}
				src={contact.image_url}
				alt={contact.name}
			/>
			<p>{contact.email}</p>
			<p>{contact.phone_number}</p>
		</div>
	);
}

export default ContactInfo;
