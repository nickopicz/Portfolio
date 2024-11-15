import TabsNavigator from './components/TabsNavigator';

export default function HomePage() {
	const tabs = ['About', 'Projects', 'Contact'];
	const links = ['/about', '/projects', '/contact'];

	return (
		<main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen">
			<div className="container mx-auto px-6 py-8">
				<h1 className="text-4xl font-bold text-accent-blue mb-6">
					Welcome to My Portfolio
				</h1>
				<TabsNavigator
					tabs={tabs}
					links={links}
				/>
			</div>
		</main>
	);
}
