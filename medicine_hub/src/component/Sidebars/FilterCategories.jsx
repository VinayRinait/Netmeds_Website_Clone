import React, { useEffect, useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { CheckboxGroup, Checkbox, VStack } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchData } from "../../Redux/action";

const FilterCategories = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.getAll("type"))

  const [categoryValues, setCategoryValues] = useState(
    searchParams.getAll("type") || []
  );

  const categoryHandler = (value) => {
    console.log(value);
    setCategoryValues(value);
  };

  useEffect(() => {
    if (categoryValues) {
      setSearchParams({ type: categoryValues }, { replace: true });
      let params = {
        type: searchParams.getAll("type"),
      };
      dispatch(fetchData(params));
    }
  }, [setSearchParams, categoryValues, dispatch, searchParams]);

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
    >
      <Box
        pl={2}
        pr={{ base: 2, md: 0 }}
        mb={{ base: 4, md: 0 }}
        rounded={"md"}
        boxShadow={" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        p={5}
        flex={1}
        mr={{ md: 4 }}
      >
        <Text>Category</Text>
        <br />
        <CheckboxGroup
          colorScheme="green"
          defaultValue={categoryValues}
          onChange={categoryHandler}
        >
          <VStack alignItems="baseline">
            <Checkbox value="medicine">Covid Essentials</Checkbox>
            <Checkbox value="vitamins-suppliments">
              Vitamins & Suppliments
            </Checkbox>
            <Checkbox value="momAndBaby">Mom & Baby</Checkbox>
            <Checkbox value="skinCare">Skin Care</Checkbox>
            <Checkbox value="homeopathy">Homeopathy</Checkbox>
            <Checkbox value="ayurvedic">Ayurvedic</Checkbox>
            <Checkbox value="sexualWellness">Sexual Wellness</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>

      <Box display={{ base: "block", md: "none" }}>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            Menu
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="desc">Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Country" type="checkbox">
              <MenuItemOption value="email">Email</MenuItemOption>
              <MenuItemOption value="phone">Phone</MenuItemOption>
              <MenuItemOption value="country">Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default FilterCategories;
