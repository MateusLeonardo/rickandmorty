import { Outlet } from "react-router";
import { Header } from "../components/layout/Header/Header";

export function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
