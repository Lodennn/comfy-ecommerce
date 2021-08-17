import React from "react";
import aboutImg from "../assets/hero-bcg.jpeg";
import PageHero from "../components/Layout/PageHero";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
  const aboutPageClasses = [
    `page`,
    `section`,
    `section-center`,
    `${classes["about-page"]}`,
  ].join(" ");
  return (
    <main>
      <PageHero title="about" />
      <section className={aboutPageClasses}>
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            praesentium quos magni, totam repudiandae sint incidunt. Corrupti
            vel dolore error quia totam quod cupiditate veritatis. Beatae cum
            deserunt error quidem nesciunt provident ipsum? Laudantium enim quod
            aperiam, vitae, veniam ad voluptas, inventore quos a perferendis
            alias corrupti necessitatibus ratione laborum?
          </p>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
