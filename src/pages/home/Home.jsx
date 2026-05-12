import React from 'react'
import Hero from './Hero'
import { Helmet } from 'react-helmet-async'
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
    </main>
  );
}

export default Home