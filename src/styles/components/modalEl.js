import styled from "styled-components";
import media from "../media";

const ModalEl = styled.div`
  width: 90vw;
  max-width: 350px;
  padding: 0.4rem;
  transition: all 0.4s 0.6s;

  opacity: ${({ active }) => (active ? 1 : 0)};

  ${media.tablet} {
    max-width: 370px;
  }
`;

const Header = styled.div`
  margin-bottom: 1.2rem;

  h3 {
    color: var(--col-dark);
    font-size: 20px;
  }
`;

const Content = styled.p`
  color: var(--col-gray);
  font-size: 16px;
  line-height: 1.6;
`;

const Footer = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  ${media.tablet} {
    justify-content: end;
  }
`;

ModalEl.Header = Header;
ModalEl.Content = Content;
ModalEl.Footer = Footer;

export default ModalEl;
