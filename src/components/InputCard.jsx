import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import InputCardEl from "../styles/components/InputCardEl";
import { actionTypes, AppContext } from "../contexts/appContext";
import { WhiteCard } from "../styles/shared";
import Avatar from "./Avatar";
import Button from "./Button";
import Image from "next/image";

const InputCard = ({ comment }) => {
  const { currentUser, dispatch, replyMode, setReplyMode } =
    useContext(AppContext);
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    if (!comment) {
      const newComment = {
        id: uuidv4(),
        content: value.trim(),
        createdAt: moment(),
        user: currentUser,
        score: 0,
        replies: [],
      };
      dispatch({ type: actionTypes.ADD_COMMENT, payload: newComment });
      setValue("");
    } else {
      const newReply = {
        id: uuidv4(),
        content: value.trim(),
        createdAt: moment(),
        user: currentUser,
        score: 0,
        replyingTo: replyMode.data,
      };
      dispatch({
        type: actionTypes.ADD_REPLY,
        payload: { reply: newReply, commentId: comment.id },
      });
      setValue("");
      setReplyMode({ active: false, data: undefined });
    }
  };
  return (
    <WhiteCard>
      <InputCardEl onSubmit={handleFormSubmit}>
        <InputCardEl.Textarea
          placeholder={comment ? "Add a reply" : "Add a comment"}
          col="6"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <InputCardEl.Footer>
          <Avatar>
            <Image
              alt="avatar"
              src={currentUser.image.png}
              width="30px"
              height="30px"
            />
          </Avatar>

          <Button variant="primary" btnType="submit">
            <span>{comment ? "REPLY" : "SEND"}</span>
          </Button>
        </InputCardEl.Footer>
      </InputCardEl>
    </WhiteCard>
  );
};

export default InputCard;
