import React, { useEffect, useState } from "react";
import "./ProductCard.css"; // استيراد ملف الـ CSS
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/ProductsReducer";
import { postServerData } from "../../helper/Helper";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.products);
  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      const headers = { "auth-token": localStorage.getItem("auth-token") };
      postServerData(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/api/updatCard`,
        (data) => data,
        cart,
        headers
      );
    }
  }, [cart]);

  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  const handlAddCart = () => {
    dispatch(addProduct(product.id));
    window.alert("The product has been added to the cart");
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="price-section">
          <span className="new-price">{product.new_price}</span>
          <span className="old-price">{product.old_price}</span>
        </div>
        <div className="stars-section">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={index < product.stars ? "filled-star" : "empty-star"}
            >
              &#9733;
            </span>
          ))}
        </div>
        <div className="size-section">
          <p>Select Size:</p>
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? "selected" : ""}`}
              onClick={() => handleSizeChange(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <button className="add-to-cart-btn" onClick={handlAddCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
