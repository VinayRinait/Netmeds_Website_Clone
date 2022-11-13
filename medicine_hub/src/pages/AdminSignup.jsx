import React, { useState } from "react";
import Navbar from "../component/Navbar";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { adminlogin } from "../Redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const AdminSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let initial = {
    email: email,
    password: password,
  };
  const handleSubmit = () => {
    if (email != "") {
      if (password != "") {
        localStorage.setItem("ADMINDATA", JSON.stringify(initial));
        dispatch(adminlogin());
        alert("SignUp Successful...!!");
        navigate("/");
      } else {
        alert("Please Enter The Password");
      }
    } else {
      alert("Please Enter THe Email");
    }
  };
  return (
    <>
      <Navbar />
      <Box>
        <Heading>Admin Sign Up</Heading>
        <FormControl onSubmit={handleSubmit}>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input type={"submit"} />
        </FormControl>
      </Box>
    </>
  );
};

export default AdminSignup;
