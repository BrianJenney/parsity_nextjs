'use client';
import { BlogContext } from '@/app/providers/BlogContext';

import { useContext } from 'react';
import { useParams } from 'next/navigation';

export default function BlogPage() {
	const params = useParams();
	const { blogs } = useContext(BlogContext);

	console.log({ blogs }, params.id);

	const blog = blogs.find((blog) => `${blog.id}` === params.id);

	if (!blog) {
		return <h1>No Blog Found</h1>;
	}

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<p>{blog.text}</p>
		</main>
	);
}
