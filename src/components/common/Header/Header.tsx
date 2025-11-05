import { Tab, TabsContainer } from "./Header.styles";
import { useTab } from "../../../pages/TabContext";

export default function Header() {
  const { activeTab, setActiveTab } = useTab();
  const tabs = ["Favourites", "Forex", "Crypto", "Indices", "Deriv"];

  return (
    <div style={{ backgroundColor: "black", position: "sticky", top: 0, zIndex: 1000 }}>
      {/* Top Containet */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <div className="fa fa-bars" style={{ fontSize: "22px", color: "#fff", cursor: 'pointer' }}></div>
        <div className="fa fa-filter" style={{ fontSize: "22px", color: "#fff", cursor: 'pointer' }}></div>
      </div>

      {/* Tabs Container */}
      <TabsContainer>
        {tabs.map((tab) => (
          <Tab key={tab} active={tab === activeTab} onClick={() => setActiveTab(tab)}>
            {tab}
          </Tab>
        ))}
      </TabsContainer>
    </div>
  );
}

