import { React } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
export const Welcome = (props) => {
  const url = "http://localhost:8080/products/";
  const dispatch = useDispatch();
  const moveToProductsStore = (e) => {
    axios.get(url).then((response) => {
      console.log("products from DB", response.data.products);
      dispatch({ type: "addProducts", products: response.data.products });
      props.history.push("/products");
    });
  };
  return (
    <div id="confirm">
      <h1> Welcome</h1>
      <div>
        <button id="showProductStore" onClick={moveToProductsStore}>
          Show Products
        </button>
      </div>
    </div>
  );
};
