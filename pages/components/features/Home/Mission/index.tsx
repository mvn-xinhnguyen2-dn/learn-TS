import React, {useEffect } from 'react'
import Title from "../Title";
import Image from 'next/image';

const titleContent = {
  title: "Get More Customers Online",
  text: "Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus, blandit and cursus varius and magnis sapien",
};

const Mission = () => {
  
  return (
    <section className="section-mission">
      <div className="mission container">
        <Title title={titleContent.title} text={titleContent.text} />
        <div className="mission-detail flex">
          <div className="mission-detail-content col-5">
            <h4 className="title-h4 mb-20">Advanced Analytics Review</h4>
            <p className="text">
              Quaerat sodales sapien euismod blandit undo vitae ipsum primis and
              cubilia a laoreet augue and luctus magna dolor egestas luctus
              sapien vitae nemo egestas volute and turpis
            </p>
            <h4 className="title-h4 mb-20 pt-10">Email Marketing Campaigns</h4>
            <ul>
              <li className="text">
                Fringilla risus, luctus mauris an auctor purus euismod iaculis
                luctus magna purus pretium ligula and quaerat luctus magna
              </li>
              <li className="text">
                Nemo ipsam egestas volute turpis dolores undo ultrice aliquam
                quaerat sodales
              </li>
            </ul>
          </div>
          <div className="mission-detail-img col-7">
            <Image src="https://dsathemes.com/html/olmo_1.4/files/images/seo-06.png" alt="banner image" width="100%" height="100%" layout="responsive" objectFit="cover"/>
          </div>
        </div>
        <div className="mission-detail flex">
          <div className="mission-detail-img col-6 p-0 pr-30">
            <Image src="https://dsathemes.com/html/olmo_1.4/files/images/seo-01.png" alt="banner image" width="100%" height="100%" layout="responsive" objectFit="cover"/>
          </div>
          <div className="mission-detail-content col-6 pl-30">
            <h4 className="title-h4 mb-20">
              Right Strategies and Implementations
            </h4>
            <ul>
              <li className="text">
                Fringilla risus, luctus mauris orci auctor euismod iaculis
                luctus magna purus pretium ligula purus undo quaerat tempor
                sapien rutrum mauris quaerat ultrice
              </li>
              <li className="text">
                Quaerat sodales sapien euismod purus blandit
              </li>
              <li className="text">
                Nemo ipsam egestas volute turpis dolores undo ultrice aliquam
                quaerat at sodales sapien purus
              </li>
            </ul>
          </div>
        </div>
        <div className="mission-detail bg-gray flex">
          <div className="mission-detail-content col-6">
            <h5 className="title-h5">QUICK AND SECURE</h5>
            <h3 className="title-h3 p-0">
              Committed to top quality and results
            </h3>
            <ul>
              <li className="text">
                Fringilla risus, luctus mauris auctor euismod an iaculis luctus
                magna purus pretium ligula purus and quaerat sapien rutrum
                mauris auctor
              </li>
              <li className="text">
                Nemo ipsam egestas volute turpis dolores ligula and aliquam
                quaerat at sodales sapien purus
              </li>
            </ul>
          </div>
          <div className="mission-detail-img col-6">
            <Image src="https://dsathemes.com/html/olmo_1.4/files/images/seo-04.png" alt="banner image" width="100%" height="100%" layout="responsive" objectFit="cover"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
