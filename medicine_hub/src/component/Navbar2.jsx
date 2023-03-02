import styled from "styled-components";
import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navv = styled.div`
  height: 60px;
  width: 100%;
  background: #24aeb1;
  color: #ffffffcc;
  display: flex;
  justify-content: space-around;
  padding: 0px;
  @media screen and (max-width: 768px) {
    // display: none;
  }
`;
const Navv2 = styled.div`
  height: 60px;
  width: 100%;
  background: #24aeb1;
  color: #ffffffcc;
  display: flex;
  justify-content: space-around;
  padding: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Navbar2 = () => {
  const adminn = useSelector((state) => state.isAuth2);
  console.log(adminn, "navvv222");
  return (
    <>
      <Navv style={{ paddingLeft: "100px", paddingRight: "100px" }}>
        <Box>
          <Menu>
            {({ isOpen }) => (
              <React.Fragment>
                <Link to="/wellness/covidEssentials">
                  <MenuButton bg={"#24AEB1"} as={Button}>
                    Medicines
                    <ChevronDownIcon />
                  </MenuButton>
                </Link>

                <MenuList>
                  <MenuItem color={"black"}>All Medicines </MenuItem>
                  <MenuItem color={"black"}>
                    Previously Ordered Products
                  </MenuItem>
                </MenuList>
              </React.Fragment>
            )}
          </Menu>
        </Box>
        <Link
          to="/wellness/covidEssentials"
          style={{ fontWeight: "500", paddingTop: "7px" }}
        >
          Wellness
        </Link>

        <Box>
          <Menu>
            {({ isOpen }) => (
              <React.Fragment>
                <MenuButton bg="#24AEB1" as={Button}>
                  Beauty
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <Link to="/wellness/covidEssentials">
                    {" "}
                    <MenuItem color="#151B39">Personal Care</MenuItem>
                  </Link>
                  <Link to="/">
                    {" "}
                    <MenuItem color="#151B39">Make-up</MenuItem>
                  </Link>
                  <Link to="/wellness/covidEssentials">
                    {" "}
                    <MenuItem color="#151B39">Hair</MenuItem>
                  </Link>
                  <Link to="/">
                    {" "}
                    <MenuItem color="#151B39">Skin Care</MenuItem>
                  </Link>
                  <Link to="/wellness/covidEssentials">
                    {" "}
                    <MenuItem color="#151B39">Tools & Appliances</MenuItem>
                  </Link>
                  <Link to="/wellness/covidEssentials">
                    {" "}
                    <MenuItem color="#151B39">Mom & Baby</MenuItem>
                  </Link>
                  <Link to="/wellness/covidEssentials">
                    {" "}
                    <MenuItem color="#151B39">Fragrances</MenuItem>
                  </Link>
                  <Link to="/wellness/covidEssentials">
                    {" "}
                    <MenuItem color="#151B39">Men's Grooming</MenuItem>
                  </Link>
                </MenuList>
              </React.Fragment>
            )}
          </Menu>
        </Box>
        <Box>
          <Menu>
            {({ isOpen }) => (
              <React.Fragment>
                <MenuButton bg="#24AEB1" as={Button}>
                  Health Corner
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <Link to="/">
                    {" "}
                    <MenuItem color="black">Health Library</MenuItem>
                  </Link>
                  <Link to="/">
                    {" "}
                    <MenuItem color="black">PatientsAlike</MenuItem>
                  </Link>
                  <Link to="/">
                    {" "}
                    <MenuItem color="black">Corona Awareness</MenuItem>
                  </Link>
                </MenuList>
              </React.Fragment>
            )}
          </Menu>

          <Link to={"/wellness/admin"}>
            {/* <Button bg="#24AEB1" p={5}>
              Admin
            </Button> */}
          </Link>
        </Box>
      </Navv>
      <Navv2
        style={{
          paddingLeft: "100px",
          paddingRight: "100px",
          width: "100%",
          background: "white",
          color: "#151B39",
          fontSize: "15px",
          fontWeight: "400",
          justifyContent: "space-around",
          paddingTop: "10px",
        }}
      >
        <Link to="/wellness/covidEssentials">COVID Essentials</Link>
        <Link to="/wellness/covidEssentials">Diabetes</Link>
        <Link to="/wellness/covidEssentials">Eyewear</Link>
        <Link to="/wellness/covidEssentials">Ayush</Link>
        <Link to="/wellness/covidEssentials">Ayurvedic</Link>
        <Link to="/wellness/covidEssentials">Homeopathy</Link>
        <Link to="/wellness/covidEssentials">Fitness</Link>
        <Link to="/wellness/covidEssentials">Mom & Baby</Link>
        <Link to="/wellness/covidEssentials">Devices</Link>
        <Link to="/wellness/covidEssentials">Surgicals</Link>
        <Link to="/wellness/covidEssentials">Sexual Wellness</Link>
        <Link to="/wellness/covidEssentials">Treatements</Link>
      </Navv2>
    </>
  );
};

export default Navbar2;
