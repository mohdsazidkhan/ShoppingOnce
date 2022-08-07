import { 
    ADD_TO_CART, 
    EMPTY_CART, 
    REMOVE_FROM_CART, 
    SAVE_SHIPPING_INFO, 
    NEW_SHIPPING_SUCCESS, 
    NEW_SHIPPING_FAILED,
    UPDATE_SHIPPING_SUCCESS, 
    UPDATE_SHIPPING_FAILED,
    ADDRESS_DETAILS_REQUEST,
    ADDRESS_DETAILS_SUCCESS,
    ADDRESS_DETAILS_FAILED

} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [], shippingInfo: {} }, { type, payload }) => {
    switch (type) {

        case ADD_TO_CART:

            const item = payload;
            const isItemExist = state.cartItems.find((el) => el.product === item.product);

            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((el) =>
                        el.product === isItemExist.product ? item : el
                    ),
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((el) => el.product !== payload)
            }
        case EMPTY_CART:
            return {
                ...state,
                cartItems: [],
            }
        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: payload
            }
        case NEW_SHIPPING_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                shippingInfo: payload.shippingInfo,
            };
        case NEW_SHIPPING_FAILED:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case UPDATE_SHIPPING_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: payload,
            };
        case UPDATE_SHIPPING_FAILED:
            return {
                ...state,
                loading: false,
                error: payload,
            };    
        default:
            return state;
    }
}

export const addressReducer = (state = { address: {} }, { type, payload }) => {

    switch (type) {
        case ADDRESS_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADDRESS_DETAILS_SUCCESS:
            return {
                loading: false,
                address: payload,
            };
        case ADDRESS_DETAILS_FAILED:
            return {
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
}