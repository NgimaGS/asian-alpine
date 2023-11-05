import { Routes, Route } from "react-router-dom";
import LandingPage from "../app/pages/landing_page/home/LandingPage";
import { AppLayout } from "../app/layout/AppLayout";
import AboutUs from "../app/pages/landing_page/about/AboutUs";
import ContactUs from "../app/pages/landing_page/contact/ContactUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
