import Image from "next/image";
import React, { useContext, useState } from "react";
import CommentEl from "../styles/components/CommentEl";
import { WhiteCard } from "../styles/shared";
import Avatar from "./Avatar";
import Options from "./Options";
import VoteBtn from "./VoteBtn";
import { AppContext } from "../contexts/appContext";
import Button from "../components/Button";
import { actionTypes } from "../contexts/appContext.js";
import moment from "moment";

const CommentCard = ({ comment }) => {
  const { currentUser, dispatch } = useContext(AppContext);
  const [isEditModeOn, setIsEditModeOn] = useState(false);

  const [textInput, setTextInput] = useState(comment.content);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newComment = { ...comment, content: textInput };
    dispatch({ type: actionTypes.EDIT_COMMENT, payload: newComment });
    setIsEditModeOn(false);
  };

  const date = moment(comment.createdAt).fromNow();

  const isActiveUserComment = currentUser.username === comment.user.username;
  return (
    <WhiteCard>
      <CommentEl>
        <CommentEl.SideBar>
          <VoteBtn comment={comment} />
        </CommentEl.SideBar>

        <CommentEl.Main>
          <CommentEl.Header>
            <CommentEl.HeaderLeft>
              <Avatar>
                <Image
                  alt="avatar"
                  src={comment.user.image.png}
                  width="30px"
                  height="30px"
                />
              </Avatar>
              <CommentEl.Username>{comment?.user.username}</CommentEl.Username>

              {isActiveUserComment && <CommentEl.Label>you</CommentEl.Label>}

              <CommentEl.Time>{date}</CommentEl.Time>
            </CommentEl.HeaderLeft>

            <CommentEl.HeaderRight>
              <Options comment={comment} setIsEditModeOn={setIsEditModeOn} />
            </CommentEl.HeaderRight>
          </CommentEl.Header>

          <CommentEl.Content>
            {isEditModeOn ? (
              <CommentEl.EditForm onSubmit={handleFormSubmit}>
                <CommentEl.Textarea
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                />

                <Button variant="primary" btnType="submit">
                  <span>UPDATE</span>
                </Button>
              </CommentEl.EditForm>
            ) : (
              <p>
                <span>
                  {comment.replyingTo ? ` @${comment.replyingTo} ` : ""}
                </span>
                {comment.content}
              </p>
            )}
          </CommentEl.Content>

          <CommentEl.Footer>
            <VoteBtn comment={comment} />
            <Options comment={comment} setIsEditModeOn={setIsEditModeOn} />
          </CommentEl.Footer>
        </CommentEl.Main>
      </CommentEl>
    </WhiteCard>
  );
};

export default CommentCard;
