import React from "react";
import { services } from "../../utils/constants";
import classes from "./Services.module.css";

const Services = () => {
  return (
    <section className={classes.services}>
      <div className="section-center">
        <article className={classes.header}>
          <h3>
            custom furniture <br />
            built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            vel aut enim. Vitae iure deserunt tempora excepturi esse, totam
            consequatur quis cum asperiores eligendi pariatur ducimus libero
            praesentium quia fugiat!
          </p>
        </article>
        <div className={classes["services-center"]}>
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className={classes.service}>
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
