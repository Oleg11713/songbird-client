import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../redux/user/selectors";

import "./styles.scss";

const ProfilePage = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="user-profile-page">
      <div className="title">Данные пользователя</div>
      {currentUser ? (
        <div className="form-with-info">
          <div className="display-name">
            Никнейм - {currentUser.displayName}
          </div>
          <div className="email">Почта - {currentUser.email}</div>
          <div className="total-score">
            Суммарный счёт за все игры - {currentUser.totalScoreForAllGames}
          </div>
        </div>
      ) : (
        <div />
      )}
      <hr className="area" />
      <Link to="/">
        <button className="button-return">Вернуться на главную страницу</button>
      </Link>
    </div>
  );
};

export default ProfilePage;
