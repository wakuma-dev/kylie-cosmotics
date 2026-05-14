import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout.jsx";
import Login from "../pages/auth/Login.jsx";
import Signup from "../pages/auth/SignUp.jsx";

const Home = lazy(() => import("../pages/home/Home.jsx"));
const Discover = lazy(() => import("../pages/discover/Discover.jsx"));
const Fragrance = lazy(() => import("../pages/fragrance/Fragrance.jsx"));
const Cosmetics = lazy(() => import("../pages/cosmetics/Cosmetics.jsx"));
const Skin = lazy(() => import("../pages/skin/Skin.jsx"));
const Checkout = lazy(() => import("../pages/Checkout.jsx"))
const Contact = lazy(() => import("../pages/Contact.jsx"));
const Reward = lazy(() => import("../pages/Reward.jsx"));
const Card = lazy(() => import("../pages/Card.jsx"));
const Order = lazy(() => import("../pages/Order.jsx"));
const Shop = lazy(() => import("../pages/Shop.jsx"));
const All = lazy(() => import("../pages/fragrance/All.jsx"));
const Cosemic = lazy(() => import("../pages/fragrance/Cosmic.jsx"));
const Intense = lazy(() => import("../pages/fragrance/Intense.jsx"));
const Kylie = lazy(() => import("../pages/fragrance/Kyliecosmic.jsx"))
const Hair = lazy(() => import("../pages/fragrance/Hair.jsx"));
const Bundles = lazy(() => import("../pages/fragrance/Bundles.jsx"));
const New = lazy(() => import("../pages/skin/new/New.jsx"));
const LipButter = lazy(() => import("../pages/skin/new/LipButter.jsx"));
const Pomegranate = lazy(() => import("../pages/skin/new/Pomegranate.jsx"));
const Butter = lazy(() => import("../pages/skin/lips/Butter.jsx"));
const Lips = lazy(() => import("../pages/skin/lips/Lips.jsx"));
const Care = lazy(() => import("../pages/skin/lips/Care.jsx"));
const Oils = lazy(() => import("../pages/skin/lips/Oils.jsx"));
const Face = lazy(() => import("../pages/skin/face/Face.jsx"));
const Cleansers = lazy(() => import("../pages/skin/face/Cleansers.jsx"));
const Moistures = lazy(() => import("../pages/skin/face/Moistures.jsx"));
const Toners = lazy(() => import("../pages/skin/face/Toners.jsx"));
const Serums = lazy(() => import("../pages/skin/face/Serums.jsx"));
const Sellers = lazy(() => import("../pages/skin/Sellers.jsx"));
const Sets = lazy(() => import("../pages/skin/Sets.jsx"));
const About = lazy(() => import("../pages/discover/About.jsx"));
const GiftGuide = lazy(() => import("../pages/discover/GiftGuide.jsx"));
const GuideCard = lazy(() => import("../pages/discover/GuideCard.jsx"));
const Shade = lazy(() => import("../pages/discover/Shade.jsx"));
const Looks = lazy(() => import("../pages/discover/Looks.jsx"));
const Brows = lazy(() => import("../pages/cosmetics/brows/Brows.jsx"));
const EyeLiners = lazy(() => import("../pages/cosmetics/brows/EyeLiners.jsx"));
const EyesBrows = lazy(() => import("../pages/cosmetics/brows/EyesBrows.jsx"));
const Mascaras = lazy(() => import("../pages/cosmetics/brows/Mascaras.jsx"));
const Palettes = lazy(() => import("../pages/cosmetics/brows/Palettes.jsx"));
const Duos = lazy(() => import("../pages/cosmetics/featured/Duos.jsx"));
const Favorites = lazy(() => import("../pages/cosmetics/featured/Favorites.jsx"));
const Featured = lazy(() => import("../pages/cosmetics/featured/Featured.jsx"));
const Makeup = lazy(() => import("../pages/cosmetics/featured/Makeup.jsx"));
const Online = lazy(() => import("../pages/cosmetics/featured/Online.jsx"));
const Travel  = lazy(() => import("../pages/cosmetics/featured/Travel.jsx"));
const BundlesSets = lazy(() => import("../pages/cosmetics/featured/BundlesSets.jsx"));
const Collections = lazy(() => import("../pages/cosmetics/featured/Collections.jsx"));
const Lip = lazy(() => import("../pages/cosmetics/lip/Lip.jsx"));
const LipKits = lazy(() => import("../pages/cosmetics/lip/LipKits.jsx"));
const Lipstick = lazy(() => import("../pages/cosmetics/lip/Lipsticks.jsx"));
const LiquidLipstick = lazy(() => import("../pages/cosmetics/lip/LiquidLipstick.jsx"));
const Plumpers = lazy(() => import("../pages/cosmetics/lip/Plumpers.jsx"));
const Stains = lazy(() => import("../pages/cosmetics/lip/Stains.jsx"));
const Tints = lazy(() => import("../pages/cosmetics/lip/Tints.jsx"));
const BestSellers = lazy(() => import("../pages/cosmetics/BestSellers.jsx"));
const Cool = lazy(() => import("../pages/cosmetics/new/Cool.jsx"));
const CloudBalm = lazy(() => import("../pages/cosmetics/new/CloudBalm.jsx"));
const ButterCake = lazy(() => import("../pages/cosmetics/new/ButterCake.jsx"));
const NewArrival = lazy(() => import("../pages/cosmetics/new/NewArrival.jsx"));
const TravelSized = lazy(() => import("../pages/cosmetics/new/TravelSized.jsx"));

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
          <Route path="checkout" element={<Checkout />} />
          <Route path="order" element={<Order />} />
          <Route path="reward" element={<Reward />} />
          <Route path="contact" element={<Contact />} />
          <Route path="card" element={<Card />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="cosmic-kylie-jenner" element={<Cosemic />} />
          <Route path="cosmic-kylie-jenner-2-0" element={<Kylie />} />
          <Route path="cosmic-kylie-jenner-intense" element={<Intense />} />
          <Route path="shop-all" element={<All />} />
          <Route path="hair" element={<Hair />} />
          <Route path="bundles" element={<Bundles />} />
          <Route path="new" element={<New />} />
          <Route path="lip-butter" element={<LipButter />} />
          <Route path="pomegranate" element={<Pomegranate />} />
          <Route path="lips" element={<Lips />} />
          <Route path="butter" element={<Butter />} />
          <Route path="oil" element={<Oils />} />
          <Route path="care" element={<Care />} />
          <Route path="face" element={<Face />} />
          <Route path="cleansers" element={<Cleansers />} />
          <Route path="toners" element={<Toners />} />
          <Route path="serums" element={<Serums />} />
          <Route path="moistures" element={<Moistures />} />
          <Route path="best-sellers" element={<Sellers />} />
          <Route path="bundles-sets" element={<Sets />} />
          <Route path="about-us" element={<About />} />
          <Route path="kylie-looks" element={<Looks />} />
          <Route path="shade-finger-quiz" element={<Shade />} />
          <Route path="gift-guide" element={<GiftGuide />} />
          <Route path="gift-card" element={<GuideCard />} />
          <Route path="cloud-balm" element={<CloudBalm />} />
<Route path="travel-sized-hair-body-mists" element={<TravelSized />} />
<Route path="cool-toned-precision-pout-lip-liners" element={<Cool />} />
<Route path="butter-cake-lip-butter" element={<ButterCake />} />
<Route path="new-arrival" element={<NewArrival />} />

<Route path="best-sellers" element={<BestSellers />} />

<Route path="lip" element={<Lip />} />
<Route path="lip-kits" element={<LipKits />} />
<Route path="lipsticks" element={<Lipstick />} />
<Route path="liquid-lipsticks" element={<LiquidLipstick />} />
<Route path="lip-plumpers" element={<Plumpers />} />
<Route path="lip-stains" element={<Stains />} />
<Route path="lip-tints" element={<Tints />} />

<Route path="eyes-and-brows" element={<EyesBrows />} />
<Route path="mascaras" element={<Mascaras />} />
<Route path="palettes" element={<Palettes />} />
<Route path="eyeliners" element={<EyeLiners />} />
<Route path="brows" element={<Brows />} />

<Route path="featured" element={<Featured />} />
<Route path="bundles-sets" element={<BundlesSets />} />
<Route path="lip-duos" element={<Duos />} />
<Route path="kylies-favorites" element={<Favorites />} />
<Route path="king-kylie-collection" element={<Collections />} />
<Route path="online-exclusives" element={<Online />} />
<Route path="makeup-brushes" element={<Makeup />} />
<Route path="travel-essential" element={<Travel />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Suspense>
  );
}







