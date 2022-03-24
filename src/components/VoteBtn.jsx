import React, { useState, useContext } from "react";
import VoteBtnEl from "../styles/components/VoteBtnEl";
import PlusIcon from "../images/icon-plus.svg";
import MinusIcon from "../images/icon-minus.svg";
import { IconContainer } from "../styles/shared";
import { AppContext } from "../contexts/appContext";

const VoteBtn = ({ comment }) => {
  const originalScore = comment.score;
  const [score, setScore] = useState(comment.score);
  const { currentUser } = useContext(AppContext);

  const isCurrentUserComment = currentUser.username === comment.user.username;

  const handlePlusClick = () => {
    // cant score own post
    if (isCurrentUserComment) return;
    if (score === originalScore + 1) {
      alert("You already up-voted this comment");
      return;
    }
    setScore(score + 1);
  };

  const handleMinusClick = () => {
    // cant score own post
    if (isCurrentUserComment) return;
    if (score === originalScore - 1) {
      alert("You already down-voted this comment");
      return;
    }

    setScore(score - 1);
  };
  return (
    <VoteBtnEl>
      <VoteBtnEl.Icon
        onClick={handlePlusClick}
        disabled={isCurrentUserComment ? true : false}
      >
        <IconContainer>
          <PlusIcon />
        </IconContainer>
      </VoteBtnEl.Icon>
      <VoteBtnEl.Count>{score}</VoteBtnEl.Count>
      <VoteBtnEl.Icon
        pb
        onClick={handleMinusClick}
        disabled={isCurrentUserComment ? true : false}
      >
        <IconContainer>
          <MinusIcon />
        </IconContainer>
      </VoteBtnEl.Icon>
    </VoteBtnEl>
  );
};

export default VoteBtn;
