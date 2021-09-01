import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const Product = (props) => {
  const productNumber = props.location.state;
  const showCart = useSelector((state) => state.showCart);
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  //get product detail
  const productInfo = products.find((p) => p.productNumber === productNumber);
  //create list for quntitiy
  const selectList = () => {
    const opt = [];
    for (let i = 1; i <= productInfo.quantity; i++) {
      opt.push(i);
    }
    return opt;
  };
  //const product = productInfo();
  const [product, setProduct] = useState(productInfo);
  const quantity = selectList();
  console.log(product);

  const handleAdd = () => {
    dispatch({ type: "addToCart", product: product });
    props.history.push("/product", productNumber);
  };

  const handleFieldChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const moveToProducts = (e) => {
    props.history.push("/products");
  };

  const moveToCart = (e) => {
    props.history.push("/showCart");
  };

  return (
    <div>
      <div id="showCart">
        <h3>Cart</h3>
        <p>Quantity {showCart.number}</p>
        <p>Amount {showCart.amount}</p>
        <button onClick={moveToCart}>Show cart</button>
      </div>

      <h1> Product Detail</h1>
      <table border="1px">
        <thead>
          <tr>
            <th>productNumber</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            <tr key={product.productNumber}>
              <td>{product.productNumber}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <select
                  name="quantity"
                  value={product.quantity}
                  onChange={handleFieldChange}
                >
                  {quantity.map((num) => (
                    <option value={num}>{num}</option>
                  ))}
                </select>{" "}
              </td>
              <td>{product.description}</td>
              <td>
                <button onClick={handleAdd}>Add to cart</button>
                <button onClick={moveToProducts}>Back</button>
              </td>
            </tr>
          }
        </tbody>
      </table>
      <br />
      <br />
    </div>
  );
};
