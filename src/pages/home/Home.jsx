import React from 'react'
import Hero from '../../components/home/Hero';
import { Helmet } from 'react-helmet-async'
import FeatureProducts from '../../components/home/FeatureProducts';
import Banner from '../../components/home/Banner';
const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Home | Kylie cosmetics</title>
        <meta
          name="description"
          content="Kylie Cosmetics by Kylie Jenner | Kylie Jenner Fragrances ..."
        />
      </Helmet>
      <Hero />
      <FeatureProducts />
      <Banner />
    </main>
  );
}

export default Home