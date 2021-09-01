import { React, useState } from "react";
import axios from "axios";

export const AddProduct = (props) => {
  let url = "http://localhost:8080/products/";
  const cleanProduct = {
    productNumber: "",
    name: "",
    price: "",
    quantity: "",
    description: "",
  };

  const [search, setSearch] = useState({
    orderId:"",
    orderStatus:""
  });

  const [product, setProduct] = useState(cleanProduct);
  //validation
  const [productNumberError, setProductNumberError] = useState({});
  const [nameError, setNameError] = useState({});
  const [priceError, setPriceError] = useState({});
  const [quantityError, setQuantityError] = useState({});
  const [descriptionError, setDescriptionError] = useState({});

  const handleFieldChangeSearch = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleFieldChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const moveToProductsStore = (e) => {
    axios.get(url).then((response) => {
      props.history.push("/productStore", { products: response.data.products });
    });
  };

  const handleSearchOrder = (e) => {
   e.preventDefault();
    url = "http://localhost:8080/orders/"+search.orderStatus;
    axios.get(url).then((response) => {
      const order=response.data.orders.find(ord=>ord.orderId===search.orderId);
      props.history.push("/searchOrder", order);
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      axios.post(url, product).then((response) => {
        props.history.push("/addProduct");
        setProduct(cleanProduct);
      });
    }
  };

  const formValidation = () => {
    const nameErr = {};
    const priceErr = {};
    const productNumberErr = {};
    const quantityErr = {};
    const descriptionErr = {};

    let isValid = true;
    if (product.name.trim().length < 2) {
      nameErr.nameShort = "name is too short";
      isValid = false;
    }
    if (product.name.trim().length > 10) {
      nameErr.nameLong = "name is too long";
      isValid = false;
    }
    let num = parseFloat(product.price);
    if (num <= 0) {
      priceErr.priceWrong = "Produt price should be greater than zero (0)";
      isValid = false;
    }
    num = parseFloat(product.quantity);
    if (num <= 0) {
      quantityErr.productQuntity =
        "Produt Quntity should be greater than zero (0)";
      isValid = false;
    }

    if (product.productNumber.trim().length !== 5) {
      productNumberErr.productNumberEmpty =
        "ProductNumber has to be 5 charaters";
      isValid = false;
    }
    if (product.description.trim().length === 0) {
      descriptionErr.productDescEmpty = "Product does not has description";
      isValid = false;
    }
    setNameError(nameErr);
    setPriceError(priceErr);
    setProductNumberError(productNumberErr);
    setQuantityError(quantityErr);
    setDescriptionError(descriptionErr);
    return isValid;
  };

  const productForm = (
    <div>
      <h3>Add Product</h3>
      <form>
        <div>
          Product Number:
          <input
            type="text"
            placeholder="product Number"
            name="productNumber"
            id="productNumber"
            value={product.productNumber}
            onChange={handleFieldChange}
          />
          {Object.keys(productNumberError).map((key) => {
            return (
              <div style={{ color: "red" }}>{productNumberError[key]}</div>
            );
          })}
        </div>
        <div>
          Name:
          <input
            type="text"
            placeholder="enter name"
            name="name"
            id="name"
            value={product.name}
            onChange={handleFieldChange}
          />
          {Object.keys(nameError).map((key) => {
            return <div style={{ color: "red" }}>{nameError[key]}</div>;
          })}
        </div>
        <div>
          price:
          <input
            type="text"
            placeholder="enter name"
            name="price"
            id="price"
            value={product.price}
            onChange={handleFieldChange}
          />
          {Object.keys(priceError).map((key) => {
            return <div style={{ color: "red" }}>{priceError[key]}</div>;
          })}
        </div>

        <div>
          Quantity:
          <input
            type="text"
            placeholder="enter name"
            name="quantity"
            id="quantity"
            value={product.quantity}
            onChange={handleFieldChange}
          />
          {Object.keys(quantityError).map((key) => {
            return <div style={{ color: "red" }}>{quantityError[key]}</div>;
          })}
        </div>
        <div>
          Description:
          <input
            type="text"
            placeholder="enter name"
            name="description"
            id="description"
            value={product.description}
            onChange={handleFieldChange}
          />
          {Object.keys(descriptionError).map((key) => {
            return <div style={{ color: "red" }}>{descriptionError[key]}</div>;
          })}
        </div>
        <button id="addBtn" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>

      <div>
        <h3>Order Search </h3>
        <form onSubmit={handleSearchOrder}>
      <div>
          Order Id:
          <input
            type="text"
            placeholder="order id"
            name="orderId"
            id="orderId"
            required
            value={search.orderId}
            onChange={handleFieldChangeSearch}/>
            </div>
            <div>
            Order Status:     
            <select
              name="orderStatus"
              value={search.orderStatus}
              id="orderStatus"
              onChange={handleFieldChangeSearch}
            >
              <option> </option>
              <option value="PLACED" selected>PLACED</option>
              <option value="SHIPPED">SHIPPED</option>
              <option value="DELIVERED">DELIVERED</option>
            </select>
          </div>
          <div>
          <input type="submit" value="Search Order"/>
            </div>
          </form>
      </div>
      <br/>
      <div>
      <button id="showProductStore" onClick={moveToProductsStore}>
        Show Products
      </button>
      </div>
    </div>
  );
  return productForm;
};
