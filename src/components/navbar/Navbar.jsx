import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // استدعاء ملف CSS
import logo from "../../assets/image/تنزيل.jfif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // استيراد مكون FontAwesome
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // استيراد الأيقونة التي نريد استخدامها
import { useState } from "react";
import { useSelector } from "react-redux";
const Navbar = () => {

  const navigate=useNavigate()
  const [hr, setHr] = useState("");

  const { cart, product } = useSelector((state) => state.products);
  const getCounterItem = () => {
    let counterItem = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i] > 0) {
        counterItem += cart[i];
      }
    }
    return counterItem;
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <h1>SHOPPER</h1>
      </div>

      <ul className="navbar-menu">
        <li>
          <Link onClick={() => setHr("Shop")} to="/">
            Shop
          </Link>
          {hr === "Shop" ? <hr /> : <></>}
        </li>
        <li>
          <Link onClick={() => setHr("Men")} to="/Men">
            Men
          </Link>
          {hr === "Men" ? <hr /> : <></>}
        </li>
        <li>
          <Link onClick={() => setHr("Women")} to="/Woman">
            Women
          </Link>
          {hr === "Women" ? <hr /> : <></>}
        </li>
        <li>
          <Link onClick={() => setHr("Kids")} to="/Kids">
            Kids
          </Link>
          {hr === "Kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="navbar-auth-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            className="login-btn"
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace('/')
            }}
          >
            Logout
          </button>
        ) : (
          <button className="login-btn" onClick={()=>{navigate("/LoginSingup")}}>
          Login
          </button>
        )}
        <div className="cart-icon">
          <Link to={"/Cart"} className="iconCartCounter">
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="xl"
              style={{ color: "#ffffff" }}
            ></FontAwesomeIcon>
            <p>{getCounterItem()}</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
