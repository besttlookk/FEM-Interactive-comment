import styled from "styled-components";
import media from "../media";

const CommentEl = styled.div`
  display: flex;

  ${media.tablet} {
    gap: 1.5rem;
  }
`;
const Main = styled.div`
  flex: 1;
`;

const SideBar = styled.div`
  display: none;

  ${media.tablet} {
    display: flex;
    align-items: center;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9rem;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const HeaderRight = styled.div`
  display: none;

  ${media.tablet} {
    display: flex;
  }
`;

const Username = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colDark};
`;

const Label = styled.span`
  background-color: ${({ theme }) => theme.colPrimary};
  color: white;
  font-size: 12px;
  font-weight: 700;
  padding: 0.2rem 0.4rem;
`;

const Time = styled.span`
  color: ${({ theme }) => theme.colGray};
  font-size: 14px;
  font-weight: 400;
`;

const Content = styled.div`
  p {
    line-height: 1.4;
    font-size: 15px;
    color: ${({ theme }) => theme.colGray};

    ${media.tablet} {
      font-size: 16px;
    }
  }
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colPrimary};
  }
`;

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: end;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  font-size: 15px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colDark};
  width: 100%;
  resize: vertical;
  border-color: ${({ theme }) => theme.colGrayLight};
  outline: none;
  padding: 0.6rem 1rem;
  height: 7rem;
  border-radius: 0.5rem;
  align-self: stretch;

  &:focus {
    border-color: ${({ theme }) => theme.colSecondary};
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  ${media.tablet} {
    display: none;
  }
`;

CommentEl.SideBar = SideBar;
CommentEl.Main = Main;
CommentEl.Header = Header;
CommentEl.HeaderLeft = HeaderLeft;
CommentEl.HeaderRight = HeaderRight;
CommentEl.Username = Username;
CommentEl.Label = Label;
CommentEl.Time = Time;
CommentEl.Content = Content;
CommentEl.Footer = Footer;
CommentEl.Textarea = Textarea;
CommentEl.EditForm = EditForm;

export default CommentEl;
