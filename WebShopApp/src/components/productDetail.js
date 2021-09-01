import { React, useState } from "react";
import axios from "axios";

export const ProductDetail = (props) => {
  let url = "http://localhost:8080/products/";
  const productInfo = props.location.state.productInfo;

  console.log("product info:", productInfo);

  //get product detail
  //create list for quntitiy

  //const product = productInfo();
  const [product, setProduct] = useState(productInfo);
  console.log(product);
  //validation
  const [productNumberError, setProductNumberError] = useState({});
  const [nameError, setNameError] = useState({});
  const [priceError, setPriceError] = useState({});
  const [quantityError, setQuantityError] = useState({});
  const [descriptionError, setDescriptionError] = useState({});
  console.log(product);

  const handleFieldChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      url += product.productNumber;
      axios.put(url, product).then((response) => {
        props.history.push("/addProduct", { productInfo: product });
      });
    }
  };
  const handleDeleteProduct = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      url += product.productNumber;
      axios.delete(url).then((response) => {
        props.history.push("/addProduct", { productInfo: product });
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

  const moveToProduct = (e) => {
    props.history.push("/addProduct");
  };

  const addQuantity = (e) => {
    e.preventDefault();
    setProduct({ ...product, [e.target.name]: product.quantity + 1 });
    props.history.push("/productDetail", { productInfo: product });
  };
  const subQuantity = (e) => {
    e.preventDefault();
    setProduct({ ...product, [e.target.name]: product.quantity - 1 });
    props.history.push("/productDetail", { productInfo: product });
  };

  return (
    <div>
      <h1> Product Detail</h1>
      <form>
        <div>
          ProductName:
          <input
            type="text"
            name="productNumber"
            id="productNumber"
            value={product.productNumber}
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
          Price:
          <input
            type="text"
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
          {product.quantity}
          <button onClick={addQuantity} name="quantity">
            +
          </button>{" "}
          <button onClick={subQuantity} name="quantity">
            -
          </button>
          {Object.keys(quantityError).map((key) => {
            return <div style={{ color: "red" }}>{quantityError[key]}</div>;
          })}
        </div>
        <div>
          Description:
          <input
            type="text"
            name="description"
            id="description"
            value={product.description}
            onChange={handleFieldChange}
          />
          {Object.keys(descriptionError).map((key) => {
            return <div style={{ color: "red" }}>{descriptionError[key]}</div>;
          })}
        </div>
        <div>
          <button onClick={handleUpdateProduct}>Update</button>
          <button onClick={handleDeleteProduct}>Delete</button>
        </div>
      </form>
      <button onClick={moveToProduct}>Back</button>
      <br />
      <br />
    </div>
  );
};
