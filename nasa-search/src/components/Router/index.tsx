import AppLayout from '@c/Layout';
import DetailsPage from '@p/Details';
import HomePage from '@p/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
