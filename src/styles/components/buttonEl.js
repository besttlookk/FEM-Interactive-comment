import styled from "styled-components";

export const ButtonEl = styled.button`
  padding: 0.8rem 1.3rem;
  border-radius: 8px;
  background: ${({ theme, variant }) =>
    variant === "primary"
      ? theme.colPrimary
      : variant === "danger"
      ? theme.colDanger
      : theme.colGray};
  cursor: pointer;
  transition: all 0.4s;
  border: none;
  outline: none;
  font-weight: 700;

  span {
    color: white;
  }

  &:hover {
    transform: scale(1.04);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export default ButtonEl;
