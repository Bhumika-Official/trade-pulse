import { MainContainer, Tab, TabsContainer, TopContainer } from "./Header.styles";
import { useTab } from "../../../pages/TabContext";

export default function Header() {
  const { activeTab, setActiveTab } = useTab();
  const tabs = ["Favourites", "Forex", "Crypto", "Indices", "Deriv"];

  return (
    <MainContainer>
      {/* Top Container */}
      <TopContainer>
        <div className="fa fa-bars" style={{ fontSize: "22px", color: "#fff", cursor: 'pointer' }}></div>
        <div className="fa fa-filter" style={{ fontSize: "22px", color: "#fff", cursor: 'pointer' }}></div>
      </TopContainer>
      {/* Tabs Container */}
      <TabsContainer>
        {tabs.map((tab) => (
          <Tab key={tab} active={tab === activeTab} onClick={() => setActiveTab(tab)}>
            {tab}
          </Tab>
        ))}
      </TabsContainer>
    </MainContainer>
  );
}

