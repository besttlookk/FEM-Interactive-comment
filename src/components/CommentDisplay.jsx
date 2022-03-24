import React from "react";
import CommentBox from "./CommentBox";

const CommentDisplay = ({ comment }) => {
  return (
    <CommentBox comment={comment} isReply={false}>
      {comment.replies.map((reply) => (
        <CommentBox comment={reply} key={reply.id} isReply={true} />
      ))}
    </CommentBox>
  );
};

export default CommentDisplay;
