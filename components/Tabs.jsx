import React from "react";
import { TabGroup, TabList, Tab, TabPanels } from "@headlessui/react";

const TabsNavigator = ({ tabs, children }) => {
    return (
        <TabGroup>
            <TabList className="flex justify-center bg-gray-200 shadow-md sticky top-0 z-10">
                {tabs.map((tab) => (
                    <Tab
                        key={tab}
                        className={({ selected }) =>
                            selected
                                ? "px-6 py-2 text-sm font-medium text-white bg-blue-500"
                                : "px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
                        }
                    >
                        {tab}
                    </Tab>
                ))}
            </TabList>
            <TabPanels>
                {children}
            </TabPanels>
        </TabGroup>
    );
};

export default TabsNavigator;
