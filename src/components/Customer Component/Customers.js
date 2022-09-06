import React from "react";
import "../../App.css";
import "./Customers.css";
import customer1 from "../images/customer-1.jpg";
import customer2 from "../images/customer-2.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../Footer Component/Footer";

function Customers() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="backdrop" />
      <main>
        <div>
          <div className="testimonial" id="customer-1">
            <div className="testimonial__image-container">
              <img
                src={customer1}
                alt="Mike Statham - Customer"
                className="testimonial__image"
              />
            </div>
            <div className="testimonial__info">
              <h1 className="testimonial__name">Mike Statham</h1>
              <h2 className="testimonial__subtitle">
                Founder of <Link to="tech-analysis.com">tech-analysis.com</Link>
              </h2>
              <p className="testimonial__text">
                uHost helped me realize my project with a highly constrained
                budget in like no time.
              </p>
            </div>
          </div>
          <div className="testimonial" id="customer-2">
            <div className="testimonial__info">
              <h1 className="testimonial__name">John Mellow</h1>
              <h2 className="testimonial__subtitle">
                Hosts his private videos on uHost.
              </h2>
              <p className="testimonial__text">
                I worked as a blogger and always looked for an integrated
                hosting and file storage solution. I found it in uHost!
              </p>
            </div>
            <div className="testimonial__image-container">
              <img
                src={customer2}
                alt="John Mellow - Customer"
                className="testimonial__image"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}

export default Customers;
