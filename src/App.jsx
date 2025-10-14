import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./pages/Home";

import Footer from "./components/Footer";

import ScrollToTopButton from "./components/ScrollToTopButton";
import TrainingPage from "./pages/TrainingPage";
import TradingTips from "./pages/TradingTips";
import InteradayTips from "./pages/InteradayTips";
import BlogList from "./components/BlogList";
import BlogDetail from "./pages/BlogDetail";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
const isMinimalLayout = location.pathname === "/home";
const App = () => {
  return (
    <>
      {!isMinimalLayout && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/training" element={<TrainingPage />} />
        <Route path="/trading-tips" element={<TradingTips />} />
        <Route path="/trading-tips/intraday" element={<InteradayTips />} />
        <Route path="/trading-tips/intraday" element={<InteradayTips />} /> */}

        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>

      {!isMinimalLayout && <Footer />}
      {!isMinimalLayout && <ScrollToTopButton />}
      <ToastContainer />
    </>
  );
};

export default App;
