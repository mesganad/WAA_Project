import { React } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
export const PlaceOrder = (props) => {
  const url = "http://localhost:8080/orders/";
  const orderNumber = Math.floor(Math.random() * 100000);
  const customer = props.location.state.customer;
  const account = props.location.state.account;

  console.log(customer);
  const cartList = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.showCart);
  customer.account = [account];
  customer.shoppingCart = { products: cartList };
  customer.role = "";
  customer.password = "";

  const order = {
    orderId: orderNumber,
    customer: customer,
    orderStatus: "PLACED",
  };

  const confirmOrder = (e) => {
    axios.post(url, order).then((response) => {
      props.history.push("/confirm", {
        orderNumber: orderNumber,
        name: customer.name,
      });
    });
  };

  return (
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
      <div>
        <p>Quantity {showCart.number}</p>
        <p>Amount {showCart.amount}</p>
      </div>
      <div id="custDetails">
        <h3>Customer Detail</h3>
        <p> Cusomer ID:{customer.customerId}</p>
        <p> Cusomer Name:{customer.name}</p>
        <p>Cusomer Email:{customer.email}</p>
        <p>Cusomer Phone:{customer.phone}</p>
        <p>Cusomer Street:{customer.street}</p>
        <p>Cusomer City:{customer.city}</p>
        <p>Cusomer Zip:{customer.zip}</p>
      </div>

      <div>
        <h3>Account Detail</h3>
        <p>Card Type :{account.cardType}</p>
        <p> Account Number:{account.accountNumber}</p>
        <p> Expired Date:{account.expDate}</p>
        <p> Code Validation:{account.codeValidation}</p>
      </div>
      <button onClick={confirmOrder}>Confirm</button>
    </div>
  );
};
