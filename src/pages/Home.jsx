import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import the Link component
import { About } from "./About";
import { ReactTyped } from "react-typed";

export const Home = () => {
  return (
    <>
      <main className="hero-section main">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1 className="heading-xl">
              <ReactTyped
                strings={[
                  "Collect the information,",
                  "With our Website on Time.",
                  "Explore cultures,",
                  "History, and facts."
                ]}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </h1>
            <p className="paragraph">
              Explore the past, culture, and beauty of the world. Find, search,
              and filter the content you find.
            </p>
            {/* The corrected code: Use the Link component for navigation */}
            <Link to="/country" className="btn btn-darken btn-inline bg-white-box">
              Start Exploring <FaLongArrowAltRight />
            </Link>
          </div>
          <div className="hero-image">
            <img className="global-img" src="/image/LM8H.gif" alt="world-map" />
          </div>
        </div>
      </main>
      <About />
    </>
  );
};