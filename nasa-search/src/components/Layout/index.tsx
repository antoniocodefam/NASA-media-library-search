import { Outlet } from "react-router-dom";
import AppHeader from "../Header";

export default function AppLayout() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}
