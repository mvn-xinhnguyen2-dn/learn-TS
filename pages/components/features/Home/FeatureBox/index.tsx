import React from "react";
interface DataFbox {
  key: number;
  icon: string;
  title: string;
  text: string;
}
const dataFbox: DataFbox[] = [
  {
    key: 1,
    icon: "fi fi-rr-chart-histogram",
    title: "Digital Marketing",
    text: "Porta semper lacus and cursus blandit at feugiat primis ultrice a purus euismod neque",
  },
  {
    key: 2,
    icon: "fi fi-rr-search",
    title: "SEO Services",
    text: "Porta semper lacus and cursus blandit at feugiat primis ultrice a purus euismod neque",
  },
  {
    key: 3,
    icon: "fi fi-rr-pulse",
    title: "Business Analytics",
    text: "Porta semper lacus and cursus blandit at feugiat primis ultrice a purus euismod neque",
  },
];

const FeatureBox = () => {
  return (
    <section className="section-fbox">
      <div className="fbox container">
        <ul className="fbox-list flex">
          {dataFbox.map((item) => {
            let fbox=<></>;
            fbox = (
              <li className="fbox-item" key={item.icon}>
                <div className="fbox-icon">
                  <i className={item.icon}></i>
                </div>
                <h4 className="title-h4">{item.title}</h4>
                <p className="text">{item.text}</p>
              </li>
            );
            return fbox;
          })}
        </ul>
      </div>
    </section>
  );
};

export default FeatureBox;
