import React from "react";
import UpdateShopSetting from "../../components/shop/UpdateShopSetting";
import SellerDashboardHeader from "../../components/shop/Layout/SellerDashboardHeader";
import ShopSidebar from "../../components/shop/Layout/ShopSidebar";
const ShopSettings = () => {
  return (
    <div>
      <SellerDashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[80px] md:w-[330px]">
          <ShopSidebar active={11} />
        </div>
        <div className="w-full justify-center flex mt-10">
          <UpdateShopSetting />
        </div>
      </div>
    </div>
  );
};

export default ShopSettings;
