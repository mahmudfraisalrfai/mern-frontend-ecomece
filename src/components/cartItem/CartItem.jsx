import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./CartItem.css";
import { removeProduct } from "../../redux/ProductsReducer";
import { postServerData } from "../../helper/Helper";
import { useEffect } from "react";

export default function CartItem() {
  const dispatch = useDispatch();
  const { cart, product } = useSelector((state) => state.products);
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

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i] > 0) {
        let findProduct = product?.find((product) => product.id === Number(i));
        totalAmount +=
          parseFloat(findProduct.new_price.replace("$", "")) * cart[i];
      }
    }
    return totalAmount;
  };

  const handlRemove = (id) => {
    dispatch(removeProduct(id));
  };

  if (!cart || !product) {
    return <p>Loading...</p>;
  }
  return (
    <div className="cartItem">
      {product?.map((e, i) => {
        if (cart[e.id] > 0) {
          const price = parseFloat(e.new_price.replace("$", ""));
          return (
            <div key={e.id}>
              <div className="cartItem-format cartItem-format-main">
                <div className="box">
                  <p>Product</p>
                  <img
                    src={e.image}
                    alt="product image"
                    className="carticon-product-icon"
                  />
                </div>
                <div className="box">
                  <p>Title</p>
                  <p>{e.name}</p>
                </div>
                <div className="box">
                  <p>Price</p>
                  <p>${e.new_price}</p>
                </div>
                <div className="box">
                  <p>Quantity</p>
                  <p>{cart[e.id]}</p>
                </div>
                <div className="box">
                  <p>Total</p>
                  <hr />
                  <p>${(price * cart[e.id]).toFixed(2)}</p>
                </div>
                <div className="box">
                  <p>Remove</p>
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="faXmark"
                    style={{ color: "red" }}
                    size="2x"
                    onClick={() => handlRemove(e.id)}
                  />
                </div>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItem-dwon">
        <div className="cartItem-total">
          <h1>Cart Totals</h1>
        </div>
        <div>
          <div className="cartItem-total-item">
            <p>subtotal</p>
            <p>${Number.parseInt(getTotalAmount())}</p>
          </div>
          <hr />
          <div className="cartItem-total-item">
            <p>Shiping Free</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartItem-total-item">
            <h3>Total</h3>
            <p>${Number.parseInt(getTotalAmount())}</p>
          </div>

          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItems-promocode">
          <p>If You Have a Promo Code , Enter It Hare </p>
          <div className="cartItems-promo-box">
            <input type="text" placeholder="Promo Code" name="" id="" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
