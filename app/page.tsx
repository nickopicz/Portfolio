import { redirect } from 'next/navigation';
export default function Home() {
	redirect('/about');
	return null; // This won't render because of the redirect
}
