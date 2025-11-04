import styled from "styled-components";

interface TabBarProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: #0a0a0a;
  border-bottom: 1px solid #222;
  padding: 0.75rem 0;
`;

const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  color: ${(p) => (p.active ? "#00ff88" : "#888")};
  font-size: 0.95rem;
  font-weight: ${(p) => (p.active ? "600" : "400")};
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #00ff88;
  }

  &::after {
    content: "";
    display: block;
    height: 2px;
    background: ${(p) => (p.active ? "#00ff88" : "transparent")};
    margin-top: 0.25rem;
    transition: background 0.3s;
  }
`;

export const TabBar: React.FC<TabBarProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Tab key={tab} active={tab === activeTab} onClick={() => onTabChange(tab)}>
          {tab}
        </Tab>
      ))}
    </TabsContainer>
  );
};
