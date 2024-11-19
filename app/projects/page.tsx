'use client';
import React, { useEffect, useState } from 'react';
import getRepos from '../api/github/route';

const Projects: React.FC = () => {
	const [repos, setRepos] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchRepos = async () => {
			try {
				const response = await fetch(
					'/api/github?type=all&sort=updated&direction=desc&per_page=10&page=1'
				);
				if (!response.ok) {
					throw new Error('Failed to fetch repositories.');
				}
				const data = await response.json();
				setRepos(data);
			} catch (err) {
				console.error('Error fetching repositories:', err);
				setError('Failed to load GitHub repositories.');
			}
		};

		fetchRepos();
	}, []);

	return (
		<div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen p-8">
			<div className="container mx-auto">
				<h1 className="text-4xl font-bold text-accent-primary mb-6">
					Projects
				</h1>
				<p className="text-lg mb-4">
					Explore some of the projects I’ve worked on, showcasing my skills and
					passion for development.
				</p>

				{/* Socrio Mobile App Section */}
				<div className="mt-8">
					<h2 className="text-2xl font-bold text-accent-primary mb-4">
						Socio Mobile App
					</h2>
					<p className="text-lg mb-2">
						A cross-platform social networking app designed to connect local
						people and short form audio communication, built using modern tools
						and frameworks.
					</p>
					<ul className="list-disc list-inside text-lg mb-4">
						<li>
							<strong>Frontend:</strong> React Native, Expo
						</li>
						<li>
							<strong>State Management:</strong> Redux
						</li>
						<li>
							<strong>Backend:</strong> Firebase
						</li>
						<li>
							<strong>Other Tools:</strong> TypeScript, Jest (for testing),
							React Native's Animated API, Flask REST API
						</li>
					</ul>
					<p className="text-lg">
						Socrio demonstrates my ability to build scalable, user-friendly
						applications with a focus on responsive design and seamless user
						experiences. I was able to design and implement various features
						such as voice memo recording, virtual chat rooms, direct messaging,
						and social media style feed with voting mechanism. The released
						application was recieved by a niche audience that was satisfied, but
						too small to continue development.
					</p>
				</div>

				{/* GitHub Repositories Section */}
				<div className="mt-12">
					<h2 className="text-2xl font-bold text-accent-primary mb-4">
						GitHub Repositories
					</h2>
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

				{/* Resume Section */}
				<div className="mt-12">
					<h2 className="text-2xl font-bold text-accent-primary mb-4">
						My Resume
					</h2>
					<p className="text-lg mb-2">
						You can view or download my resume below to learn more about my
						background and experience.
					</p>
					<a
						href="/resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="text-accent-primary hover:text-accent-secondary underline"
					>
						View Resume (PDF)
					</a>
				</div>
			</div>
		</div>
	);
};

export default Projects;
