import "../css/styles.scss";
import { useEffect } from "react";
import Self from "../components/home/self";
import NavBar from "../components/home/nav";
import AOS from "aos";
import { TxtRotator } from "../libs/txtRotator";
import { ParticleNetwork } from "../libs/particleNetwork";
// import "aos/dist/aos.css";

const content = [
  {
    text: "React",
    className: "classA",
    animation: "fade"
  },
  {
    text: "Vue",
    className: "classB",
    animation: "fade"
  },
  {
    text: "PHP",
    className: "classC",
    animation: "fade"
  },
  {
    text: "NodeJs",
    className: "classD",
    animation: "fade"
  }
];
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "slide",
      animatedClassName: "ftco-animate"
    });
    return () => {
      // cleanup
    };
  }, []);
  return (
    <div className="container-fluids">
      <NavBar />
      <section className="hero-wrap js-fullheight">
        {/* <div className="overlay"></div> */}

        <ParticleNetwork />
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
            <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
              <div className="text text-center">
                <span className="subheading">Hey! I am</span>
                <h1>Nghia</h1> <h1>Than</h1>
                <h2>
                  I'm a &nbsp;
                  <TxtRotator
                    content={content}
                    time={5000}
                    startDelay={2000}
                    // data-rotate='[ "Web Designer.", "Developer.", "Photographer.", "Marketer.", "Blogger" ]'
                  ></TxtRotator>
                  &nbsp; man
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mouse">
          <a href="#" className="mouse-icon">
            <div className="mouse-wheel">
              <span className="ion-ios-arrow-round-down"></span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
