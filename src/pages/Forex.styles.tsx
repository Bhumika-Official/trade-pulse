import styled from "styled-components";

export const ScrollContainer = styled.div`
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
