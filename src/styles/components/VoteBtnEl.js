import styled from "styled-components";
import media from "../media";

const VoteBtnEl = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colLight};

  ${media.tablet} {
    flex-direction: column;
  }
`;

const Icon = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${({ pb }) => (pb ? ".4rem .9rem .7rem .9rem" : ".5rem .9rem")};
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    svg {
      path {
        fill: ${({ theme }) => theme.colPrimary};
      }
    }
  }

  &:active:not(:disabled) {
    transform: translateY(2px);
  }
`;

const Count = styled.span`
  padding: 0 0.2rem;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colPrimary};
`;

VoteBtnEl.Icon = Icon;
VoteBtnEl.Count = Count;

export default VoteBtnEl;
