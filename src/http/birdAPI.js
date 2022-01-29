import { host } from "./index";

export const fetchBirds = async () => {
  const { data } = await host.get("api/bird/viewBirds");
  return data;
};
