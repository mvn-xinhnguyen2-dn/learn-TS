import React, { useEffect } from "react";

const FadeIn = () => {
  useEffect(() => {
    
    window.addEventListener("scroll", () => {
      const domSectionBanner = document.querySelector(
        ".section-banner"
      ) as HTMLScriptElement;
  
      const domSectionProd : any= document.querySelectorAll(
        ".product-item"
      ) 
      // as NodeListOf<HTMLScriptElement>;
  
      const domSectionFbox = document.querySelector(
        ".fbox-list"
      ) as HTMLScriptElement;

      const heightBanner = domSectionBanner.offsetHeight;
      const indexSectionFbox = domSectionFbox.offsetTop;
      const indexSectionProd = domSectionProd[0].offsetParent.offsetTop;

      if (window.scrollY > (indexSectionFbox - heightBanner)) {
        domSectionFbox.style.animation =
          "fade-in-bottom 2s cubic-bezier(.39,.575,.565,1.000) both";
        domSectionFbox.style.visibility = "visible";
      }
      if (window.scrollY > (indexSectionProd - heightBanner)) {
        domSectionProd!!.forEach((item: any) => {
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
