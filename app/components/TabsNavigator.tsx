'use client';

import React from 'react';
import { TabGroup, TabList, Tab } from '@headlessui/react';
import { useRouter } from 'next/navigation';

interface TabsNavigatorProps {
	tabs: string[];
	links: string[];
}

const TabsNavigator: React.FC<TabsNavigatorProps> = ({ tabs, links }) => {
	const router = useRouter();

	const handleTabClick = (path: string) => {
		router.push(path);
	};

	return (
		<TabGroup>
			<TabList className="flex w-full bg-[var(--background)] shadow-md sticky top-0 z-10">
				{tabs.map((tab, index) => (
					<Tab
						key={tab}
						onClick={() => handleTabClick(links[index])}
						className={({ selected }) =>
							selected
								? 'flex-1 px-4 py-3 text-base font-medium text-[var(--accent-coral)] bg-accent-coral hover:bg-accent-yellow  text-center border-none rounded-none'
								: 'flex-1 px-4 py-3 text-base font-medium text-[var(--foreground)] hover:bg-accent-yellow text-center border-none rounded-none'
						}
					>
						{tab}
					</Tab>
				))}
			</TabList>
		</TabGroup>
	);
};

export default TabsNavigator;
