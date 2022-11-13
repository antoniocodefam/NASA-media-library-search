import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/Home";
import AppLayout from "../Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
