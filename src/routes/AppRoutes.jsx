import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const Home = lazy(() => import("../pages/home/Home.jsx"));
const Discover = lazy(() => import("../pages/discover/Discover.jsx"));
const Fragrance = lazy(() => import("../pages/fragrance/Fragrance.jsx"));
const Cosmetics = lazy(() => import("../pages/cosmetics/Cosmetics.jsx"));
const Skin = lazy(() => import("../pages/skin/Skin.jsx"));

export default function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-semibold">Loading...</h1>
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
        </Route>
      </Routes>
    </Suspense>
  );
}
