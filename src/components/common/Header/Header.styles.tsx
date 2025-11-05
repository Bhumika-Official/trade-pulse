import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: black;
  position: sticky;
  top: 0;
  z-index:1000;
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`

export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  overflow-x: auto;
`;

export const Tab = styled.div<{ active: boolean }>`
  background: none;
  border: none;
  color: ${(p: any) => (p.active ? "#fff" : "#858585")};
  font-size: 16px;
  font-weight: ${(p: any) => (p.active ? "700" : "600")};
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0px 10px;

  &:hover {
    color: #fff;
  }

  &::after {
    content: "";
    display: block;
    height: 2px;
    margin-top: 0.25rem;
    transition: background 0.3s;
  }
`;