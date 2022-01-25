import { $host, $authHost } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (
  displayName,
  email,
  password,
  totalScoreForAllGames
) => {
  const { data } = await $host.post("api/signIn/registration", {
    displayName,
    email,
    password,
      totalScoreForAllGames,
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const updateTotalScore = async (totalScoreForAllGames, email) => {
    const { data } = await $host.patch("api", { totalScoreForAllGames, email });
    return data;
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/signIn/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/signIn/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
