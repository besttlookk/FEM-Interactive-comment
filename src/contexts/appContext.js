import React, { createContext, useReducer, useState } from "react";

import data from "../data/data.json";
const { currentUser, comments } = data;

export const AppContext = createContext();

export const actionTypes = {
  ADD_COMMENT: "ADD_COMMENT",
  ADD_REPLY: "ADD_REPLY",
  DELETE_COMMENT: "DELETE_COMMENT",
  EDIT_COMMENT: "EDIT_COMMENT",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_COMMENT:
      const stateAfterAdd = [...state, payload];
      setLocalStorage(stateAfterAdd);
      return stateAfterAdd;

    case actionTypes.ADD_REPLY:
      const stateAfterReplyAdd = state.map((comment) => {
        if (comment.id === payload.commentId) {
          return { ...comment, replies: [...comment.replies, payload.reply] };
        } else return comment;
      });

      setLocalStorage(stateAfterReplyAdd);
      return stateAfterReplyAdd;

    case actionTypes.DELETE_COMMENT:
      const updatedComments = state.filter((item) => item.id !== payload);

      if (updatedComments.length === state.length) {
        //delete reply
        const updatedCommentReplies = state.map((item) => {
          const updatedReplies = item.replies.filter(
            (reply) => reply.id !== payload
          );
          const newItem = { ...item, replies: updatedReplies };
          return newItem;
        });

        setLocalStorage(updatedCommentReplies);
        return updatedCommentReplies;
      } else {
        setLocalStorage(updatedComments);
        return updatedComments;
      }

    case actionTypes.EDIT_COMMENT:
      console.log({ payload });
      const stateAfterEdit = state.map((item) => {
        if (item.id === payload.id) return payload;
        else if (item.replies) {
          const updatedReplies = item.replies.map((reply) => {
            return reply.id === payload.id ? payload : reply;
          });

          const newItem = { ...item, replies: updatedReplies };
          return newItem;
        } else return item;
      });

      setLocalStorage(stateAfterEdit);

      return stateAfterEdit;

    default:
      return state;
  }
};

function setLocalStorage(data) {
  if (typeof window !== "undefined") {
    localStorage.setItem("rem-comments", JSON.stringify(data));
  } else {
  }
}

setLocalStorage(comments);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, comments);
  const [modalState, setModalState] = useState({ active: false });
  const [replyMode, setReplyMode] = useState({ active: false });

  const values = {
    state,
    dispatch,
    currentUser,
    modalState,
    setModalState,
    replyMode,
    setReplyMode,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
