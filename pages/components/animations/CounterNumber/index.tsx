import React, { useState } from "react";

const CounterNumber = () => {
  let over1 = true;
  let over2 = true;
  function animateValue(
    obj: HTMLElement | null,
    start: number,
    end: number,
    duration: number
  ) {
    let startTimestamp: null | number = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      if (Number.isInteger(end) === true) {
        obj!!.innerHTML = Math.floor(progress * (end - start) + start)
          .toLocaleString("en-US")
          .replace(",", ".");
      } else {
        obj!!.innerHTML = (
          Math.round((progress * (end - start) + start) * 100) / 100
        )
          .toLocaleString("en-US")
          .replace(",", ".");
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
      // console.log(progress);
    };
    window.requestAnimationFrame(step);
  }

  try {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 3000 && window.scrollY < 3100) {
        const obj_value = document.getElementById("couter-num");
        if (over1) {
          animateValue(obj_value, 300, 784, 3000);
          over1 = false;
        }
      }
      if (window.scrollY > 6890 && window.scrollY < 6900) {
        const obj_values: any = document.querySelectorAll(
          ".traffic-number-item"
        );
        // as HTMLCollection<NodeElement>;

        if (over2) {
          animateValue(obj_values[0], 0, 65, 3000);
          animateValue(obj_values[1], 0, 54, 3000);
          animateValue(obj_values[2], 0, 4.86, 3000);
          over2 = false;
        }
      }
    });
  } catch (err) {}
  return <></>;
};

export default CounterNumber;
