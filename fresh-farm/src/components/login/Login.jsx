import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
   const navigate = useNavigate(); 

  const { name, password } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const signin = () => {
    axios
      .post(`${apiUrl}users/signin`, {
        name: name,
        password: password,
      })
      .then((response) => {
        // Handle success
        if (response.status === 200) {
          const data = response.data.data;
          navigate("/home", { state: { userType: data?.userType } });
        }
        console.log("POST request successful:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error making POST request:", error);
      });
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Log in</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={handleChange}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />

          <button
            type="button"
            className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            style={{ color: "white", background: "green" }}
            onClick={signin}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;