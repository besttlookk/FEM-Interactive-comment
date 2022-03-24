import styled from "styled-components";

const InputCardEl = styled.form`
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  font-weight: 400;
  border-radius: 0.4rem;
  resize: vertical;
  min-height: 5rem;
  font-weight: 400;
  outline: none;
  border-color: ${({ theme }) => theme.colGrayLight};

  &:focus {
    border-color: ${({ theme }) => theme.colGray};
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.2rem;
`;

InputCardEl.Textarea = Textarea;
InputCardEl.Footer = Footer;

export default InputCardEl;
