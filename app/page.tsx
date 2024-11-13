'use client';

import React, { useState } from 'react';
import TabsNavigator from '../components/Tabs';
import { TabPanel } from '@headlessui/react';

export default function HomePage() {
	const tabs = ['About', 'Projects', 'Contact'];

	return (
		<div className="bg-gray-100 text-gray-800 min-h-screen">
			<header className="bg-white shadow-md">
				<div className="container mx-auto px-6 py-4 flex justify-between items-center">
					<h1 className="text-xl font-bold">My Portfolio</h1>
				</div>
			</header>

			<main className="container mx-auto px-6 py-8">
				<TabsNavigator tabs={tabs}>
					<TabPanel className="mt-6">
						<TabPanel>
							<h2 className="text-2xl font-bold">About</h2>
							<p className="mt-4 text-gray-600">
								Here you can learn more about me!
							</p>
						</TabPanel>
						<TabPanel>
							<h2 className="text-2xl font-bold">Projects</h2>
							<p className="mt-4 text-gray-600">
								Explore my work and contributions!
							</p>
						</TabPanel>
						<TabPanel>
							<h2 className="text-2xl font-bold">Contact</h2>
							<p className="mt-4 text-gray-600">Get in touch with me here.</p>
						</TabPanel>
					</TabPanel>
				</TabsNavigator>
			</main>
		</div>
	);
}
