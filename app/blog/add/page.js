'use client';
import { BlogContext } from '@/app/providers/BlogContext';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogPage() {
	const router = useRouter();
	const [blogText, setBlogText] = useState('');
	const [title, setTitle] = useState('');
	const { addBlog } = useContext(BlogContext);

	function handleChange(e) {
		setBlogText(e.target.value);
	}

	function handleTitleChange(e) {
		setTitle(e.target.value);
	}

	function handleSubmit() {
		addBlog({ text: blogText, title });
		router.push('/blog');
	}

	return (
		<main className='flex min-h-screen flex-col items-center gap-10 p-24'>
			<input
				onChange={handleTitleChange}
				className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				type='text'
				placeholder='Title'
			></input>
			<textarea
				onChange={handleChange}
				id='message'
				rows='4'
				className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				placeholder='Write your thoughts here...'
			></textarea>
			<button
				className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
				disabled={!blogText.length || !title.length}
				onClick={handleSubmit}
			>
				Create Blog
			</button>
		</main>
	);
}
