import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { hideNotification } from "../redux/actions";

export default function Notification({ n }) {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const removeNotification = () => {
    ref.current && ref.current.classList.add("exit");
  };

  useEffect(() => {
    if (n.isTimeout) {
      setTimeout(() => {
        removeNotification();
      }, 2500);
    }
  });

  return (
    <div
      ref={ref}
      className={`notification ${n.isTimeout && 'is-timeout'}`}
      onClick={() => {
        removeNotification();
        setTimeout(() => {
          dispatch(hideNotification(n.id))
        }, 200);
      }}
    >
      {n.text}
    </div>
  );
}
