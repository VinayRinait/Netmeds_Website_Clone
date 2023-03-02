import axios from "axios";
import {
  BESTSELLER_SUCCESS,
  CART_SUCCESS,
  COVIDESSENTIALS_SUCCESS,
  FETCHFILTERDATA,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  NEWONNETMEDS_SUCCESS,
  SUPP_SUCCESS,
  ADMIN_LOGIN,
} from "./actionTypes";

export const login = () => ({
  type: LOGIN_SUCCESS,
});

export const adminlogin = () => ({
  type: ADMIN_LOGIN,
});

export const logout = () => ({
  type: LOGOUT_SUCCESS,
});

export const suppSuccess = (data) => ({
  type: SUPP_SUCCESS,
  payload: null,
});

export const covidEssentialSuccess = (data) => ({
  type: COVIDESSENTIALS_SUCCESS,
  payload: data,
});
export const bestSellerSuccess = (data) => ({
  type: BESTSELLER_SUCCESS,
  payload: data,
});

export const fetchFilterData = (data) => ({
  type: FETCHFILTERDATA,
  payload: data,
});

export const takeMeToCart = (data) => ({
  type: CART_SUCCESS,
  payload: data,
});

export const fetchSupplement = (payload) => async (dispatch) => {
  axios({
    url: "https://link-ten-zeta.vercel.app",
    method: "GET",
    params: {
      q: "vitamins-suppliments",
      _limit: 10,
    },
  })
    .then((res) => {
      let success = suppSuccess(res.data);
      dispatch(success);
    })
    .catch((e) => {
      console.log("err");
    });
};

export const fetchCovidEssentials = (payload) => async (dispatch) => {
  axios({
    url: "https://link-ten-zeta.vercel.app/",
    method: "GET",
    params: {
      q: "medicine",
      _limit: 10,
    },
  })
    .then((res) => {
      console.log(res.data);
      let success = covidEssentialSuccess(res.data);
      dispatch(success);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchBestSeller = (payload) => async (dispatch) => {
  axios({
    url: "https://link-ten-zeta.vercel.app",
    method: "GET",
    params: {
      q: "products",
      _limit: 10,
    },
  })
    .then((res) => {
      console.log(res.data);
      let success = bestSellerSuccess(res.data);
      // alert("success")
      dispatch(success);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchData = (payload, page, q, price) => {
  return (dispatch) => {
    axios("https://link-ten-zeta.vercel.app/medicine", {
      params: {
        ...payload,
        _page: page,
        _limit: 10,
        q: q,
        _sort: "price",
        _order: `${price}`,
      },
    })
      .then((r) => {
        dispatch(fetchFilterData(r.data));
        // console.log(r.data)
      })
      .catch((e) => console.log(e));
  };
};

export const cartData = (payload) => (dispatch) => {
  axios("https://link-ten-zeta.vercel.app/cart")
    .then((res) => {
      console.log(res.data);
      let cartAction = takeMeToCart(res.data);
      dispatch(cartAction);
      // alert('cart success')
    })
    .catch((e) => {
      console.log(e);
    });
};
