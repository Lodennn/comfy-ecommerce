import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={classes.contact}>
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className={classes.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            eaque corrupti dicta cumque saepe blanditiis rem adipisci mollitia
            eos, incidunt quam
          </p>
          <form
            className={classes["contact-form"]}
            action="https://formspree.io/f/meqvpqbq"
            method="POST"
          >
            <input
              type="email"
              name="_replyto"
              className={classes["form-input"]}
              placeholder="enter email"
            />
            <button type="submit" className={classes["submit-btn"]}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
