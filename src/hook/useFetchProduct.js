import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startExamAction } from "../redux/ProductsReducer";
import { getcartData, getServerData } from "../helper/Helper";

export const useFetchProduct = () => {
  const dispatch = useDispatch();
  const [getProduct, setGetProduct] = useState({
    isload: false,
    api: [],
    serverError: false,
  });

  useEffect(() => {
    // دالة async منفصلة لتحميل البيانات
    const fetchData = async () => {
      setGetProduct((prev) => ({ ...prev, isload: true }));
      try {
        const products = await getServerData(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/api/product`,
          (data) =>
            data[0].products.map((e) => {
              return {
                ...e,
                image: process.env.REACT_APP_SERVER_HOSTNAME + e.image,
              };
            })
        );
        if (products.length > 0) {
          let cartData = Array(products.length + 1).fill(0);
          if (localStorage.getItem("auth-token")) {
            const headers = {
              "auth-token": localStorage.getItem("auth-token"),
            };
            cartData = await getcartData(
              `${process.env.REACT_APP_SERVER_HOSTNAME}/api/updatCard`,
              (data) => data,
              headers
            );
          }
          setGetProduct((prev) => ({ ...prev, isload: false }));
          setGetProduct((prev) => ({ ...prev, api: products }));
          dispatch(startExamAction({ products, cartData }));
        } else {
          throw new Error("Products not valid");
        }
      } catch (error) {
        setGetProduct((prev) => ({ ...prev, isload: false }));
        setGetProduct((prev) => ({ ...prev, serverError: false }));
      }
    };

    // استدعاء دالة fetchData
    fetchData();
  }, [dispatch]);

  return [getProduct, setGetProduct];
};
