import React from "react";

import "./button.scss";
import { check } from "../../http/userAPI";
import { toast } from "react-toastify";

const Button = ({ play, isPlaying }) => {
  return (
    <div className="btn-container">
      <div
        onClick={() => {
          check()
            .then(() => {
              play();
            })
            .catch(() => {
              toast.error("Чтобы играть необходимо авторизоваться", {
                className: "toast-error",
                position: toast.POSITION.BOTTOM_CENTER,
              });
            });
        }}
        className={isPlaying ? "btn-stop" : "btn-play"}
      />
    </div>
  );
};
export default Button;
