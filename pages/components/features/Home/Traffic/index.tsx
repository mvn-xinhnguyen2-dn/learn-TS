import React from "react";
import Image from "next/image";

const trafficData = [
  {
    num: 65,
    unit: "K",
    text: "Porta justo integer and velna vitae auctor",
  },
  {
    num: 54,
    unit: "%",
    text: "Ligula magna suscipit vitae and rutrum",
  },
  {
    num: 4.86,
    unit: null,
    text: "Sagittis congue augue egestas an egestas",
  },
];

const Traffic = () => {
  return (
    <>
    <section className="section-mission traffic mb-0">
      <div className="mission container">
        <div className="mission-detail mb-0 flex">
          <div className="mission-detail-img col-6 p-0 pr-30">
            <Image src="https://dsathemes.com/html/olmo_1.4/files/images/seo-02.png" alt="banner image" width="100%" height="100%" layout="responsive" objectFit="contain" />
          </div>
          <div className="mission-detail-content col-6 pl-30">
            <h4 className="title-h4 mb-20">
              Ultimate solution to website traffic
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
      </div>
    </section>
    <section className="section-mission traffic mb-0 py-70">
      <div className="traffic container">
        <ul className="traffic-list flex">
        {
          trafficData.map((item) => {
            let items=<></>
            items = (
              <li className="traffic-item col-4 flex" key={item.num} >
                <h2 className="traffic-number"><span className="traffic-number-item">{item.num}</span>{item.unit}</h2>
                <h5 className="title-h5">{item.text}</h5>
              </li>
            )
            return items
          })
        }
        </ul>
      </div>
    </section>
    </>
  );
};

export default Traffic;
