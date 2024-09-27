import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrum from "../../components/breadcrum/Breadcrum";
import "./Product.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import DescriptionBox from "../../components/descriptionBox/DescriptionBox";
import RelatedProducts from "../../components/relatedProducts/RelatedProducts";
export default function Product() {
  const { product } = useSelector((state) => state.products);
  const { ProductId } = useParams();

  const requiredProduct = product.find((el) => el.id === Number(ProductId));
  return (
    <div className="Product-container">
      <Breadcrum product={requiredProduct} />
      <ProductCard product={requiredProduct} />
      <DescriptionBox objComments={requiredProduct?.comments} />
      <RelatedProducts product={product} category={requiredProduct.category} />
    </div>
  );
}
