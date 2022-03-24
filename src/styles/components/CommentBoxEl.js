import styled from "styled-components";

const CommentBoxEl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Children = styled.div`
  padding-left: 1.4rem;
  border-left: 3px solid;
  border-color: ${({ theme }) => theme.colGrayLight};
  margin-left: 0.6rem;
`;

CommentBoxEl.Children = Children;

export default CommentBoxEl;
