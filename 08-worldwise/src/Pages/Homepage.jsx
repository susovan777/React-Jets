import React from "react";
import styles from "./homepage.module.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <section>
        <h1>
          You travel the world.
          <br />
          Worldwise keep track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>

        <Link to="/app" className="cta">Start Tracking Now</Link>
      </section>
    </main>
  );
};

export default Homepage;
