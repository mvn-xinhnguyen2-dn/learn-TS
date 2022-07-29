import React from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

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
        <div className="video-img">
          <div className="video-image">
            <Image src="https://dsathemes.com/html/olmo_1.4/files/images/seo-07.png" alt="banner image" layout="fill" objectFit="contain"/>
          </div>
          <div className="video-button">
            <FaPlay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
