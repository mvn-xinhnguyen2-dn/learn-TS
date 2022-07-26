import React from "react";
import { FaPlay } from "react-icons/fa";

const Video = () => {
  return (
    <section className="section-video">
      <div className="video container">
        <div className="section-title col-8 center">
          <h5 className="title-h5">YOUR ROAD TO SUCCESS</h5>
          <h3 className="title-h3">
            Our SEO services will help you to dominate the search engines
          </h3>
        </div>
        <div className="video-img center">
          <img src="https://dsathemes.com/html/olmo_1.4/files/images/seo-07.png" />
          <div className="video-button">
            <FaPlay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
