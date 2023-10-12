"use client";
import React from "react";

const InfiniteMarquee = ({ text }) => {
  return (
    <a className="overflow-hidden whitespace-nowrap marquee text-xl font-lilita">
      <span
        className="inline-block animate-marquee"
        style={{
          animation: "marqueeAnimation 2s linear infinite",
        }}
      >
        {text}
      </span>
    </a>
  );
};

export default InfiniteMarquee;
