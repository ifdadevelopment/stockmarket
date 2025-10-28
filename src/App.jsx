import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import BlogList from "./components/BlogList";
import BlogDetail from "./pages/BlogDetail";
import CheckoutPage from "./components/CheckoutPage";
import SuccessPage from "./components/SuccessPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import RegisterPage from "./pages/RegisterPage";
import PaymentListPage from "./pages/PaymentListPage";
import CouponGenerator from "./components/CouponGenerator";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./components/authContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

const App = () => {
  const { user } = useAuth();
  const isMinimalLayout = location.pathname === "/home";

  return (
    <>
      {!isMinimalLayout && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="payment-list" element={<PaymentListPage />} />
            <Route path="admincoupongenerator" element={<CouponGenerator />} />
          </Route>
        </Route>

        <Route path="/services" element={<Services />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>

      {!isMinimalLayout && <Footer />}
      {!isMinimalLayout && <ScrollToTopButton />}
      <ToastContainer />
    </>
  );
};

export default App;
