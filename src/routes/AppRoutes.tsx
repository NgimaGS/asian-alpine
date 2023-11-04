import { Routes, Route } from "react-router-dom";
import LandingPage from "../app/pages/landing_page/home/LandingPage";
import { AppLayout } from "../app/layout/AppLayout";
import Loader from "../app/components/loader/Loader";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loader" element={<Loader />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
