import React, { useState } from "react";

const CounterNumber = () => {
  const [over1, setOvered] = useState(true);
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
        //&&
        // !!over1 &&{
        console.error(over2);

        const obj_value = document.getElementById("couter-num");
        if (over1 && over2) {
          animateValue(obj_value, 300, 784, 5000);
          setOvered(false);
          over2 = false;
        }
        // }
      }
      if (window.scrollY > 6890 && window.scrollY < 6900) {
        const obj_values = document.querySelectorAll(
          ".traffic-number-item"
        ) as HTMLCollection<HTMLElement>;

        animateValue(obj_values[0], 0, 65, 4000);
        animateValue(obj_values[1], 0, 54, 4000);
        animateValue(obj_values[2], 0, 4.86, 4000);
      }
    });
  } catch (err) {}
  return <></>;
};

export default CounterNumber;
