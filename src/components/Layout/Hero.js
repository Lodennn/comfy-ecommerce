import React from "react";
import { Link } from "react-router-dom";
import heroBcg from "../../assets/hero-bcg.jpeg";
import heroBcg2 from "../../assets/hero-bcg-2.jpeg";
import classes from "./Hero.module.css";
const Hero = () => {
  const heroClasses = ["section-center", `${classes.hero}`].join(" ");
  return (
    <section className={heroClasses}>
      <article className="content">
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eos
          quaerat quibusdam tempora modi cupiditate doloribus, nemo voluptatem,
          esse quo ex porro similique hic repudiandae quod commodi. Distinctio,
          incidunt molestiae.
        </p>
        <Link to="/products" className={`btn ${classes["hero-btn"]}`}>
          shop now
        </Link>
      </article>
      <article className={classes["img-container"]}>
        <img src={heroBcg} alt="nice table" className={classes["main-img"]} />
        <img
          src={heroBcg2}
          alt="person working"
          className={classes["accent-img"]}
        />
      </article>
    </section>
  );
};

export default Hero;
