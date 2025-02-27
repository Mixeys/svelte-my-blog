import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const getPost = async (
	id: string,
	fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>
) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

	if (!res.ok) {
		error(res.status, res.statusText);
	}

	return await res.json();
};

export const load: PageServerLoad = async ({ params, fetch }) => {
	return { post: getPost(params.id, fetch) };
};
