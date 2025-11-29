import React from "react";
import FAQPage from "../ui/Faq";
import Testimonials from "../ui/Testimonial";
import Gallery from "../ui/Gallery";
// import OurServicesSection from "../ui/OurServices";
import HeroSlider from "../ui/home/HeroSlider";
import StillHaveQuestions from '../counters/ShowcaseProductSlider'
import Blog from "../ui/Blog";
import Product from "../ui/Product";
import WhyChoose from "../ui/home/WhyChoose";
import Counter from '../counters/Unique'
import AboutPage from "../ui/home/About";
// import EMICalculator from "../ui/EmiCalculator";
// import Offers from "../ui/Offers";

const Home = () => {
  return (
    <div className="min-h-screen bg-creamWhite overflow-x-hidden">
      <HeroSlider />
      <AboutPage />

      <Product />
            <StillHaveQuestions />
      {/* <WhyChoose /> */}
      <Gallery />

      {/* <Offers/> */}
      {/* <EMICalculator /> */}

      {/* <FinacialSlider/> */}
      {/* <Counter /> */}
      {/* <Blog /> */}
      <Testimonials />
      <FAQPage />
    </div>
  );
};

export default Home;
