import Link from 'next/link';

export default function AboutPage() {
	return (
		<main className='flex min-h-screen flex-col items-center gap-10 p-24'>
			<h1>This is my about page</h1>
			<Link href='/blog'>Go to Blogs</Link>
			<p>This is my blog site. Welcome!</p>
		</main>
	);
}
