import React from "react";
import { ArrowIconProps } from "./types";

const arrowPaths = {
  horizontal: {
    prev: "M15 18l-6-6 6-6", // Left arrow
    next: "M9 18l6-6-6-6", // Right arrow
  },
  vertical: {
    prev: "M18 15l-6-6-6 6", // Up arrow
    next: "M6 9l6 6 6-6", // Down arrow
  },
};

export const ArrowIcon: React.FC<ArrowIconProps> = ({
  direction,
  orientation = "horizontal",
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={arrowPaths[orientation][direction]} />
  </svg>
);
