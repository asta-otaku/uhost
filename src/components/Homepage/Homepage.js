import React from "react";
import "../../App.css";
import "./Homepage.css";

function Homepage() {
  return (
    <>
      <main>
        <section id="product-overview">
          <h1>Get the freedom you deserve.</h1>
        </section>
        <section className="plans">
          <h1 className="section-title">Choose Your Plan</h1>
          <div className="plan__list">
            <article className="plan">
              <h1 className="plan__title">FREE</h1>
              <h2 className="plan__price">$0/month</h2>
              <h3>For hobby projects or small teams.</h3>
              <ul className="plan__features">
                <li className="plan__feature">1 Workspace</li>
                <li className="plan__feature">Unlimited Traffic</li>
                <li className="plan__feature">10GB Storage</li>
                <li className="plan__feature">Basic Support</li>
              </ul>
              <div>
                <button className="button">CHOOSE PLAN</button>
              </div>
            </article>
            <article className="plan plan--highlighted">
              <h1 className="plan__annotation">RECOMMENDED</h1>
              <h1 className="plan__title">PLUS</h1>
              <h2 className="plan__price">$29/month</h2>
              <h3>For ambitious projects.</h3>
              <ul className="plan__features">
                <li className="plan__feature">5 Workspace</li>
                <li className="plan__feature">Unlimited Traffic</li>
                <li className="plan__feature">100GB Storage</li>
                <li className="plan__feature">Plus Support</li>
              </ul>
              <div>
                <button className="button">CHOOSE PLAN</button>
              </div>
            </article>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default Homepage;
