import { React, useState } from "react";

export const ProductStore = (props) => {
  const products = props.location.state.products;
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    const name = e.target.value;
    setSearch(name);
  };

  const handleDetail = (e) => {
    const productNum = e.target.value;
    const productInfo = products.find((p) => p.productNumber === productNum);
    console.log(productInfo);
    props.history.push("/productDetail", { productInfo: productInfo });
  };

  return (
    <div>
      <h1> Product List</h1>

      <div>
        <input
          type="text"
          placeholder="search Product"
          name="searchName"
          id="searchName"
          vlaue={search}
          onChange={handleSearch}
        />
      </div>
      <table border="1px">
        <thead>
          <tr>
            <th>productNumber</th>
            <th>Name</th>
            <th>Price</th>
            <th>quantity</th>
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
