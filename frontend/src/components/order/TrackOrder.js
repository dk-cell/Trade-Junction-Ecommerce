import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      {" "}
      <>
        {data && data?.status === "Processing" ? (
          <h1 className="text-[20px]">Your items is processing...</h1>
        ) : data?.status === "Transferred to delivery partner" ? (
          <h1 className="text-[20px]">
          Your items has been shipped!
          </h1>
        ) : data?.status === "Shipping" ? (
          <h1 className="text-[20px]">
            Your items is on the way!
          </h1>
        ) : data?.status === "Received" ? (
          <h1 className="text-[20px]">
            Your items reached to nearest hub!
          </h1>
        ) : data?.status === "On the way" ? (
          <h1 className="text-[20px]">
            Out for Delivery!
          </h1>
        ) : data?.status === "Delivered" ? (
          <h1 className="text-[20px]">Your order has been delivered!</h1>
        ) : data?.status === "Processing refund" ? (
          <h1 className="text-[20px]">Your refund is processing!</h1>
        ) : data?.status === "Refund Success" ? (
          <h1 className="text-[20px]">Your Refund success!</h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;