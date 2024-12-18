import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
	return (
		<div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen pt-20 p-8">
			<div className="container mx-auto">
				<h1 className="text-4xl font-bold text-accent-primary mb-4">
					About Me
				</h1>
				{/* Headshot Section */}
				<div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 mb-8">
					<Image
						src="/headshot.jpg" // Replace with your image URL or path
						alt="Nicholas Ciraulo"
						className="w-300 h-100 rounded object-cover shadow-lg mb-6 md:mb-0"
						width={350}
						height={100}
					/>
					<div>
						<p className="text-lg mb-4">
							I’m Nicholas Ciraulo, an energetic Software Engineer with a
							passion for building scalable and user-focused solutions. I
							recently graduated from Stevens Institute of Technology with a
							BEng in Software Engineering, where I was on the Dean’s Honor List
							(2019-2024) and balanced academics with part-time jobs. I also
							love to travel to new places, where I can meet people with diverse
							backgrounds and listen to their unique life stories.
						</p>
						<p className="text-lg mb-4">
							My professional journey includes founding Socrio, where I
							spearheaded the development of a mobile app leveraging
							React-Native, Redux, and Expo for the front end; and Firebase and
							FastAPI for the backend. I’ve also worked as a Freelance
							Full-Stack Developer and Youth Robotics Teacher, where I honed my
							technical and leadership skills.
						</p>
						<p className="text-lg mb-4">
							I’m skilled in Mobile Development, specifically React-Native/Expo;
							Web Debelopment with React, Next.js, Tailwind, Node.js; as well as
							Python, specifically API design, embedded software, and data
							visualization.
						</p>
						<h2 className="text-2xl font-bold mt-10 mb-4">My Resume</h2>
						<p className="text-lg mv-2">
							You can view or download my resume below to learn more about my
							background and experience.
						</p>
						<a
							href="/Nicholas-Ciraulo-Resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="text-accent-primary hover:text-accent-secondary underline"
						>
							View Resume (PDF)
						</a>
					</div>
				</div>

				<div className="mt-8"></div>
			</div>
		</div>
	);
};

export default About;
