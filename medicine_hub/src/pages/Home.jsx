import React from "react";
import { Box, Text } from "@chakra-ui/react";
import LightningDeals from "../component/ImageSliders/LightningDeals";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Topbrand from "../component/ImageSliders/TopBrand";
import Navbar from "../component/Navbar";

import Navbar2 from "../component/Navbar2";
import Carousel from "../component/ImageSliders/Carousel";
import Footer from "../component/Footer";
const categories = [
  {
    name: "Ayush",
    imgSrc: "https://www.netmeds.com/images/category/481/thumb/ayush_1.jpg",
  },
  {
    name: "Hair Care",
    imgSrc:
      "https://www.netmeds.com/images/category/v1/547/thumb/hair_care_2.jpg",
  },
  {
    name: "Body Care",
    imgSrc:
      "https://www.netmeds.com/images/category/v1/525/thumb/body_care_2.jpg",
  },
  {
    name: "Treatements",
    imgSrc:
      "https://www.netmeds.com/images/category/624/thumb/treatments_1.jpg",
  },
  {
    name: "Cold And Fever",
    imgSrc:
      "https://www.netmeds.com/images/category/821/thumb/cold_and_fever.jpg",
  },
];
const CategoryBox = ({ name, imgSrc }) => (
  <Box
    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
    rounded={10}
    p={4}
    width={230}
    height={280}
    bg={"white"}
  >
    <img src={imgSrc} alt={name}></img>
    <Text fontSize={18} fontWeight={500} pl={name.length < 10 ? 60 : 40}>
      {name}
    </Text>
  </Box>
);

