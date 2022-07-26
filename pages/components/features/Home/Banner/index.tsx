import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <>
    <section className="section-banner">
      <div className="banner container flex">
        <div className="banner-img col-6">
          <img src="https://dsathemes.com/html/olmo_1.4/files/images/hero-8-img.png" />
        </div>
        <div className="banner-content col-6">
          <h2 className="title-h2 pb-30">
            Generating leads with social media marketing
          </h2>
          <p className="text">
            Feugiat primis ligula risus auctor egestas and augue viverra mauri
            tortor in iaculis magna feugiat mauris ipsum and placerat viverra
            tortor gravida purus
          </p>
          <form className="form form-mail flex">
            <input type="text" placeholder="Your email address" />
            <button type="submit" className="btn">
              Get Started
            </button>
          </form>
        </div>
      </div>
      <div className="wave-shape-bottom" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L120,74.7C240,85,480,107,720,117.3C960,128,1200,128,1320,128L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
      </>
  );
};

export default Banner;
