import { useStatStyles } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () => {
  const [slider, setSlider] = useState(1);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const cards = [
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1667832066_Web_Home_Bannercabbb.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1666355540_Home_Bannercold.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1666362102_Home_Bannernmsnew.jpg",
  ];
  return (
    <Box
      position={"relative"}
      width={"100%"}
      bg={"#F3F7FB"}
      overflow={"hidden"}
    >
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
      <IconButton
        marginTop={"-28px"}
        aria-label="left-arrow"
        colorScheme="whiteAlpha"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        marginTop={"-28px"}
        aria-label="right-arrow"
        colorScheme="whiteAlpha"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={310}
            width={1000}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          ></Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
