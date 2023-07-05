'use client';

import { createContext, useState } from 'react';

export const BlogContext = createContext({});

export default function BlogContextProvider({ children }) {
	const [blogs, setBlogs] = useState([]);

	function addBlog({ text, title }) {
		const newBlog = {
			id: Math.random().toString(16).slice(2),
			title,
			text,
		};
		setBlogs((prev) => [...prev, newBlog]);
	}
	return (
		<BlogContext.Provider value={{ addBlog, blogs }}>
			{children}
		</BlogContext.Provider>
	);
}
