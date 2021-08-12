import React from "react";
import Hero from "../components/Layout/Hero";
import FeaturedProducts from "../components/Products/FeaturedProducts";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
