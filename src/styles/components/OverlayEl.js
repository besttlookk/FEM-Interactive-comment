import styled from "styled-components";

const OverlayEl = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: ${({ active }) => (active ? "center" : "start")};
  justify-content: center;
  z-index: 100;
`;

export default OverlayEl;
