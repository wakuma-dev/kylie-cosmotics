import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout.jsx";
import Login from "../pages/auth/Login.jsx";
import Signup from "../pages/auth/SignUp.jsx";
import Loader from "../components/Loader.jsx";

// Core
const Home = lazy(() => import("../pages/home/Home.jsx"));
const Discover = lazy(() => import("../pages/discover/Discover.jsx"));
const Fragrance = lazy(() => import("../pages/fragrance/Fragrance.jsx"));
const Cosmetics = lazy(() => import("../pages/cosmetics/Cosmetics.jsx"));
const Skin = lazy(() => import("../pages/skin/Skin.jsx"));
const Checkout = lazy(() => import("../pages/Checkout.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const Reward = lazy(() => import("../pages/Reward.jsx"));
const Card = lazy(() => import("../pages/Card.jsx"));
const Order = lazy(() => import("../pages/Order.jsx"));
const Shop = lazy(() => import("../pages/Shop.jsx"));

// Fragrance
const All = lazy(() => import("../pages/fragrance/All.jsx"));
const Cosemic = lazy(() => import("../pages/fragrance/Cosmic.jsx"));
const Intense = lazy(() => import("../pages/fragrance/Intense.jsx"));
const Kylie = lazy(() => import("../pages/fragrance/Kyliecosmic.jsx"));
const Hair = lazy(() => import("../pages/fragrance/Hair.jsx"));
const Bundles = lazy(() => import("../pages/fragrance/Bundles.jsx"));

export default function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[100dvh] flex items-center justify-center">
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="cosmetics" element={<Cosmetics />} />
          <Route path="fragrance" element={<Fragrance />} />
          <Route path="skin" element={<Skin />} />
          <Route path="discover" element={<Discover />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order" element={<Order />} />
          <Route path="reward" element={<Reward />} />
          <Route path="contact" element={<Contact />} />
          <Route path="card" element={<Card />} />

          {/* FIXED ROUTE */}
          <Route path="/shop" element={<Shop />} />

          <Route path="shop-all" element={<All />} />
          <Route path="cosmic-kylie-jenner" element={<Cosemic />} />
          <Route path="cosmic-kylie-jenner-2-0" element={<Kylie />} />
          <Route path="cosmic-kylie-jenner-intense" element={<Intense />} />
          <Route path="hair" element={<Hair />} />
          <Route path="bundles" element={<Bundles />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
