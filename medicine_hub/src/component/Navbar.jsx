import React from "react";
import styled from "styled-components";
// import Link from "react-router-dom";
import { Input, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
export const Nav = styled.div`
  height: 100px;
  width: 100%;
  background: #24aeb1;
  display: flex;
  gap: 30px;
  padding: 10px;
  padding-top: 22px;
`;

export const Searchdiv = styled.div`
  height: 52px;
  width: 695px;
  display: flex;
  background: white;
  padding-left: 20px;
  padding-top: 3px;
  border-radius: 7px;
`;
const Navbar = () => {
  return (
    <>
      <Nav>
        <img
          width="198px"
          //   style={{ marginTop: "8px" }}
          //   height="150px"
          src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg"
          alt="NetMeds"
        />

        <Searchdiv>
          <span style={{ paddingTop: "5px", color: "grey" }}>
            Deliver to <span style={{ color: "#24AEB1" }}>411100</span> |
          </span>
          <Input
            variant="styled"
            width="330px"
            placeholder="Search for medicine & wellness products…"
          />
        </Searchdiv>
        <Box display={"flex"} color={"white"} pt={3}>
          <img
            src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg"
            alt=""
          />
          <b>Upload</b>
        </Box>
        <Box display={"flex"} color={"white"} pr={2} pt={4}>
          <Box
            bg={"#F757A4"}
            ml={6}
            mt={-2}
            mr={-9}
            width={5}
            textAlign={"center"}
            height={4}
            fontSize={"x-small"}
            rounded={"md"}
          >
            Count
          </Box>
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ width: "25px", height: "17px" }}
          />
          <b style={{ marginLeft: "3px" }}>Cart</b>
        </Box>
        <Box display={"flex"} width={180} color={"white"} pr={35} pt={3}>
          <FontAwesomeIcon
            icon={faCircleUser}
            style={{ width: "25px", height: "20px", marginTop: "4px" }}
          />
        </Box>
      </Nav>
    </>
  );
};

export default Navbar;
