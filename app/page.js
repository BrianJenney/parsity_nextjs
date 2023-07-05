'use client';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { CONSTANTS } from './constants';
import { ContactContext } from './providers/ContactsProvider';

function AllContacts() {
	const { contacts } = useContext(ContactContext);

	const [filteredContacts, setFilteredContacts] = useState(contacts);

	const filterContacts = (e) => {
		const { value } = e.target;

		setFilteredContacts(
			contacts.filter((contact) => {
				const contactName = contact.name.toLowerCase();
				return contactName.includes(value.toLowerCase());
			})
		);
	};
	return (
		<div className='container'>
			<h1>All Contacts</h1>
			<Link href='/contacts/new'>
				<button type='button' className='btn btn-primary'>
					{CONSTANTS.ADD_CONTACT}
				</button>
			</Link>
			<input
				type='text'
				placeholder='Search Contacts'
				className='form-control mt-3'
				onChange={filterContacts}
			/>
			<table className='table table-striped mt-3'>
				<thead>
					<tr>
						<th scope='col'>Profile Pic</th>
						<th scope='col'>Name</th>
						<th scope='col'>Email</th>
						<th scope='col'>Phone</th>
					</tr>
				</thead>
				<tbody>
					{(filteredContacts || []).map(
						({ id, image_url, name, phone_number, email }) => (
							<tr key={id}>
								<td>
									<img
										src={image_url}
										alt={name}
										style={{
											width: '50px',
											height: '50px',
											borderRadius: '50%',
										}}
									/>
								</td>
								<td>
									<Link href={`/contacts/${id}`}>{name}</Link>
								</td>
								<td>{email}</td>
								<td>{phone_number}</td>
								<td>
									<Link href={`/contacts/${id}/edit`}>
										Edit
									</Link>
								</td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</div>
	);
}

export default AllContacts;
