import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "../../pages/Details";
import HomePage from "../../pages/Home";
import AppLayout from "../Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
