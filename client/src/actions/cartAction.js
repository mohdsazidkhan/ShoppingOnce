import axios from "axios"
import { 
    ADD_TO_CART, 
    EMPTY_CART, 
    REMOVE_FROM_CART, 
    SAVE_SHIPPING_INFO, 
    NEW_SHIPPING_SUCCESS, 
    NEW_SHIPPING_FAILED,
    UPDATE_SHIPPING_INFO,
    UPDATE_SHIPPING_SUCCESS,
    UPDATE_SHIPPING_FAILED,
    ADDRESS_DETAILS_REQUEST,
    ADDRESS_DETAILS_SUCCESS,
    ADDRESS_DETAILS_FAILED

} from "../constants/cartConstants";

// add to cart
export const addItemsToCart = (id, quantity = 1) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.product._id,
            name: data.product.name,
            seller: data.product.brand.name,
            price: data.product.price,
            cuttedPrice: data.product.cuttedPrice,
            image: data.product.images[0].url,
            stock: data.product.stock,
            quantity,
        },
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// remove cart item
export const removeItemsFromCart = (id) => async (dispatch, getState) => {

    dispatch({
        type: REMOVE_FROM_CART,
        payload: id,
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// empty cart
export const emptyCart = () => async (dispatch, getState) => {

    dispatch({ type: EMPTY_CART });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// save shipping info
export const saveShippingInfo = (shippingInfo) => async (dispatch) => {

    try {
        dispatch({ type: SAVE_SHIPPING_INFO });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v1/address/new", shippingInfo, config);

        dispatch({
            type: NEW_SHIPPING_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: NEW_SHIPPING_FAILED,
            payload: error.response.data.message,
        });
    }

    localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));
}

// update shipping info
export const updateShippingInfo = (shippingInfo) => async (dispatch) => {

    try {
        dispatch({ type: UPDATE_SHIPPING_INFO });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/api/v1/address/${shippingInfo.userID}`, shippingInfo, config);

        dispatch({
            type: UPDATE_SHIPPING_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: UPDATE_SHIPPING_FAILED,
            payload: error.response.data.message,
        });
    }

    localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));
}

export const getAddresses = (userID) => async (dispatch) => {
    try {
        dispatch({ type: ADDRESS_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/v1/address/${userID}`);
        dispatch({
            type: ADDRESS_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ADDRESS_DETAILS_FAILED,
            payload: error.response.data.message,
        });
    }
};