import {
  Button,
  Input,
  Modal,
  ModalBody,
  Radio,
  RadioGroup,
  Select,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Navbar2 from "../component/Navbar2";

const Admin = () => {
  // TODO: Remove below const and instead import them from chakra
  const [input, setInput] = useState("");
  const [type, setType] = useState("");

  const [price, setPrice] = useState(0);
  const [src, setSrc] = useState("");
  const [seller, setSeller] = useState("");
  const [strikeOfPrice, setStrick] = useState(0);
  const [qty, setQty] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    axios
      .post(`https://netmeds-server-data.herokuapp.com/api/data`, {
        title: input,
        Category: type,

        salePrice: price,
        imageUrl: src,
        seller: seller,
        strikeOfPrice: strikeOfPrice,
        qty: qty,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Button
        my={4}
        data-cy="add-product-button"
        onClick={onOpen}
        bg={"teal.500"}
      >
        Add New Medicine
      </Button>

      <Modal isOpen={isOpen}>
        <Button bg={"red.300"} onClick={onClose}>
          close
        </Button>
        <ModalBody pb={6}>
          <label>Title</label>
          <Input
            data-cy="add-product-title"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="title"
          />
          <label>Seller</label>
          <Input
            data-cy="add-product-title"
            onChange={(e) => setSeller(e.target.value)}
            value={seller}
            placeholder="Selller_Name"
          />
          <label>Category</label>
          <Select
            data-cy="add-product-category"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option data-cy="add-product-category-shirt" value={"baby"}>
              Baby
            </option>
            <option data-cy="add-product-category-pant" value={"mother"}>
              Mother
            </option>
            <option data-cy="add-product-category-jeans" value={"syrup"}>
              Syrup
            </option>
          </Select>

          <label>Price</label>
          <Input
            data-cy="add-product-price"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <label>Strike Price</label>
          <Input
            data-cy="add-product-price"
            placeholder="price"
            onChange={(e) => setStrick(e.target.value)}
            value={strikeOfPrice}
          />
          <label>Image_url</label>
          <Input
            data-cy="image_url"
            placeholder="Image_url"
            onChange={(e) => setSrc(e.target.value)}
            value={src}
          />

          <label>Quantity</label>
          <Select
            data-cy="add-product-category"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          >
            <option data-cy="add-product-category-shirt" value={"1"}>
              1
            </option>
            <option data-cy="add-product-category-pant" value={"2"}>
              2
            </option>
            <option data-cy="add-product-category-jeans" value={"3"}>
              3
            </option>
          </Select>
          <Button
            bg={"teal.400"}
            data-cy="add-product-submit-button"
            onClick={handleClick}
          >
            Create
          </Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Admin;

// brand
// :
// "Dabur"
// id
// :
// 141
// imageUrl
// :
// "https://www.netmeds.com/images/product-v1/150x150/15917/dabur_pudin_hara_pearls_capsule_10_s_0.jpg"
// qty
// :
// "4"
// salePrice
// :
// 19
// seller
// :
// "Mkt: Dabur India Ltd"
// strikeOfPrice
// :
// 20
// title
// :
// "Dabur Pudin Hara Pearls Capsule 10's"
