import React from "react";
import "../../App.css";
import "./Packages.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../Footer Component/Footer";

function Packages() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="background" />
      <main>
        <section className="package" id="plus">
          <Link to="#">
            <h1 className="package__title">Our PLUS Plan</h1>
            <h2 className="package__badge">RECOMMENDED</h2>
            <h2 className="package__subtitle">
              The most popular choice of our customers.
            </h2>
            <p className="package__info">
              Benefit from increased storage and faster support to ensure that
              your mission-critical data and applications are always available!
            </p>
          </Link>
        </section>
        <section className="package" id="free">
          <Link to="#">
            <h1 className="package__title">Our FREE Plan</h1>
            <h2 className="package__subtitle">
              An extremely solid start into our hosting world.
            </h2>
            <p className="package__info">
              Get started immediately at zero cost!
            </p>
          </Link>
        </section>
        <section className="package" id="premium">
          <Link to="#">
            <h1 className="package__title">Our PREMIUM Plan</h1>
            <h2 className="package__subtitle">
              All your enterprise needs. Instant support, guaranteed uptime.
            </h2>
            <p className="package__info">
              The best solution for small to large enterprises. Because hosting
              shouldn't be in the way!
            </p>
          </Link>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}

export default Packages;
