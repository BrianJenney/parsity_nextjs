import { render, screen, fireEvent } from '@testing-library/react';
import App from '../app/page'; // Adjust this import to point to your App component
import ContactContextProvider from './providers/ContactsProvider';
import { act } from 'react-dom/test-utils';

describe('App', () => {
	it('should render the all contacts table', () => {
		render(
			<ContactContextProvider>
				<App />
			</ContactContextProvider>
		);

		const linkElement = screen.getByText(/All Contacts/i);
		expect(linkElement).toBeInTheDocument();

		const searchInput = screen.getByPlaceholderText('Search Contacts');

		act(() => {
			// filter by name
			fireEvent.change(searchInput, { target: { value: 'Albert' } });
		});
		expect(screen.getByText('Albert Einstein')).toBeInTheDocument();

		act(() => {
			// filter by name that doesn't exist
			fireEvent.change(searchInput, { target: { value: 'Jane' } });
		});
		expect(screen.queryByText('Albert Einstein')).not.toBeInTheDocument();
	});
});
