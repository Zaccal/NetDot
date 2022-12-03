// noinspection JSCheckFunctionSignatures

import React, { useState } from "react";
import CounterLikeBtn from "./UI/buttons/counterLike/CounterLikeBtn";
import "../css/counterLike.css";

export default function CounterLike() {
  let [countLikes, setLikes] = useState(0);
  let [statusHaslike, setStatusHaslike] = useState(false);

  const addLike = () => {
    if (statusHaslike === false) {
      setStatusHaslike((statusHaslike = true));
      setLikes((countLikes += 1));
    } else {
      setStatusHaslike((statusHaslike = false));
      setLikes((countLikes -= 1));
    }
  };

  return (
    <div className="CounterLikes">
      <p className="likes">{countLikes}</p>
      <CounterLikeBtn onClick={addLike} className="addLike">
        Like
      </CounterLikeBtn>
    </div>
  );
}
