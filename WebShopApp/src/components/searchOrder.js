import { React, useState } from "react";
import axios from "axios";
export const SearchOrder = (props) => {
  let url = "http://localhost:8080/orders/";
  const order = props.location.state;
  const cartList = order.customer.shoppingCart.products;
  const cleanAccount = order.customer.account[0];
  const [account, setAccount] = useState(cleanAccount);
  const cleanCustomer = order.customer;
  const [customer, setCustomer] = useState(cleanCustomer);
  const [orderStatus, setOrderStatus] = useState(order.orderStatus);
  console.log(orderStatus);

  //validation
  const [personIdError, setCustomerNumberError] = useState({});
  const [nameError, setNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [phoneError, setPhoneError] = useState({});
  const [streetError, setStreetError] = useState({});
  const [cityError, setCityError] = useState({});
  const [zipError, setZipError] = useState({});
  const [cartTypeError, setCartTypeError] = useState({});
  const [accountNumberError, setAccountNumberError] = useState({});
  const [expDateError, setExpDateError] = useState({});
  const [codeValidationError, setCodeValidationError] = useState({});

  //const dispatch = useDispatch();
  const handleFieldChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleFieldChangeAccount = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const navivgate = (e) => {
    const path = e.target.value;
    props.history.push("/" + path);
  };

  const handleUpdateOrder = (e) => {
    url += order.orderId;
    let updatedCustomer = customer;
    updatedCustomer.account = [account];
    updatedCustomer.shoppingCart.products = cartList;
    updatedCustomer.role = "";
    updatedCustomer.password = "";
    let updatedOrder = {
      orderId: order.orderId,
      orderStatus: orderStatus,
      customer: updatedCustomer,
    };
    console.log(updatedOrder);
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      axios.put(url, updatedOrder).then((response) => {
        props.history.push("/addProduct");
      });
    }
  };

  const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    const personIdErr = {};
    const phoneErr = {};
    const streetErr = {};
    const cityErr = {};
    const zipErr = {};
    const cardTypeErr = {};
    const accountNumberErr = {};
    const expDateErr = {};
    const codeValidationErr = {};

    let isValid = true;
    if (customer.personId.trim().length !== 5) {
      personIdErr.Iderror = "Cusomer ID must be  5 Character";
      isValid = false;
    }
    if (customer.name.trim().length < 2) {
      nameErr.nameShort = "name is too short";
      isValid = false;
    }
    if (customer.name.trim().length > 10) {
      nameErr.nameLong = "name is too long";
      isValid = false;
    }

    if (customer.email.trim().length < 7) {
      emailErr.emailWrong = "email should be greater than 7 characters";
      isValid = false;
    }
    if (customer.phone.trim().length !== 8) {
      personIdErr.phoneErr = "Phone number has to be 8 digit";
      isValid = false;
    }
    if (customer.street.trim().length === 0) {
      streetErr.streetEmpty = "Customer does not has street";
      isValid = false;
    }
    if (customer.street.trim().length === 0) {
      streetErr.streetEmpty = "Customer does not has street";
      isValid = false;
    }
    if (customer.city.trim().length === 0) {
      cityErr.cityEmpty = "Customer does not has city";
      isValid = false;
    }
    if (customer.zip.trim().length === 0) {
      zipErr.zipEmpty = "Customer does not has city";
      isValid = false;
    }
    if (account.cardType.trim().length === 0) {
      cardTypeErr.cardEmpty = "Card type is not selected!";
      isValid = false;
    }
    if (account.accountNumber.trim().length !== 12) {
      accountNumberErr.accEmpty = "Card is not Valid it must has 12 digit only";
      isValid = false;
    }
    if (account.expDate.trim().length === 0) {
      expDateErr.dateEmpty = " Exp Date is not selected!";
      isValid = false;
    }
    if (account.codeValidation.trim().length !== 3) {
      codeValidationErr.codeEmpty = "Code Validation must be 3 digit";
      isValid = false;
    }

    setNameError(nameErr);
    setEmailError(emailErr);
    setCustomerNumberError(personIdErr);
    setPhoneError(phoneErr);
    setStreetError(streetErr);
    setCityError(cityErr);
    setZipError(zipErr);
    setCartTypeError(cardTypeErr);
    setAccountNumberError(accountNumberErr);
    setExpDateError(expDateErr);
    setCodeValidationError(codeValidationErr);
    return isValid;
  };

  const orderForm = (
    <div>
      <div>
        <h1> Cart List</h1>
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
            {cartList.map((product) => (
              <tr key={product.productNumber}>
                <td>{product.productNumber}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <div>
        <h3>Order Status</h3>    
        <select
          name="orderStatus"
          value={order.orderStatus}
          id="orderStatus"
          onChange={(e) => {
            setOrderStatus(e.target.value);
          }}
        >
          <option value="PLACED" selected>
            PLACED
          </option>
          <option value="SHIPPED">SHIPPED</option>
          <option value="DELIVERED">DELIVERED</option>
        </select>
      </div>

      <form>
        <div>
          <h3>Customer Detail</h3>
          <div>
            Customer ID:
            <input
              type="text"
              placeholder="customer Id"
              name="personId"
              id="personId"
              value={customer.personId}
              onChange={handleFieldChange}
            />
            {Object.keys(personIdError).map((key) => {
              return <div style={{ color: "red" }}>{personIdError[key]}</div>;
            })}
          </div>
          <div>
            Name:
            <input
              type="text"
              placeholder="enter name"
              name="name"
              id="name"
              value={customer.name}
              onChange={handleFieldChange}
            />
            {Object.keys(nameError).map((key) => {
              return <div style={{ color: "red" }}>{nameError[key]}</div>;
            })}
          </div>
          <div>
            email:
            <input
              type="text"
              placeholder="enter email"
              name="email"
              id="email"
              value={customer.email}
              onChange={handleFieldChange}
            />
            {Object.keys(emailError).map((key) => {
              return <div style={{ color: "red" }}>{emailError[key]}</div>;
            })}
          </div>

          <div>
            Phone:
            <input
              type="text"
              placeholder="enter phone"
              name="phone"
              id="phone"
              value={customer.phone}
              onChange={handleFieldChange}
            />
            {Object.keys(phoneError).map((key) => {
              return <div style={{ color: "red" }}>{phoneError[key]}</div>;
            })}
          </div>
          <div>
            Street:
            <input
              type="text"
              placeholder="enter street"
              name="street"
              id="street"
              value={customer.street}
              onChange={handleFieldChange}
            />
            {Object.keys(streetError).map((key) => {
              return <div style={{ color: "red" }}>{streetError[key]}</div>;
            })}
          </div>
          <div>
            City:
            <input
              type="text"
              placeholder="enter city"
              name="city"
              id="city"
              value={customer.city}
              onChange={handleFieldChange}
            />
            {Object.keys(cityError).map((key) => {
              return <div style={{ color: "red" }}>{cityError[key]}</div>;
            })}
          </div>
          <div>
            Zip:
            <input
              type="text"
              placeholder="enter zip"
              name="zip"
              id="zip"
              value={customer.zip}
              onChange={handleFieldChange}
            />
            {Object.keys(zipError).map((key) => {
              return <div style={{ color: "red" }}>{zipError[key]}</div>;
            })}
          </div>
        </div>
        <div>
          <h3>Account Detail</h3>
          <div>
            Card Type:     
            <select
              name="cardType"
              value={account.cardType}
              id="cardType"
              onChange={handleFieldChangeAccount}
            >
              <option></option>
              <option value="MasterCard">MasterCard</option>
              <option value="Visa">Visa</option>
            </select>
            {Object.keys(cartTypeError).map((key) => {
              return <div style={{ color: "red" }}>{cartTypeError[key]}</div>;
            })}
          </div>
          <div>
            Account Number:
            <input
              type="text"
              placeholder="1234 5678 9012"
              name="accountNumber"
              id="accountNumber"
              value={account.accountNumber}
              onChange={handleFieldChangeAccount}
            />
            {Object.keys(expDateError).map((key) => {
              return <div style={{ color: "red" }}>{expDateError[key]}</div>;
            })}
          </div>
          <div>
            Expired Date:
            <input
              type="date"
              placeholder="1234 5678 9012"
              name="expDate"
              id="expDate"
              value={account.expDate}
              onChange={handleFieldChangeAccount}
            />
            {Object.keys(accountNumberError).map((key) => {
              return (
                <div style={{ color: "red" }}>{accountNumberError[key]}</div>
              );
            })}
          </div>
          <div>
            Code Validation:
            <input
              type="text"
              placeholder="back side code (123)"
              name="codeValidation"
              id="codeValidation"
              value={account.codeValidation}
              onChange={handleFieldChangeAccount}
            />
            {Object.keys(codeValidationError).map((key) => {
              return (
                <div style={{ color: "red" }}>{codeValidationError[key]}</div>
              );
            })}
          </div>
        </div>
        <button id="addBtn" onClick={handleUpdateOrder}>
          Update Order
        </button>
      </form>
    </div>
  );
  return orderForm;
};
