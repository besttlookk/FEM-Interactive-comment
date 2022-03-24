import React, { useContext } from "react";
import LinkBtn from "./LinkBtn";
import DeleteIcon from "../images/icon-delete.svg";
import EditIcon from "../images/icon-edit.svg";
import ReplyIcon from "../images/icon-reply.svg";
import OptionsEl from "../styles/components/OptionsEl";
import { AppContext } from "../contexts/appContext";

const Options = ({ comment, setIsEditModeOn }) => {
  const { currentUser, setModalState, setReplyMode, replyMode } =
    useContext(AppContext);

  const isActiveUserComment = currentUser.username === comment.user.username;

  const handleReplyClick = () => {
    if (replyMode.active) setReplyMode({ active: false, data: undefined });
    else setReplyMode({ active: true, data: comment.user.username });
  };
  return (
    <OptionsEl>
      {isActiveUserComment && (
        <>
          <LinkBtn
            text="Delete"
            variant="danger"
            handleClick={() =>
              setModalState({ active: true, data: comment.id })
            }
          >
            <DeleteIcon />
          </LinkBtn>

          <LinkBtn
            text="Edit"
            handleClick={() => setIsEditModeOn((prev) => !prev)}
          >
            <EditIcon />
          </LinkBtn>
        </>
      )}

      {!isActiveUserComment && (
        <LinkBtn text="Reply" handleClick={handleReplyClick}>
          <ReplyIcon />
        </LinkBtn>
      )}
    </OptionsEl>
  );
};

export default Options;
