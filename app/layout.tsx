import './globals.css';
import TabsNavigator from './components/TabsNavigator';

export const metadata = {
	title: 'My Portfolio',
	description: 'A portfolio website showcasing my work and skills.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const tabs = ['About', 'Projects', 'Contact'];
	const links = ['/about', '/projects', '/contact'];

	return (
		<html lang="en">
			<body className="bg-[var(--background)] text-[var(--foreground)]">
				{/* TabsNavigator stays at the top for all screens */}
				<TabsNavigator
					tabs={tabs}
					links={links}
				/>
				<div className="container mx-auto px-6 py-8">{children}</div>
			</body>
		</html>
	);
}
