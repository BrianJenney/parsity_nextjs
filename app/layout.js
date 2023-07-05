import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS
import './globals.css';

import { Inter } from 'next/font/google';
import ContactContextProvider from './providers/ContactsProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ContactContextProvider>{children}</ContactContextProvider>
			</body>
		</html>
	);
}
