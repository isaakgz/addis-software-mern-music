import styled from "@emotion/styled";
import React, { ReactNode, useState } from "react";

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: #f5f5f5;
  margin: 1rem auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  border: 1px solid #f5f5f5;
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Tab = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "gray" : "transparent")};
  color: ${({ active }) => (active ? "white" : "black")};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

const TabsContent = styled.div`
  padding: 1rem;
  background-color: #f5f5f5;
  margin: 1rem auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  border: 1px solid #f5f5f5;
`;

interface TabProps {
  children?: ReactNode[];
  tabs: string[];
}
function Tabs({ tabs, children }: TabProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <>
      <TabsContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </TabsContainer>
      <TabsContent>
        {children &&
          children.map((child, index) => (
            <div
              key={index}
              style={{ display: activeTab === tabs[index] ? "block" : "none" }}
            >
              {child}
            </div>
          ))}
      </TabsContent>
    </>
  );
}

export default Tabs;
