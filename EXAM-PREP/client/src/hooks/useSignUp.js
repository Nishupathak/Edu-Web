/* eslint-disable no-undef */
import { useState } from "react";
import { message } from "antd";

const useSignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const registerUser = async (value) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await res.json();
      if (res.status === 201) {
        message.success(data.message);
      } else if (res.status === 400) {
        setError("User already exists");
      } else {
        setError("Registration Failed");
      }
    } catch (error) {
      message.error(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, registerUser };
};

export default useSignUp;
