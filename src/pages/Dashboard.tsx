// import { useEffect, useState } from "react";
// import { ForexCard } from "../components/ForexCard";
// import { TabBar } from "../components/TabBar";
// import { fetchForexRate } from "../api/forexApi";

// export const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("Forex");
//   const [rate, setRate] = useState<number>(0);

//   useEffect(() => {
//     if (activeTab === "Forex") {
//       const getRate = async () => {
//         const r = await fetchForexRate("EUR", "GBP");
//         setRate(r);
//       };
//       getRate();
//     }
//   }, [activeTab]);

//   return (
//     <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
//       <TabBar
//         tabs={["Favourites", "Forex", "Crypto", "Indices", "Deriv"]}
//         activeTab={activeTab}
//         onTabChange={setActiveTab}
//       />

//       <div style={{ padding: "1.5rem" }}>
//         {activeTab === "Forex" && (
//           <ForexCard
//             base="EUR"
//             symbol="GBP"
//             rate={rate}
//             high={rate + 0.002}
//             low={rate - 0.002}
//             change={0.23}
//           />
//         )}

//         {activeTab === "Crypto" && <p style={{ color: "#888" }}>Crypto data coming soon...</p>}
//         {activeTab === "Indices" && <p style={{ color: "#888" }}>Indices data coming soon...</p>}
//         {activeTab === "Deriv" && <p style={{ color: "#888" }}>Derivatives data coming soon...</p>}
//       </div>
//     </div>
//   );
// };


import { useEffect, useState } from "react";
import { ForexCard } from "../components/ForexCard";
import { fetchForexRate } from "../api/forexApi";

export const Dashboard = () => {
  const [rate, setRate] = useState<number>(0);

  useEffect(() => {
    const getRate = async () => {
      const r = await fetchForexRate("EUR", "GBP");
      setRate(r);
    };
    getRate();
  }, []);

  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: "2rem" }}>
      <h2 style={{ color: "#fff" }}>Forex Dashboard</h2>
      <ForexCard
        base="EUR"
        symbol="GBP"
        rate={rate}
        high={rate + 0.002}
        low={rate - 0.002}
        change={0.23}
      />
    </div>
  );
};