
import { useTab } from "../pages/TabContext";

export const Dashboard = () => {
  const { activeTab } = useTab();

  return (
    <div
      style={{
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        overflowY: "auto",
      }}
    >
      <div style={{}}>
        {activeTab === "Forex" &&
          <>
            {Array.from({ length: 10 }).map((_, index) => {
              const rate = 1.23456;
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "0.1px solid #5d5d5d",
                    padding: "10px 5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "50px",
                      padding: '0px 20px'
                    }}
                  >
                    {/* Flags Container */}
                    <div style={{ position: "relative" }}>
                      <img
                        src="https://flagcdn.com/w40/us.png"
                        alt="US flag"
                        width={42}
                        height={42}
                        style={{
                          borderRadius: "100%",
                          border: "1px solid #fff",
                        }}
                      />
                      <img
                        src="https://flagcdn.com/w40/be.png"
                        alt="Belgium flag"
                        width={42}
                        height={42}
                        style={{
                          borderRadius: "100%",
                          border: "1px solid #fff",
                          position: "absolute",
                          left: "60%",
                          top: "10px",
                        }}
                      />
                    </div>

                    {/* Info Container */}
                    <div style={{ padding: "0px 10px" }}>
                      <div
                        style={{
                          color: "grey",
                          fontSize: "15px",
                          padding: "5px 0px",
                          fontWeight: "400",
                        }}
                      >
                        154:00:00
                      </div>
                      <div
                        style={{ fontWeight: 600, fontSize: "18px" }}
                      >
                        EUR/GBP
                      </div>
                      <div
                        style={{
                          color: "#20f803ff",
                          fontSize: "14px",
                          fontWeight: 600,
                          padding: "5px 0px",
                        }}
                      >
                        +30{" "}
                        <span
                          style={{
                            color: "#777",
                            fontWeight: 500,
                          }}
                        >
                          (+23.2%)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Low Values Cont.*/}
                  <div style={{ padding: '0px 2%' }}>
                    <div>
                      {/** Below logic is only show the numbers just like the UI-View like: colors */}
                      {index % 2 ?
                        (<span style={{ color: "#ef4444", fontSize: '18px', fontWeight: 500 }}>
                          {(rate - 255667.002 + index).toFixed(6)}
                        </span>) :
                        (() => {
                          const value = 34678 - 0.00002;
                          const formatted = value.toFixed(6);

                          const [intPart, decPart] = formatted.split(".");

                          const whitePart = intPart.slice(0, -1);
                          const redPart = intPart.slice(-2) + "." + decPart;

                          return (
                            <span style={{ fontSize: "18px", fontWeight: 500 }}>
                              <span style={{ color: "#fff" }}>{whitePart}</span>
                              <span style={{ color: "#ef4444" }}>{redPart}</span>
                            </span>
                          );
                        })()
                      }
                    </div>
                    <div
                      style={{ fontSize: "15px", color: "#888" }}
                    >
                      L:{(rate - 0.002).toFixed(6)}
                    </div>
                  </div>

                  {/* High VAlues */}
                  <div style={{ padding: '0px 2%' }}>
                    <div>
                      {
                        index % 3 ?
                          <span style={{ color: "#20f803ff", fontSize: '18px', fontWeight: 500 }}>
                            {/* {(rate + 0.002 + index).toFixed(6)} */}
                            {(rate + 14820.002 + (index * 2 - 0.21)).toFixed(6)}
                          </span> :
                          (() => {
                            const value = 14820.002 - (index * 2 - 0.21);
                            const formatted = value.toFixed(6);

                            const [intPart, decPart] = formatted.split(".");

                            const whitePart = intPart.slice(0, -1);
                            const redPart = intPart.slice(-2) + "." + decPart;

                            return (
                              <span style={{ fontSize: "18px", fontWeight: 500 }}>
                                <span style={{ color: "#fff" }}>{whitePart}</span>
                                <span style={{ color: "#ef4444" }}>{redPart}</span>
                              </span>
                            );
                          })()
                      }
                    </div>
                    <div
                      style={{ fontSize: "15px", color: "#888" }}
                    >
                      {/* H:{(rate + 0.002).toFixed(6)} */}
                      H:{(rate + 7324.59476 + index).toFixed(4)}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        }
        {activeTab === "Crypto" && <p>----- Crypto data----- coming soon-----</p>}
        {activeTab === "Indices" && <p>----- Indices data---- coming soon...</p>}
        {activeTab === "Deriv" && <p>----- Derivatives data----- coming soon...</p>}
        {activeTab === "Favourites" && <p>------ Favourites data----- coming soon...</p>}
      </div>
    </div>
  );
};

