import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import BlogContextProvider from './providers/BlogContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<nav className='flex justify-around center'>
					<Link href='/'>Home</Link>
					<Link href='/about'>About</Link>
					<Link href='/blog'>Blogs</Link>
					<Link href='/blog/add'>Write a Blog</Link>
				</nav>
				<BlogContextProvider>{children}</BlogContextProvider>
			</body>
		</html>
	);
}
