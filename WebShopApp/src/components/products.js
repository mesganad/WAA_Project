import { React, useState } from "react";

import { useSelector } from "react-redux";

export const ProductList = (props) => {
  const products = useSelector((state) => state.products);
  const showCart = useSelector((state) => state.showCart);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const name = e.target.value;
    setSearch(name);
  };

  const handleDetail = (e) => {
    const product = e.target.value;
    props.history.push("/product", product);
  };

  const moveToCart = (e) => {
    props.history.push("/showCart");
  };

  return (
    <div>
      <div id="showCart">
        <h3>cart</h3>
        <p>quantity = {showCart.number}</p>
        <p>amount(Price) = {showCart.amount}</p>
        <button onClick={moveToCart} id="showcart">
          Show cart
        </button>
      </div>
      <h1> Product List</h1>

      <div>
        Search:
        <input
          type="text"
          placeholder="search product"
          name="searchName"
          id="searchName"
          vlaue={search}
          onChange={handleSearch}
        />
      </div>
      <table border="1px">
        <thead>
          <tr>
            <th>Product number</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((product) => product.name.includes(search))
            .map((product) => (
              <tr key={product.productNumber}>
                <td>{product.productNumber}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button onClick={handleDetail} value={product.productNumber}>
                    Detail
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <br />
      <br />
    </div>
  );
};
