import React, { useState } from "react";
import axios from "axios";
import {
  Text,
  Box,
  IconButton,
  Image,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import AddCart from "../AddCart";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Settings for the slider
const settings = {
  dots: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function LightningDeals() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(1);
  const [data, setData] = useState([]);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  // const top = useBreakpointValue({ base: "90%", md: "50%" });
  // const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide

  useEffect(() => {
    axios("https://link-ten-zeta.vercel.app/products", {
      params: {
        _limit: 15,
      },
    })
      .then((r) => {
        console.log(r.data, "ffffddd");
        setData(r.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Box
      position={"relative"}
      height={"400px"}
      width={"100%"}
      bg={"white"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        zIndex={20}
        w="70px"
        h={"70px"}
        position={"absolute"}
        rounded={"50%"}
        shadow={"dark-lg"}
        top={"35%"}
        left="10px"
        bg="none"
        transform={"translate(0%, -50%)"}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt fontSize={"50px"} color={"#ff6f61"} />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        zIndex={20}
        w="70px"
        h={"70px"}
        position={"absolute"}
        rounded={"50%"}
        shadow={"dark-lg"}
        top={"35%"}
        right="10px"
        bg="none"
        transform={"translate(0%, -50%)"}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt fontSize={"40px"} color={"#ff6f61"} />
      </IconButton>
      {/* Slider */}
      <Box display={"flex"} justifyContent="space-between">
        <Box>
          <Heading fontSize={{ base: "20px", md: "none" }} ml="10px">
            Vitamins & Suppliments | supplement of the week
          </Heading>
        </Box>
        <Box>
          <Link to={"/medicine"}>
            <Button color={"white"} bg={"#24AEB1"}>
              SEE ALL
            </Button>
          </Link>
        </Box>
      </Box>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {data.map((el) => (
          <Box
            flexShrink={0}
            w={{ base: "50%", md: "15%" }}
            _hover={{ shadow: "xl" }}
            p={"15px"}
          >
            <Box w={"100%"} h={"150px"} mb={"10px"}>
              <Image h="100%" src={el.src} />
            </Box>
            <Text color="grey" fontSize={"15px"} mb={"10px"} fontWeight={600}>
              {el.title}
            </Text>
            {/* <Text color="grey" fontSize={"13px"} mb={"10px"} fontWeight={600}>
              {el.packsize}
            </Text> */}
            <Flex gap={"10px"}>
              <Text
                color="grey"
                fontSize={"13px"}
                mb={"10px"}
                textDecor="line-through"
                fontWeight={600}
              >
                {el["strike-price"] ? `₹${el["strike-price"]}` : null}
              </Text>
              <Text
                fontSize={"13px"}
                mb={"10px"}
                color="green"
                fontWeight={600}
              >
                {el["discount-percent"]}
              </Text>
            </Flex>
            <Heading
              color="grey"
              fontSize={"15px"}
              mb={"10px"}
              fontWeight={600}
            >
              {el["price"] ? `₹${el["price"]}` : null}
            </Heading>
            <AddCart key={el.id} prodData={el} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
