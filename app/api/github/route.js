import { Octokit } from '@octokit/core';

export async function GET(req) {
	try {
		const octokit = new Octokit({
			auth: process.env.GITHUB_KEY,
		});

		const username = 'nickopicz';
		const { searchParams } = new URL(req.url);
		const type = searchParams.get('type') || 'all'; // Default: all
		const sort = searchParams.get('sort') || 'updated'; // Default: updated
		const direction = searchParams.get('direction') || 'desc'; // Default: desc
		const page = searchParams.get('page') || 1; // Default: 1

		// Make the API request
		const response = await octokit.request('GET /users/{username}/repos', {
			username,
			headers: {
				'X-GitHub-Api-Version': '2022-11-28',
			},
			params: {
				type,
				sort,
				direction,
				page,
			},
		});

		const data = response.data
			.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)) // Sort descending by `pushed_at`
			.map((repo) => ({
				id: repo.id,
				name: repo.name,
				description: repo.description,
				html_url: repo.html_url,
				stargazers_count: repo.stargazers_count,
				forks_count: repo.forks_count,
				language: repo.language,
			}));

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Error fetching repositories:', error);
		return new Response(
			JSON.stringify({ error: 'Failed to fetch repositories' }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } }
		);
	}
}
