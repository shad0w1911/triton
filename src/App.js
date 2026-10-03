import "./App.css";
import Contact from "./Pages/contact";
import Home from "./Pages/home";
import About from "./Pages/about";
import NavigationBar from "./components/navigationBar";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import TopBar from "./components/topBar";
import Footer from "./components/footer";
import Service from "./Pages/services";
import CallCenter from "./Services/CallCenter";
import ChatSupport from "./Services/ChatSupport";
import EmailSupport from "./Services/EmailSupport";
import ITService from "./Services/ITService";
import Portal from "./Services/Portal";
import Sales from "./Services/Sales";
import TechSupport from "./Services/TechSupport";
import Telephone from "./Services/Telephone";
import { AnimatePresence } from "framer-motion";
import PreLoader from "./components/preLoader";
import { useLayoutEffect } from "react";
import Careers from "./Pages/careers";
import Maintenance from "./Pages/maintenance";
import { MAINTENANCE_MODE } from "./config/maintenance";

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (MAINTENANCE_MODE) {
    const currentPath = location.pathname.replace(/\/+$/, "") || "/";
    return currentPath === "/maintenance" ? (
      <Maintenance />
    ) : (
      <Navigate to="/maintenance" replace />
    );
  }

  return (
    <>
      <PreLoader />
      <TopBar />
      <NavigationBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact_us" element={<Contact />} />
          <Route path="/services/call_center" element={<CallCenter />} />
          <Route path="/services/chat_support" element={<ChatSupport />} />
          <Route path="/services/email_support" element={<EmailSupport />} />
          <Route path="/services/it_service" element={<ITService />} />
          <Route path="/services/bi_portal" element={<Portal />} />
          <Route path="/services/sales_agents" element={<Sales />} />
          <Route path="/services/tech_support" element={<TechSupport />} />
          <Route path="/services/telephone" element={<Telephone />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
