import Image from 'next/image';

export default function Contact() {
	return (
		<div className="flex-col flex items-center justify-center mx-auto px-6 mt-24 py-8 bg-[var(--background)] text-[var(--foreground)]">
			<h1 className="text-4xl font-bold text-accent-primary mb-6">
				Contact Information
			</h1>
			<p className="mt-4 text-lg mb-6">
				I hope you found what you were looking for! You can reach me with the
				following:
			</p>
			<div className="space-y-4">
				{/* LinkedIn Button */}

				{/* Email */}
				<p className="text-lg">
					<strong>Email:</strong>{' '}
					<a
						href="mailto:nciraulo00@gmail.com"
						className="text-accent-primary hover:text-accent-secondary"
					>
						nciraulo00@gmail.com
					</a>
				</p>

				{/* Phone Number */}
				<p className="text-lg">
					<strong>Phone:</strong>{' '}
					<a
						href="tel:+19084107335"
						className="text-accent-primary hover:text-accent-secondary"
					>
						+1 (908) 410-7335
					</a>
				</p>
				<a
					href="https://www.linkedin.com/in/nicholas-ciraulo"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center bg-[var(--background)] text-white py-2 px-4 rounded-lg hover:bg-[var(--foreground)] transition-colors duration-300 space-x-2 w-45 h-12 max-w-fit"
				>
					<Image
						src="/linkedin-logo.webp" // Replace with the actual path to your LinkedIn logo
						alt="LinkedIn"
						className="w-10 h-10"
						width={24}
						height={24}
					/>
					<span className="text-m">Visit My LinkedIn</span>
				</a>
			</div>
		</div>
	);
}
