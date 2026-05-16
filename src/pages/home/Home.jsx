import React from 'react'
import Hero from '../../components/home/Hero';
import { Helmet } from 'react-helmet-async'
import FeatureProducts from '../../components/home/FeatureProducts';
import Banner from '../../components/home/Banner';

import Product from '../../components/Product';
import FragranceSections from '../../components/home/FragranceSections';
import MakeupSections from '../../components/home/MakeupSections';
import ProductCategory from '../../components/home/ProductCategory';
const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Kylie Cosmetics by Kylie Jenner | Kylie jennere Fragrance | Kylie Skin</title>
        <meta
          name="description"
          content="Kylie Cosmetics by Kylie Jenner | Kylie Jenner Fragrances ..."
        />
      </Helmet>
      <Hero />
      <FeatureProducts />
      <FragranceSections />
      <Product />
      <MakeupSections />
      <Banner />
      <ProductCategory />


    </main>
  );
}

export default Home