
import { useTab } from "../pages/TabContext";
import { MainContainer, DataRow, LeftDataContainer, FlagImgContainer, FlagImg, CountryInfoContainer, Time, CountryName, Value, SubValue, MidDataContainer } from "./Forex.styles";

export const Dashboard = () => {
  const { activeTab } = useTab();

  return (
    <MainContainer style={{ height: "calc(100vh - 170px)" }}>
      {activeTab === "Forex" &&
        <>
          {Array.from({ length: 10 }).map((_, index) => {
            const rate = 1.23456;
            return (
              <DataRow key={index}>
                <LeftDataContainer>

                  {/* Flags Container */}
                  <FlagImgContainer>
                    <FlagImg
                      src="https://flagcdn.com/w40/us.png"
                      alt="US flag"
                      width={42}
                      height={42}
                    />
                    <FlagImg
                      src="https://flagcdn.com/w40/be.png"
                      alt="Belgium flag"
                      width={42}
                      height={42}
                      style={{
                        position: "absolute",
                        left: "60%",
                        top: "10px",
                      }}
                    />
                  </FlagImgContainer>

                  {/* Country Info Container */}
                  <CountryInfoContainer style={{ padding: "0px 10px" }}>
                    <Time>54:00:00</Time>
                    <CountryName>EUR/GBP</CountryName>
                    <Value>
                      +30{" "}
                      <SubValue>(+23.2%)</SubValue>
                    </Value>
                  </CountryInfoContainer>
                </LeftDataContainer>

                {/* Low Values Cont.*/}
                <MidDataContainer>
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
                </MidDataContainer>

                {/* High VAlues Cont. */}
                <MidDataContainer>
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
                </MidDataContainer>
              </DataRow>
            );
          })}
        </>
      }
      {activeTab === "Crypto" && <p>----- Crypto data----- coming soon-----</p>}
      {activeTab === "Indices" && <p>----- Indices data---- coming soon...</p>}
      {activeTab === "Deriv" && <p>----- Derivatives data----- coming soon...</p>}
      {activeTab === "Favourites" && <p>------ Favourites data----- coming soon...</p>}
    </MainContainer>
  );
};