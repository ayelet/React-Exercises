import "./style.css";
import React, { useState, useRef } from "react";
import img_bw1 from "./Assets/my-neighbour-totoro-ep-disney_BW.jpg";
import img_bw2 from "./Assets/totoro_BW.jpg";
import img_1 from "./Assets/my-neighbour-totoro-ep-disney.jpg";
import img_2 from "./Assets/totoro.jpg";

export default function MyImages() {
  const [img1_src, setImage1] = useState({ img_bw1 });
  const [img2_src, setImage2] = useState({ img_bw2 });
  const imgRef1 = useRef(img1_src);
  const imgRef2 = useRef(img2_src);

  const onMouseEnter = (e) => {
    if (imgRef1.current === e.target) setImage1(img_1);
    if (imgRef2.current === e.target) setImage2(img_2);
  };

  const onMouseLeave = (e) => {
    if (imgRef1.current === e.target) setImage1(img_bw1);
    if (imgRef2.current === e.target) setImage2(img_bw2);
  };

  return (
    <div className="container">
      <img
        ref={imgRef1}
        src={img1_src}
        width="480"
        alt="totoro 1"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      ></img>

      <img
        ref={imgRef2}
        src={img2_src}
        width="480"
        alt="totoro 2"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      ></img>
    </div>
  );
}
