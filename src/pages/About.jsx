import countryFacts from "../api/countryData.json";
import { useEffect } from 'react';

export const About = () => {

  useEffect(() => {
    // This function will run after the component has been rendered to the DOM
    if (typeof PureCounter !== 'undefined') {
      new PureCounter();
    }

    // --- Lazy Loading Logic ---
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is now visible in the viewport
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Stop observing the element once it's visible to save resources
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // observe from the viewport
        rootMargin: '0px',
        threshold: 0.2 // trigger the callback when 20% of the item is visible
      }
    );

    // Tell the observer to watch each card
    cards.forEach((card) => {
      observer.observe(card);
    });

  }, []);

  return (
    <section className="section-about container">
      <h2 className="container-title">
        Welcome, Here are some interesting facts
        <br />
        About <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter"></span> Countries.
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((country) => {
          const { id, countryName, capital, population, interestingFact } = country;
          return (
            // All cards start with the base '.card' class
            <div className="card" key={id}>
              <div className="container-card bg-yellow-box">
                <p className="card-title">
                  {countryName}
                </p>
                <p>
                  <span className="card-description">
                    Capital:
                  </span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">
                    Population:
                  </span>
                  {population}
                </p>
                <p>
                  <span className="card-description">
                    Interesting Facts:
                  </span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};