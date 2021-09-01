import { React, useState } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";

export const AddUser = (props) => {
  const url = "http://localhost:8080/users/";
  const cleanUser = { name: "", gender: "", profession: "" };
  const [user, setUser] = useState(cleanUser);

  //validation
  const [namenError, setNameError] = useState({});
  const [genderError, setGenderError] = useState({});
  const [professionError, setProfessionError] = useState({});

  //   const dispatch = useDispatch();
  const handleFieldChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleAddUser = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      //   dispatch({ type: "addUser", user: user });
      axios.post(url, user).then((response) => {
        props.history.push("/");
      });
    }
  };

  const formValidation = () => {
    const nameErr = {};
    const genderErr = {};
    const professionErr = {};
    let isValid = true;
    if (user.name.trim().length < 2) {
      nameErr.nameShort = "name is too short";
      isValid = false;
    }
    if (user.name.trim().length > 10) {
      nameErr.nameLong = "name is too long";
      isValid = false;
    }

    if (user.gender.trim().length === 0) {
      genderErr.genderEmpty = "Gender has to be selected";
      isValid = false;
    }
    if (user.profession.trim().length === 0) {
      professionErr.professionEmpty = "Profession has to be selected";
      isValid = false;
    }
    setNameError(nameErr);
    setGenderError(genderErr);
    setProfessionError(professionErr);
    return isValid;
  };

  const userForm = (
    <div>
      <h3>Add User</h3>
      <form>
        <div>
          Name:
          <input
            type="text"
            placeholder="enter name"
            name="name"
            id="username"
            value={user.name}
            onChange={handleFieldChange}
          />
          {Object.keys(namenError).map((key) => {
            return <div style={{ color: "red" }}>{namenError[key]}</div>;
          })}
        </div>
        <div>
          Gender
          <input
            type="radio"
            name="gender"
            id="gender"
            value="Male"
            checked={user.gender === "Male"}
            onChange={handleFieldChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            id="gender2"
            checked={user.gender === "Female"}
            onChange={handleFieldChange}
          />
          Female
          {Object.keys(genderError).map((key) => {
            return <div style={{ color: "red" }}>{genderError[key]}</div>;
          })}
        </div>
        <div>
          Profession     
          <select
            name="profession"
            placeholder="profession"
            value={user.profession}
            id="profession"
            onChange={handleFieldChange}
          >
            <option></option>
            <option>programmer</option>
            <option>architect</option>
          </select>
          {Object.keys(professionError).map((key) => {
            return <div style={{ color: "red" }}>{professionError[key]}</div>;
          })}
        </div>
        <button id="addBtn" onClick={handleAddUser}>
          Add User
        </button>
      </form>
    </div>
  );
  return userForm;
};
