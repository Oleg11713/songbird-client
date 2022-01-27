import { $authHost, $host } from "./index";

export const createBird = async (bird) => {
  const { data } = await $authHost.post("api/game/addBird", bird);
  return data;
};

export const fetchBirds = async () => {
  const { data } = await $host.get("api/game/viewBirds");
  return data;
};
