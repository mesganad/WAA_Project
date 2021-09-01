import React, { useState } from "react";
//import { useDispatch } from "react-redux";
import axios from "axios";

export const CreateAccount = (props) => {
  //const dispatch = useDispatch();
  const url = "http://localhost:8080/persons/";

  const cleanAccount = {
    personId: "",
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    role: "",
    password: "",
  };

  const [account, setAccount] = useState(cleanAccount);
  const [role, setRole] = useState();

  //validation
  const [nameError, setUsernameError] = useState({});
  const [passwordError, setPasswordError] = useState({});

  const handleCreate = (e) => {
    e.preventDefault();
    account.role = role;
    const isValid = formValidation();
    if (isValid) {
      // dispatch({ type: "create", account: account });

      axios.post(url, account).then((response) => {
        props.history.push("/login", account);
      });
    }
    setAccount(cleanAccount);
  };
  const formValidation = () => {
    const nameErr = {};
    const passwordErr = {};

    let isValid = true;
    if (account.name.trim().length < 5) {
      nameErr.nameShort = "Name should be atleast 5 characters";
      isValid = false;
    }
    if (account.name.trim().length > 10) {
      nameErr.nameShort = "Name should be atmost 10 characters";
      isValid = false;
    }
    if (account.password.trim().length < 5) {
      passwordErr.nameShort = "Password should be atleast 5 characters";
      isValid = false;
    }
    setUsernameError(nameErr);
    setPasswordError(passwordErr);
    return isValid;
  };

  // handleChange
  const handleFieldChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2>Create Account</h2>

      <div>
        <form onSubmit={handleCreate}>
          <table>
            <tr>
              <td> Person Id</td>
              <td>
                <input
                  type="text"
                  id="personId"
                  placeholder="person id"
                  name="personId"
                  value={account.personId}
                  onChange={handleFieldChange}
                />
              </td>
            </tr>

            <tr>
              <td> Username</td>
              <td>
                <input
                  type="text"
                  id="username"
                  placeholder="name"
                  name="name"
                  value={account.name}
                  onChange={handleFieldChange}
                />
                {Object.keys(nameError).map((key) => {
                  return <div style={{ color: "red" }}>{nameError[key]}</div>;
                })}
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="text"
                  id="email"
                  placeholder="email"
                  name="email"
                  value={account.email}
                  onChange={handleFieldChange}
                />
              </td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>
                <input
                  type="text"
                  id="phone"
                  placeholder="phone"
                  name="phone"
                  value={account.phone}
                  onChange={handleFieldChange}
                />
              </td>
            </tr>
            <tr>
              <td>Street</td>
              <td>
                <input
                  type="text"
                  id="street"
                  placeholder="street"
                  name="street"
                  value={account.street}
                  onChange={handleFieldChange}
                />
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <input
                  type="text"
                  id="city"
                  placeholder="city"
                  name="city"
                  value={account.city}
                  onChange={handleFieldChange}
                />
              </td>
            </tr>
            <tr>
              <td>Zip</td>
              <td>
                <input
                  type="text"
                  id="zip"
                  placeholder="zip"
                  name="zip"
                  value={account.zip}
                  onChange={handleFieldChange}
                />
              </td>
            </tr>
            <tr>
              <td>Role</td>
              <td>
                <input
                  type="radio"
                  id="role"
                  value="customer"
                  checked={role === "customer"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Customer
                <input
                  type="radio"
                  id="role"
                  value="employee"
                  checked={role === "employee"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Employee
              </td>
            </tr>

            <tr>
              <td>Password</td>
              <td>
                <input
                  type="text"
                  id="password"
                  placeholder="password"
                  name="password"
                  value={account.password}
                  onChange={handleFieldChange}
                />
                {Object.keys(passwordError).map((key) => {
                  return (
                    <div style={{ color: "red" }}>{passwordError[key]}</div>
                  );
                })}
              </td>
            </tr>
            <br />
            <button type="submit" id="addBtn">
              CreateAccount
            </button>
          </table>
        </form>
      </div>
    </div>
  );
};
