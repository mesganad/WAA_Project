import { React } from "react";
import { useSelector, useDispatch } from "react-redux";

export const ShowCart = (props) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.showCart);

  const handleDetail = (e) => {
    const productNum = e.target.value;
    props.history.push("/product", productNum);
  };

  const handleRemove = (e) => {
    const productNumber = e.target.value;
    const productInfo = cartList.find((p) => p.productNumber === productNumber);
    console.log(productInfo);
    dispatch({ type: "removeCart", product: productInfo });
    props.history.push("/showCart");
  };

  const navivgate = (e) => {
    const path = e.target.value;
    props.history.push("/" + path);
  };

  return (
    <div>
      <h1> Cart List</h1>
      <table border="1px">
        <thead>
          <tr>
            <th>ProductNumber</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((product) => (
            <tr key={product.productNumber}>
              <td>{product.productNumber}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={handleDetail} value={product.productNumber}>
                  Detail
                </button>
                <button onClick={handleRemove} value={product.productNumber}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Quantity: {showCart.number}</p>
      <p>Amount: {showCart.amount}</p>
      <button onClick={navivgate} value="checkout">
        Check out
      </button>
      <button onClick={navivgate} value="products">
        Store
      </button>
      <br />
      <br />
    </div>
  );
};
