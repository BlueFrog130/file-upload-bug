import type { RequestHandler } from "@sveltejs/kit";
import { writeFile } from 'node:fs/promises';

/**
 * Saves uploaded files to the `static` directory
 */
export const post: RequestHandler = async ({ request }) => {
	const data = await request.formData();
	const files = [];
	for (const file of data.getAll('files')) {
		if (typeof file !== 'string') {
			files.push(file.name);
			await writeFile(`static/${file.name}`, file.stream());
		}
	}
	return {
		status: 201,
		body: files
	}
}