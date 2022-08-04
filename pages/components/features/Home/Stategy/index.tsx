import React, { useEffect } from "react";
import Image from "next/image";
import Title from "../Title/index";
interface TitleContent {
  title: string;
  text: string;
}
const titleContent: TitleContent = {
  title: "Ready to Grow Your Business?",
  text: "Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus, blandit and cursus varius and magnis sapien",
};

const Stategy = () => {
  return (
    <section className="section-stategy">
      <div className="stategy container">
        <Title title={titleContent.title} text={titleContent.text} />
        <div className="mission-detail stategy-detail pb-50 flex">
          <div className="stategy-detail-img col-6">
            <Image src="https://dsathemes.com/html/olmo_1.4/files/images/seo-03.png" alt="banner image" layout="fill" objectFit="contain"/>
          </div>
          <div className="stategy-detail-content col-6">
            <h5 className="title-h5">DIGITAL STRATEGY</h5>
            <h3 className="title-h3 p-0">
              First page rankings. First name basis
            </h3>
            <p className="text">
              Quaerat sodales sapien euismod blandit purus a purus ipsum primis
              in cubilia laoreet augue luctus magna dolor luctus and egestas
              sapien egestas vitae nemo volute
            </p>
            <p className="text">
              Quaerat sodales sapien euismod blandit at vitae ipsum primis undo
              and cubilia laoreet augue and luctus magna dolor luctus at egestas
              sapien vitae nemo egestas volute and turpis dolores aliquam
              quaerat sodales a sapien
            </p>
          </div>
        </div>
        <div className="mission-detail stategy-detail flex">
          <div className="stategy-detail-content pl-5 col-6">
            <h4 className="title-h4 mb-20">All-in-One Marketing Solutions</h4>
            <p className="text">
              Quaerat sodales sapien euismod blandit at vitae ipsum primis undo
              and cubilia laoreet augue and luctus magna dolor luctus at egestas
              sapien vitae nemo egestas volute and turpis dolores aliquam
              quaerat sodales a sapien
            </p>
            <h4 className="title-h4 mb-20 pt-10">
              Strategy and Analytics Consulting
            </h4>
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
          <div className="stategy-detail-static col-6">
            <div className="stategy-detail-static-wrap">
              <div className="stategy-detail-static-top">
                <p className="mb-10">New Customers</p>
                <h1 className="title-h1">
                  <span>+</span>
                  <span id="couter-num">784</span>
                </h1>
                <p className="mt-5">
                  <span className="txt-blue">4.6%</span>
                  <span> vs last 7 days</span>
                </p>
              </div>
              <ul className="stategy-detail-static-mid">
                <li className="text">
                  Fringilla risus luctus mauris auctor and purus euismod purus
                </li>
                <li className="text">
                  Nemo ipsam volute turpis dolores ut quaerat sodales sapien
                </li>
              </ul>
              <div className="stategy-detail-static-bottom mt-25">
                <h4>98.245</h4>
                <p>Ligula risus auctor tempus</p>
              </div>
            </div>
            <div className="bg-shape1">
              <Image src="https://dsathemes.com/html/olmo_1.4/files/images/bg-shape-1.png" alt="banner image" layout="fill" objectFit="contain"/>
            </div>
            <div className="bg-shape2">
              <Image src="https://dsathemes.com/html/olmo_1.4/files/images/bg-shape-2.png" alt="banner image" layout="fill" objectFit="contain"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stategy;
