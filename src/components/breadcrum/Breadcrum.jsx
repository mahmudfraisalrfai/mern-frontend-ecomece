import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Breadcrum({ product }) {
  return (
    <div>
      Home {<FontAwesomeIcon icon={faAngleRight} />} Shop{" "}
      {<FontAwesomeIcon icon={faAngleRight} />} {product?.category}{" "}
      {<FontAwesomeIcon icon={faAngleRight} />} {product?.name}
    </div>
  );
}
