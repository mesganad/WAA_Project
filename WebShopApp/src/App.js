import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  ProductList,
  ShowCart,
  ProductDetail,
  AddProduct,
  ProductStore,
  Product,
  Checkout,
  PlaceOrder,
  Confirm,
  Welcome,
  Login,
  CreateAccount,
  SearchOrder,
} from "./components/index";

import "./App.css";

function App() {
  return (
    <center>
      <div>
        <Router>
          <Route exact path={["/", "/login"]} component={Login} />
          <Route path="/products" component={ProductList} />
          <Route path="/productDetail" component={ProductDetail} />
          <Route path="/product" component={Product} />
          <Route path="/showCart" component={ShowCart} />
          <Route path="/addProduct" component={AddProduct} />
          <Route path="/productStore" component={ProductStore} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/placeOrder" component={PlaceOrder} />
          <Route path="/confirm" component={Confirm} />
          <Route path="/createAccount" component={CreateAccount} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/searchOrder" component={SearchOrder} />
        </Router>
      </div>
    </center>
  );
}

export default App;
