import { createStore } from "redux";

const productList = [
  {
    productNumber: "111",
    name: "apple",
    price: 2000,
    description: "apple products",
    quantity: 3,
  },
  {
    productNumber: "222",
    name: "mobile",
    price: 100,
    description: "mobile products",
    quantity: 2,
  },
  {
    productNumber: "333",
    name: "car",
    price: 4500,
    description: "car products",
    quantity: 1,
  },
];

const productReducer = (
  state = {
    products: productList,
    cart: [],
    showCart: { number: 0, amount: 0 },
    accountList: [],
  },
  action
) => {
  // task
  const handelRemove = () => {
    const product = state.cart.find(
      (p) => p.productNumber === action.product.productNumber
    );
    if (product) {
      state.cart = state.cart.filter(
        (p) => p.productNumber !== action.product.productNumber
      );
      console.log(product);
      const quntity = parseInt(product.quantity);
      const price = parseFloat(product.price);
      state.showCart.number -= quntity;
      state.showCart.amount -= quntity * price;
    }
  };
  if (action.type === "addToCart") {
    handelRemove();
    const quntity = parseInt(action.product.quantity);
    const price = parseFloat(action.product.price);
    state.showCart.number += quntity;
    state.showCart.amount += quntity * price;
    return {
      cart: state.cart.concat(action.product),
      products: state.products,
      showCart: state.showCart,
    };
  }
  if (action.type === "removeCart") {
    handelRemove();
    return {
      cart: state.cart,
      products: state.products,
      showCart: state.showCart,
    };
  }

  if (action.type === "addProducts") {
    return {
      cart: state.cart,
      products: action.products,
      showCart: state.showCart,
    };
  }

  if (action.type === "create") {
    return {
      accountList: state.accountList.concat(action.account),
      cart: state.cart,
      products: action.products,
      showCart: state.showCart,
    };
  }

  return state;
};

const store = createStore(productReducer);
export default store;
