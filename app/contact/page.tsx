export default function Contact() {
	return (
		<div className="container mx-auto px-6 py-8 bg-[var(--background)] text-[var(--foreground)]">
			<h1 className="text-4xl font-bold text-accent-primary mb-6">
				Contact Information
			</h1>
			<p className="mt-4 text-lg mb-6">You can reach me with the following:</p>
			<div className="space-y-4">
				{/* LinkedIn Button */}
				<a
					href="https://www.linkedin.com/in/nicholas-ciraulo"
					target="_blank"
					rel="noopener noreferrer"
					className="block text-center bg-accent-primary text-[var(--background)] py-2 px-4 rounded-lg hover:bg-accent-hover"
				>
					Visit My LinkedIn
				</a>

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
						href="tel:+1234567890"
						className="text-accent-primary hover:text-accent-secondary"
					>
						+1 (234) 567-890
					</a>
				</p>
			</div>
		</div>
	);
}
