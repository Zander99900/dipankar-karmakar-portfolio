"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

interface CountType {
  number: number;
  text?: string;
  add_style?: boolean;
}

const Count = ({ number, text, add_style }: CountType) => {
  const [focus, setFocus] = useState(false);

  return (
    <InView
      as="div"
      className={`portfolio-counter-inner ${add_style ? "align-items-center justify-content-center" : ""}`}
      onChange={(inView) => {
        if (inView) setFocus(true);
      }}
      triggerOnce
    >
      {focus ? <CountUp start={0} end={number} duration={2} /> : <span>0</span>}
      {text ? <span>{text}</span> : null}
    </InView>
  );
};

export default Count;
