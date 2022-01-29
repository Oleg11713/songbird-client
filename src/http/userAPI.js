import jwt_decode from "jwt-decode";

import { authHost, host } from "./index";

export const registration = async (
  displayName,
  email,
  password,
  totalScoreForAllGames
) => {
  const { data } = await host.post("api/user/registration", {
    displayName,
    email,
    password,
    totalScoreForAllGames,
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const updateTotalScore = async (totalScoreForAllGames, email) => {
  const { data } = await authHost.patch("api/user/updateScore", {
    totalScoreForAllGames,
    email,
  });
  return data;
};

export const login = async (email, password) => {
  const { data } = await host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const authCheck = async () => {
  const { data } = await authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const resetToken = async () => {
  localStorage.setItem("token", "");
  return jwt_decode("");
};
