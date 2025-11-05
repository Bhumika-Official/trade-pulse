import { createContext, useContext, useState, useEffect } from "react";

interface TabContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabContext = createContext<TabContextType | undefined | any>(undefined);

export const TabProvider = ({ children }: { children: any }) => {
  const [activeTab, setActiveTab] = useState<string>(() => {
    return localStorage.getItem("currTab") || "Forex";
  });

  useEffect(() => {
    localStorage.setItem("currTab", activeTab);
  }, [activeTab]);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = (): TabContextType => {
  const context = useContext(TabContext);
  if (!context) throw new Error("useTab must be used within a TabProvider");
  return context;
};
