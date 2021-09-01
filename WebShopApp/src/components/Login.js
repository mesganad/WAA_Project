import React, { useState } from "react";
import axios from "axios";

//import { useSelector } from "react-redux";

export const Login = (props) => {
  //const dispatch = useDispatch();

  const cleanAccount = { name: "", password: "", role: "" };
  const [account, setAccount] = useState(cleanAccount);

  const authenticate = (e) => {
    e.preventDefault();

    console.log(account.name);
    let url = "http://localhost:8080/persons/" + account.name;
    axios.get(url).then((response) => {
      let accountInfo = response.data;

      if (
        accountInfo.name === account.name &&
        accountInfo.password === account.password &&
        accountInfo.role === "customer"
      ) {
        props.history.push("/welcome");
      } else if (
        accountInfo.name === account.name &&
        accountInfo.password === account.password &&
        accountInfo.role === "employee"
      ) {
        props.history.push("/addProduct");
      } else {
        props.history.push("/");
      }
    });
  };

  const register = () => {
    props.history.push("/createAccount");
  };
  // handleChange
  const handleFieldChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Welcome to Online Shopping</h1>
      <h2 id="loginText">Login</h2>

      <div>
        <form onSubmit={authenticate}>
          <table>
            <tr>
              <td>User name</td>
              <td>
                <input
                  type="text"
                  id="username"
                  placeholder="name"
                  name="name"
                  value={account.name}
                  onChange={handleFieldChange}
                />
              </td>
            </tr>
            <tr>
              <td> Password </td>
              <td>
                <input
                  type="text"
                  id="password"
                  placeholder="password"
                  name="password"
                  value={account.password}
                  onChange={handleFieldChange}
                />
              </td>
            </tr>
            <tr>
              <td>Role</td>
              <td>
                <input
                  type="text"
                  id="role"
                  placeholder="role"
                  name="role"
                  value={account.role}
                  onChange={handleFieldChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit" id="loginBtn">
                  Login
                </button>
              </td>

              <td>
                <button onClick={register} id="create">
                  CreateAccount
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};
