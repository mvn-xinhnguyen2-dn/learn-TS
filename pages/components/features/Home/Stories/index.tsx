import React from "react";
import Slider from "react-slick";
import Title from "../Title/index";

const Stories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const dataSlide = [
    {
      key: 1,
      text: "Etiam sapien sagittis congue augue massa varius egestas ultrice varius magna a tempus aliquet undo cursus suscipit",
      avt: "https://dsathemes.com/html/olmo_1.4/files/images/review-author-1.jpg",
      username: "Scott Boxer",
      job: "@mScottBoxer",
      rating: 4.5,
    },
    {
      key: 2,
      text: "At sagittis congue augue and egestas magna ipsum vitae a purus ipsum primis in cubilia laoreet augue egestas luctus and donec diam ultrice ligula magna suscipit lectus gestas augue into cubilia",
      avt: "https://dsathemes.com/html/olmo_1.4/files/images/review-author-2.jpg",
      username: "Joel Peterson",
      job: "@JoelPeterson",
      rating: 4.5,
    },
    {
      key: 3,
      text: "Mauris donec magnis sapien etiam sapien congue augue egestas et ultrice vitae purus diam integer a congue magna ligula undo egestas magna at suscipit feugiat primis",
      avt: "https://dsathemes.com/html/olmo_1.4/files/images/review-author-3.jpg",
      username: "marisol19",
      job: "@marisol19",
      rating: 4.5,
    },
    {
      key: 4,
      text: "Mauris donec magnis sapien etiam sapien congue augue egestas et ultrice vitae purus diam integer a congue magna ligula undo egestas magna at suscipit feugiat primis",
      avt: "https://dsathemes.com/html/olmo_1.4/files/images/review-author-4.jpg",
      username: "Leslie D",
      job: "Web Developer",
      rating: 4.5,
    },
    {
      key: 5,
      text: "An augue cubilia laoreet magna suscipit egestas and ipsum a lectus purus ipsum primis and augue ultrice ligula and egestas a suscipit lectus gestas undo auctor tempus feugiat impedit",
      avt: "https://dsathemes.com/html/olmo_1.4/files/images/review-author-5.jpg",
      username: "ennifer Harper",
      job: "App Developer",
      rating: 4.5,
    },
    {
      key: 6,
      text: "An augue cubilia laoreet undo magna ipsum semper suscipit egestas magna ipsum ligula a vitae purus and ipsum primis cubilia magna suscipit",
      avt: "https://dsathemes.com/html/olmo_1.4/files/images/review-author-6.jpg",
      username: "Jonathan Barnes",
      job: "jQuery Programmer",
      rating: 4.5,
    },
    {
      key: 7,
      text: "Augue egestas diam tempus volutpat egestas augue in cubilia laoreet magna suscipit luctus dolor and blandit vitae purus diam tempus an aliquet porta rutrum gestas",
      avt: "https://dsathemes.com/html/olmo_1.4/files/images/review-author-7.jpg",
      username: "Mike Harris",
      job: "Graphic Designer",
      rating: 4.5,
    },
    {
      key: 8,
      text: "Augue egestas diam tempus volutpat egestas augue in cubilia laoreet magna suscipit luctus dolor and blandit vitae purus diam tempus an aliquet porta rutrum gestas",
      avt: "https://dsathemes.com/html/olmo_1.4/files/images/review-author-8.jpg",
      username: "Evelyn Martinez",
      job: "WordPress Consultant",
      rating: 4.5,
    },
  ];

  return (
    <section className="section-stories">
      <div className="stories container">
        <Title
          title="Stories From Our Customers"
          text="Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus, blandit and cursus varius and magnis sapien"
        />
        <Slider {...settings}>
          {dataSlide.map((item) => {
            let slides = <></>;
            slides = (
              <div className="stories-slides col-4" key={item.key}>
                <div className="stories-slides-icon">
                <i className="fi fi-rr-quote-right"></i>
                </div>
                <div className="stories-slides-wrap">
                  <div className="stories-slides-text">
                    <p>{item.text}</p>
                  </div>
                  <div className="stories-slides-author mt-25 flex">
                    <img className="stories-slides-author-avt" src={item.avt} />
                    <div className="stories-slides-author-info pl-15">
                      <h6 className="stories-slides-author-name">{item.username}</h6>
                      <p className="stories-slides-author-job">{item.job}</p>
                      <p className="stories-slides-author-rating">
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-rs-star"></i>
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            );
            return slides;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Stories;
