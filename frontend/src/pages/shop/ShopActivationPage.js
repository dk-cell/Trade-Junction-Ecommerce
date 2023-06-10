import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../constant";
import {toast} from "react-toastify"

const ShopActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const activateEmail = async () => {
        try {
          const res = await API.post(`/shop/activation`, {
            activation_token,
          });
        } catch (err) {
          setError(true);
          toast.error(err);
        }
      };
      activateEmail();
    }
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token expires!!</p>
      ) : (
        <p>Your account activated successfully!!</p>
      )}
    </div>
  );
};

export default ShopActivationPage;