const Home = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Carousel />
      <Box bg={"#F3F7FB"} display={"flex"} gap={10} p={10} pt={-10}>
        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          width={430}
          height={"110%"}
        >
          <img
            style={{ borderRadius: "10px" }}
            src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1654019142_Web_Mini_Banner.jpg"
            alt=""
          ></img>
        </Box>
        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          width={430}
          height={"110%"}
        >
          <img
            style={{ borderRadius: "10px" }}
            src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1643047630_Web_Banner_436x244pxl.jpg"
            alt=""
          ></img>
        </Box>
        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          width={430}
          height={"110%"}
        >
          <img
            style={{ borderRadius: "10px" }}
            src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1654696818_Healthvit_436-px-224px-home-page.jpg"
            alt=""
          ></img>
        </Box>
      </Box>

      {/* ///// Payment Offers ////// */}
      <Box
        bg={"#F3F7FB"}
        display={"flex"}
        pl={{ base: 2, md: 10 }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Text
          fontSize={{ base: 20, md: 28 }}
          fontWeight={500}
          mb={{ base: 4, md: 0 }}
        >
          {" "}
          Payment Partners Offers
        </Text>
        <Text as={"button"} cursor={"pointer"} fontSize={14}>
          View All <ChevronRightIcon />
        </Text>
      </Box>

      <Box
        bg={"#F3F7FB"}
        display={"flex"}
        gap={10}
        p={{ base: 2, md: 8 }}
        flexWrap="wrap"
      >
        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          display={"flex"}
          rounded={10}
          p={{ base: 2, md: 5 }}
          pt={{ base: 1, md: 2 }}
          pb={{ base: 1, md: 2 }}
          width={{ base: "100%", md: 460 }}
          height={{ base: "auto", md: "70%" }}
          bg={"white"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            height={{ base: 8, md: 12 }}
            mt={{ base: 1, md: 3 }}
            mb={{ base: 2, md: 0 }}
            pr={{ base: 3, md: 2 }}
            borderRight={{ base: "none", md: "1px solid lightgrey" }}
          >
            <img
              width={{ base: "10px", md: 70 }}
              height={{ base: "px", md: 38 }}
              // src="https://www.netmeds.com/images/cms/offers/1654235738_Icon_256x256.png"
              alt=""
            ></img>
          </Box>
          <Text pl={{ base: 2, md: 3 }} fontSize={{ base: 12, md: 14 }}>
            <Text fontWeight={600}>
              Use Pay with Rewards, Get up to Rs. 800 Cashback!..
            </Text>{" "}
            <br></br>
            <p>
              Get assured cashback between Rs. 30 and Rs. 800, when you pay
              using the “Pay with Rewards” payme..
            </p>
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          display={"flex"}
          rounded={10}
          p={5}
          pt={2}
          pb={2}
          width={460}
          height={"70%"}
          bg={"white"}
        >
          <Box
            boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            height={12}
            mt={3}
            pr={5}
            borderRight="1px solid lightgrey"
          >
            <img
              width={70}
              height={38}
              src="https://www.netmeds.com/images/cms/offers/1643631754_1629112796_Simpl_Icon.png"
              alt=""
            ></img>
          </Box>
          <Text pl={4} fontSize={12}>
            <Text fontWeight={600}>
              Get up to Rs. 500 Simpl Cashback* (5%)! ..
            </Text>{" "}
            <br></br>
            <p>
              From 1st to 30th June 2022, get up to Rs. 500 Simpl Cashback* (5%)
              on your payment via Simpl towards..
            </p>
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          display={"flex"}
          rounded={10}
          p={5}
          pt={2}
          pb={2}
          width={460}
          height={"70%"}
          bg={"white"}
        >
          <Box
            boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            height={12}
            mt={3}
            pr={5}
            borderRight="1px solid lightgrey"
          >
            <img
              width={70}
              height={38}
              src="https://www.netmeds.com/images/cms/offers/1629112796_Simpl_Icon.png"
              alt=""
            ></img>
          </Box>
          <Text pl={4} fontSize={12}>
            <Text fontWeight={600}>
              Get up to Rs. 500 Simpl Cashback* (8%)!..
            </Text>{" "}
            <br></br>
            <Text>
              Get up to Rs. 500 Simpl Cashback (8%) on your FIRST-EVER payment
              via Simpl for ANY purchases* of ANY..
            </Text>
          </Text>
        </Box>
      </Box>

      {/* SHOP BY CATEGORY */}

      <Box
        bg={"#F3F7FB"}
        display={"flex"}
        pl={10}
        justifyContent={"space-between"}
      >
        <Text fontSize={28} fontWeight={500}>
          {" "}
          Shop By Category
        </Text>
        <Text as={"button"} cursor={"pointer"}>
          View All <ChevronRightIcon />
        </Text>
      </Box>

      <Box bg={"#F3F7FB"} display={"flex"} gap={10} p={8}>
        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          p={4}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            src="https://www.netmeds.com/images/category/481/thumb/ayush_1.jpg"
            alt=""
          ></img>
          <Text fontSize={18} fontWeight={500} pl={74}>
            Ayush
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          p={4}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            src="https://www.netmeds.com/images/category/v1/547/thumb/hair_care_2.jpg"
            alt=""
          ></img>
          <Text fontSize={18} fontWeight={500} pl={61}>
            Hair Care
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          p={4}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_2.jpg"
            alt=""
          ></img>
          <Text fontSize={18} fontWeight={500} pl={61}>
            Body Care
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          p={3}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            src="https://www.netmeds.com/images/category/624/thumb/treatments_1.jpg"
            alt=""
          ></img>
          <Text fontSize={18} fontWeight={500} pl={61}>
            Treatements
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          p={4}
          pl={8}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            src="https://www.netmeds.com/images/category/821/thumb/cold_and_fever.jpg"
            alt=""
          ></img>
          <Text fontSize={18} fontWeight={500} pt={9} pl={21}>
            Cold And Fever
          </Text>
        </Box>
      </Box>

      {/* TOP BRANDS */}

      <Box
        bg={"#F3F7FB"}
        display={"flex"}
        pl={10}
        justifyContent={"space-between"}
      >
        <Text fontSize={28} fontWeight={500}>
          Top Brands
        </Text>
        <Text as={"button"} cursor={"pointer"}>
          View All <ChevronRightIcon />
        </Text>
      </Box>
      <Topbrand />

      {/* /////////////////////////////////////////////////// */}

      {/* HEALTH CONCERNS */}

      <Box
        bg={"#F3F7FB"}
        display={"flex"}
        flexDirection={["column", null, null, "row"]}
        pl={[4, 10]}
        pt={[6, 8]}
        justifyContent={["center", null, null, "space-between"]}
      >
        <Text fontSize={[22, 28]} fontWeight={500}>
          Health Concerns
        </Text>
        <Text
          as={"button"}
          cursor={"pointer"}
          display={["none", null, null, "block"]}
        >
          View All <ChevronRightIcon />
        </Text>
      </Box>

      <Box
        bg={"#F3F7FB"}
        display={"flex"}
        flexWrap={"wrap"}
        p={[4, 8]}
        gap={[6, 8, 10]}
      >
        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          pt={10}
          pl={[8, 19]}
          width={["100%", null, 230]}
          height={[220, null, 280]}
          bg={"white"}
          mb={[6, null, null, 0]}
        >
          <img
            style={{ marginLeft: ["auto", null, null, "40px"] }}
            src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg"
            alt=""
          ></img>
          <Text fontSize={[16, 18]} fontWeight={500} pt={14} pl={[10, 38]}>
            Weight Care
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          pt={10}
          pl={[8, 22]}
          width={["100%", null, 230]}
          height={[220, null, 280]}
          bg={"white"}
          mb={[6, null, null, 0]}
        >
          <img
            style={{ marginLeft: ["auto", null, null, "40px"] }}
            src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg"
            alt=""
          ></img>
          <Text fontSize={[16, 18]} fontWeight={500} pt={14} pl={[6, 29]}>
            Women's Care
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          pt={10}
          pl={[8, 13]}
          width={["100%", null, 230]}
          height={[220, null, 280]}
          bg={"white"}
          mb={[6, null, null, 0]}
        >
          <img
            style={{ marginLeft: ["auto", null, null, "50px"] }}
            src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg"
            alt=""
          ></img>
          <Text fontSize={[16, 18]} fontWeight={500} pt={14} pl={[6, 27]}>
            Bone And Joint Pain
          </Text>
        </Box>
        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          pt={10}
          pl={[8, 13]}
          width={["100%", null, 230]}
          height={[220, null, 280]}
          bg={"white"}
          mb={[6, null, null, 0]}
        >
          <img
            style={{ marginLeft: ["auto", null, null, "50px"] }}
            src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg"
            alt=""
          ></img>
          <Text fontSize={[16, 18]} fontWeight={500} pt={14} pl={[6, 27]}>
            Cold And Fever
          </Text>
        </Box>
      </Box>

      {/* LIGHTNING DEALS */}
      <Box bg={"#F3F7FB"} height={530} mb={10}>
        <Box rounded={15} pt={5} ml={4} height={500} background="white">
          <Box background="white" pl={10}>
            <Text fontSize="sm" color={"#6F7284"}>
              {" "}
              TODAY'S EXCLUSIVE{" "}
            </Text>
            <Text fontSize="xl" fontWeight={500}>
              {" "}
              Lightning Deals
            </Text>
            <Text fontSize="xs" color={"#6F7284"}>
              Grab Before The Deal Ends
            </Text>
          </Box>
          <LightningDeals />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
