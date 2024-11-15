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
			<TabList className="flex justify-center bg-[var(--background)] shadow-md sticky top-0 z-10">
				{tabs.map((tab, index) => (
					<Tab
						key={tab}
						onClick={() => handleTabClick(links[index])}
						className={({ selected }) =>
							selected
								? 'px-6 my-5 mx-10 py-2 text-sm font-medium text-[var(--background)] bg-accent-blue'
								: 'px-6 my-5 mx-10 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-neutral-gray'
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
