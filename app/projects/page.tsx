'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const LoadingAnim = dynamic(() => import('../components/common/LottiePlayer'), {
	ssr: false,
});
import Image from 'next/image';

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
	const [isLoading, setIsLoading] = useState<boolean>(true);

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
			} finally {
				setIsLoading(false);
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
				<div className="mt-8">
					<h2 className="text-2xl font-bold text-accent-primary mb-4">
						Socrio Mobile App
					</h2>
					<p className="text-lg mb-2">
						A cross-platform social networking app designed to connect local
						people and short-form audio communication, built using modern tools
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
					<p className="text-lg mb-4">
						Socrio demonstrates my ability to build scalable, user-friendly
						applications with a focus on responsive design and seamless user
						experiences. I was able to design and implement various features
						such as voice memo recording, virtual chat rooms, direct messaging,
						and a social media-style feed with a voting mechanism. The released
						application was received by a niche audience that was satisfied but
						too small to continue development.
					</p>
					<a
						href="https://socrio.net/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center bg-[var(--background)] text-accent-hover p-4 rounded-lg hover:bg-[var(--foreground)] transition-colors duration-300 space-x-2 w-45 h-16 max-w-fit border border-[var(--foreground)]"
					>
						<Image
							src="/socrio.png" // Replace with the actual path to your LinkedIn logo
							alt="Socrio Logo"
							className="w-10 h-10"
							width={24}
							height={24}
							style={{ borderRadius: 10 }}
						/>
						<span className="text-m">Download Socrio</span>
					</a>
				</div>
				<div className="mt-8">
					<h2 className="text-2xl font-bold text-accent-primary mb-4">
						"Toonit"/"AutoRX" Mobile Applications
					</h2>
					<p className="text-lg mb-2">
						Two partner apps designed for the purpose of helping people fix
						their car by connecting users with registered mechanics. One app for
						the consumers, a seperate app for the mechanics.
					</p>
					<ul className="list-disc list-inside text-lg mb-4">
						<li>
							<strong>Frontend:</strong> React Native, Expo
						</li>
						<li>
							<strong>State Management:</strong> Redux, AsyncStorage
						</li>
						<li>
							<strong>Backend:</strong> Firebase, FastAPI
						</li>
						<li>
							<strong>Other Tools:</strong> TypeScript, Stripe Payments, Kaggle
							Datasets
						</li>
					</ul>
					<p className="text-lg mb-4">
						Toonit/AutoRX showed that I can build mobile applications at scale,
						balancing two different systems. I was able to reduce overhead costs
						and development time by securely containing both databases within
						one firebase backend, re-using my react functional components, and
						utilizing open source car databases.
					</p>
					{/* <a
						href="https://socrio.net/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center bg-[var(--background)] text-white p-4 rounded-lg hover:bg-[var(--foreground)] transition-colors duration-300 space-x-2 w-45 h-16 max-w-fit border border-[var(--foreground)]"
					>
						<Image
							src="/socrio.png" // Replace with the actual path to your LinkedIn logo
							alt="Socrio Logo"
							className="w-10 h-10"
							width={24}
							height={24}
							style={{ borderRadius: 10 }}
						/>
						<span className="text-m">Download Socrio</span>
					</a> */}
				</div>
				{/* MEB Software System Section */}
				<div className="mt-8">
					<h2 className="text-2xl font-bold text-accent-primary mb-4">
						Manned Electrically Propelled Boat (MEB) Software System
					</h2>
					<p className="text-lg mb-2">
						The software system of the MEB comprises three distinct subsystems,
						each contributing to the functionality and real-time operation of
						the boat:
					</p>
					<ul className="list-disc list-inside text-lg mb-4">
						<li>
							<strong>Motor Controller:</strong> Handles the operation of the
							boat by setting callibration values. It uses Service Data Objects
							(SDO) for motor telemetry data/callibration.
						</li>
						<li>
							<strong>Raspberry Pi Subsystem:</strong> Responsible for data
							logging and live telemetry. Built with Python (Tkinter, Flask API,
							SQLAlchemy), the system stores data into RaspberryPi memory and
							shore databases, manages Arduino sensors, and displays a live UI.
						</li>
						<li>
							<strong>Shore System:</strong> Utilizing Python with tkinter and
							REST API GETs, displays telemetry data enabling real-time analysis
							during operations.
						</li>
					</ul>
					<p className="text-lg mb-4">
						The system demonstrates advanced capabilities in real-time data
						collection, transmission, and visualization, ensuring optimal
						performance and safety during tests and races.
					</p>
				</div>

				{/* GitHub Repositories Section */}
				<div className="mt-12">
					<h2 className="text-2xl font-bold text-accent-primary mb-2">
						GitHub Repositories
					</h2>
					<p className="text-lg mb-8">
						More of my GitHub projects can be found below, as well as the
						previously mentioned projects.
					</p>

					{isLoading ? (
						<div className="flex justify-center items-center">
							<LoadingAnim />
						</div>
					) : error ? (
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
