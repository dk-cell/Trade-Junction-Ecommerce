import { API } from "../../constant";


// get all users --- admin
export const getAllUsers = () => async (dispatch) => {
    try {
      dispatch({
        type: "getAllUsersRequest",
      });
  
      const { data } = await API.get(`/user/admin-all-users`, {
        withCredentials: true,
      });
  
      dispatch({
        type: "getAllUsersSuccess",
        payload: data.users,
      });
    } catch (error) {
      dispatch({
        type: "getAllUsersFailed",
        payload: error.response.data.message,
      });
    }
  };

// get all orders of Admin
export const getAllOrdersOfAdmin = () => async (dispatch) => {
  try {
    dispatch({
      type: "adminAllOrdersRequest",
    });

    const { data } = await API.get(`/order/admin-all-orders`, {
      withCredentials: true,
    });

    dispatch({
      type: "adminAllOrdersSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "adminAllOrdersFailed",
      payload: error.response.data.message,
    });
  }
};

// get all sellers --- admin
export const getAllSellers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllSellersRequest",
    });

    const { data } = await API.get(`/shop/admin-all-sellers`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllSellersSuccess",
      payload: data.sellers,
    });
  } catch (error) {
    dispatch({
      type: "getAllSellerFailed",
    //   payload: error.response.data.message,
    });
  }
};
