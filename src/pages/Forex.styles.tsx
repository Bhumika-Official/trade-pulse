import styled from "styled-components";

export const MainContainer = styled.div`
  color: #fff;
  font-family: "Inter", sans-serif;
  overflow-y: auto;
  background-color: black;

  /* Scrollbar width */
  &::-webkit-scrollbar {
    width: 4px;
  }

  /* Scrollbar track (background) */
  &::-webkit-scrollbar-track {
    background: black;
  }

  /* Scrollbar thumb (handle) */
  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 2px;
  }

  /* On hover */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #a0a0a0;
  }

  /* Firefox support */
  scrollbar-width: thin;
  scrollbar-color: grey black;
`;

export const DataRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1px solid #5d5d5d;
  padding: 10px 5px;
`

export const LeftDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 0px 20px;
`

export const FlagImgContainer = styled.div`
  position: relative;
`

export const FlagImg = styled.img`
  border-radius: 100%;
  border: 1px solid #fff;
`

export const CountryInfoContainer = styled.div`
  padding: 0px 10px;
`
export const Time = styled.div`
  color: grey;
  font-size: 15px;
  padding: 5px 0px;
  font-weight: 400;
`
export const CountryName = styled.div`
  font-weight: 600;
  font-size: 18px;
`
export const Value = styled.div`
  color: #20f803ff;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 0px;
`

export const SubValue = styled.span`
  color: #777;
  font-weight: 500;
`

export const abc = styled.div`
  padding: 0px 10px;
`

// Mid containers

export const MidDataContainer = styled.div`
  padding: 0px 2%;
`