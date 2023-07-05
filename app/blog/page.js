'use client';
import Link from 'next/link';
import { BlogContext } from '@/app/providers/BlogContext';

import { useContext } from 'react';

export default function AllBlogs() {
	const { blogs } = useContext(BlogContext);

	return (
		<main className='flex min-h-screen flex-col items-center gap-10 p-24'>
			<h1>Check out some blogs</h1>
			<section>
				{blogs.map(({ id, title }) => (
					<Link key={id} href={`blog/${id}`}>
						{title.toUpperCase() || 'Blog'}
					</Link>
				))}
			</section>
		</main>
	);
}
