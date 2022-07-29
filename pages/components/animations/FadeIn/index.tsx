import React, { useEffect } from "react";

const FadeIn = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const domSectionProd = document.querySelectorAll(
        ".product-item"
      ) as HTMLCollection<HTMLElement>;

      const domSectionFbox = document.querySelector(
        ".fbox-list"
      ) as HTMLCollection<HTMLElement>;
      if (window.scrollY > 150) {
        domSectionFbox.style.animation =
          "fade-in-bottom 2s cubic-bezier(.39,.575,.565,1.000) both";
        domSectionFbox.style.visibility = "visible";
      }
      if (window.scrollY > 3000) {
        domSectionProd!!.forEach((item: HTMLElement) => {
          item.style.animation =
            "fade-in-bottom 2s cubic-bezier(.39,.575,.565,1.000) both";
          item.style.visibility = "visible";
        });
      }
    });
  }, []);
  return <></>;
};

export default FadeIn;
