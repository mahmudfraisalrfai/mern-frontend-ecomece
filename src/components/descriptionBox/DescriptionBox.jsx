import React from "react";
import "./DescriptionBox.css";
import Comments from "../comments/Comments";
export default function DescriptionBox({ objComments }) {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigetor">
        <Comments objComments={objComments} />
      </div>
      <div className="descriptionBox-description">
        <div className="descriptionBox-nav-box">Description</div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          veritatis distinctio dicta, optio numquam omnis voluptatibus
          consequatur inventore odit minima, consequuntur quos, sed libero ab!
          Temporibus itaque totam praesentium soluta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta commodi
          in, numquam ducimus a incidunt sapiente expedita nobis minima quasi.
          At quae quidem illum explicabo quod corporis accusamus minima facere.
        </p>
      </div>
    </div>
  );
}
