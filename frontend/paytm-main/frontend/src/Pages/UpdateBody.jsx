import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

import axios from "axios";
function UpdateBody() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUpdate = async () => {
    if (firstName && lastName && password) {
      //body
      await axios.put(
        "http://localhost:3000/api/v1/user/",
        {
          firstName,
          lastName,
          password,
        },
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      navigate("/dashboard");
    } else {
      setError("Please fill the input");
    }
  };
  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Update"} />
            <SubHeading label={"Update your credentials"} />
            <InputBox
              placeholder="First Name"
              label={"First name"}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <InputBox
              placeholder="Last Name"
              label={"Last name"}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
            <InputBox
              placeholder="123456"
              label={"Password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {error && (
              <div className="mt-2 text-red-600 font-medium text-sm">
                {error}
              </div>
            )}
            <div className="pt-4">
              <Button label={"Change"} onClick={handleUpdate} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateBody;
