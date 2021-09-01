import { React } from "react";

export const Confirm = (props) => {
  const orderNumber = props.location.state.orderNumber;
  const name = props.location.state.name;
  return (
    <div id="confirm">
      <h1> Thank you for your order {name}</h1>
      <h3>Here is your order number: {orderNumber}</h3>
    </div>
  );
};
