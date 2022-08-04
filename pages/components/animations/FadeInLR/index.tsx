import React, { useEffect } from "react";

const FadeInLR = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const domSectionBanner = document.querySelector(
        ".section-banner"
      ) as HTMLScriptElement;
        
      const domSection:any = document.querySelectorAll(".mission-detail") as NodeListOf<HTMLScriptElement>;
      const animationDomSection = (i: number): void => {
        domSection[i].firstElementChild.style.animation =
          "fade-in-right 2s cubic-bezier(.39,.575,.565,1.000) both";
        domSection[i].firstElementChild.style.visibility = "visible";
        domSection[i].lastElementChild.style.animation =
          "fade-in-left 2s cubic-bezier(.39,.575,.565,1.000) both";
        domSection[i].lastElementChild.style.visibility = "visible";
      };
      switch (true) {
        case window.scrollY > 5850:
          animationDomSection(5);
          break;
        case window.scrollY > 4200:
          animationDomSection(4);
          break;
        case window.scrollY > 3600:
          animationDomSection(3);
          break;
        case window.scrollY > 2400:
          animationDomSection(2);
          break;
        case window.scrollY > 1700:
          animationDomSection(1);
          break;
        case window.scrollY > 830:
          animationDomSection(0);
          break;
      }
    });
  }, []);
  return <></>;
};

export default FadeInLR;
