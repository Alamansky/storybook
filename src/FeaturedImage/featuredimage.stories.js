import React from "react";
import FeaturedImage from "./FeaturedImage";

export default { title: "FeaturedImage" };

const imageSizes = [
  "https://picsum.photos/1500/1500",
  "https://picsum.photos/1350/1350",
  "https://picsum.photos/1200/1200",
  "https://picsum.photos/1050/1050",
  "https://picsum.photos/900/900",
  "https://picsum.photos/750/750",
  "https://picsum.photos/600/600",
  "https://picsum.photos/450/450",
  "https://picsum.photos/300/300",
  "https://picsum.photos/150/150"
];

export const Basic = () => (
  <FeaturedImage imageSizes={imageSizes} maxWidth={"1000px"} />
);

export const Error = () => (
  <FeaturedImage imageSizes={undefined} maxWidth={"1000px"} />
);
