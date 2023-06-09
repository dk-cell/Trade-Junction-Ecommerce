import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { backendUrl } from "../../../constant";

const AdminHeader = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="w-full h-[80px] bg-[#343a40] shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/">
          <img
            src={require("../../../assests/animations/TradeJuctionlogo.png")}
            alt=""
            className="w-[280px] h-[280px]"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/" className="md:block hidden">
            <AiOutlineGift
              color="#fff"
              size={30}
              className="mx-5 cursor-pointer text-[#fff]"
            />
          </Link>
          <Link to="/admin-events" className="md:block hidden">
            <MdOutlineLocalOffer
              color="#fff"
              size={30}
              className="mx-5 cursor-pointer text-[#fff]"
            />
          </Link>
          <Link to="/admin-products" className="md:block hidden">
            <FiShoppingBag
              color="#fff"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/admin-orders" className="md:block hidden">
            <FiPackage color="#fff" size={30} className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/admin-messages" className="md:block hidden">
            <BiMessageSquareDetail
              color="#fff"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <img
            src={`${backendUrl}${user?.avatar}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
