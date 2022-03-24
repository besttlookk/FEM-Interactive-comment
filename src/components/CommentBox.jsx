import React, { useContext } from "react";
import { AppContext } from "../contexts/appContext";

import CommentBoxEl from "../styles/components/CommentBoxEl";
import CommentCard from "./CommentCard";
import InputCard from "./InputCard";

const CommentBox = ({ children, comment }) => {
  const { replyMode } = useContext(AppContext);
  return (
    <>
      <CommentBoxEl>
        <CommentCard comment={comment} />
        {replyMode.active && replyMode.data === comment.user.username && (
          <InputCard comment={comment} />
        )}
      </CommentBoxEl>

      <CommentBoxEl.Children>{children}</CommentBoxEl.Children>
    </>
  );
};

export default CommentBox;
