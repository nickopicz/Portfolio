'use client';

import React, { useEffect, useState } from 'react';

interface Repo {
	id: number | string;
	html_url: string;
	name: string;
	language?: string | null;
	description?: string | null;
	stargazers_count: number;
	forks_count: number;
}

const Projects: React.FC = () => {
	const [repos, setRepos] = useState<Repo[]>([]);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const fetchRepos = async () => {
			try {
				const response = await fetch(
					'/api/github?type=all&sort=updated&direction=desc&per_page=10&page=1'
				);
				if (!response.ok) {
					throw new Error('Failed to fetch repositories.');
				}
				const data: Repo[] = await response.json();
				setRepos(data);
			} catch (err) {
				console.error('Error fetching repositories:', err);
				setError('Failed to load GitHub repositories.');
			}
		};

		fetchRepos();
	}, []);

	return (
		<div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen pt-20 p-8">
			<div className="container mx-auto">
				<h1 className="text-4xl font-bold text-accent-primary mb-6">
					Projects
				</h1>
				<p className="text-lg mb-4">
					Explore some of the projects I’ve worked on, showcasing my skills and
					passion for development.
				</p>

				{/* GitHub Repositories Section */}
				<div className="mt-12">
					<h2 className="text-2xl font-bold text-accent-primary mb-2">
						GitHub Repositories
					</h2>
					<p className="text-lg mb-8">
						More of my GitHub projects can be found below, as well as the
						previously mentioned projects.
					</p>
					{error ? (
						<p className="text-red-500">{error}</p>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{repos.map((repo) => (
								<div
									key={repo.id}
									className="border rounded-lg p-4 shadow hover:shadow-lg transition"
								>
									<h2 className="text-xl font-semibold text-accent-primary">
										<a
											href={repo.html_url}
											target="_blank"
											rel="noopener noreferrer"
											className="hover:underline"
										>
											{repo.name}
										</a>
									</h2>
									<p className="text-sm text-gray-500 mt-2">
										<strong>Language:</strong> {repo.language || 'N/A'}
									</p>
									<p className="text-sm mt-2">
										{repo.description || 'No description available.'}
									</p>
									<div className="flex items-center justify-between mt-4">
										<span className="text-sm">⭐ {repo.stargazers_count}</span>
										<span className="text-sm">🍴 {repo.forks_count}</span>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Projects;
