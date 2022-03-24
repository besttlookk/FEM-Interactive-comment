import styled from "styled-components";

const LinkBtnEl = styled.button`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  border: none;
  outline: none;
  transition: all 0.3s;
  opacity: 0.7;
  background-color: transparent;
  cursor: pointer;
  color: ${({ variant, theme }) =>
    variant === "danger" ? theme.colDanger : theme.colPrimary};

  &:hover {
    opacity: 1;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const Icon = styled.span`
  position: relative;
`;

const Text = styled.span`
  font-weight: 700;
  font-size: 16px;
`;
LinkBtnEl.Icon = Icon;
LinkBtnEl.Text = Text;

export default LinkBtnEl;
