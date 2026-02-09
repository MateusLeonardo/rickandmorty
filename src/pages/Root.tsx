import { Outlet } from "react-router";
import { Header } from "../components/layout/Header/Header";

export function Root() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 min-h-0 flex flex-col container mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
