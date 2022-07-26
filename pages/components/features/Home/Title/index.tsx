import React from "react";
interface TitleProps {
  title: string,
  text: string
}

const Title = ({title, text}:TitleProps):JSX.Element => {
  return (
    <div className="section-title col-8">
      <h2 className="title-h2 pb-30 center">{title}</h2>
      <p className="text center">
        {text}
      </p>
    </div>
  );
};

export default Title;
