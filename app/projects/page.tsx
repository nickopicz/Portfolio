'use client';

export default function PortfolioPage() {
	return (
		<main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen p-8">
			<div className="container mx-auto">
				<h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
				<p className="mb-8">Check out my projects and get in touch with me!</p>
				<a
					href="https://github.com/nickopicz"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)]"
				>
					Visit My GitHub
				</a>
			</div>
		</main>
	);
}
