import { Outlet } from "react-router";

import { Directory } from "../../components";

export const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};
