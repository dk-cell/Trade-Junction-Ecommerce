import React from "react";
import SellerDashboardHeader from "../../components/shop/Layout/SellerDashboardHeader";
import ShopSidebar from "../../components/shop/Layout/ShopSidebar";
import WithdrawMoney from "../../components/shop/WithdrawMoney";
const ShopWithdrawMoneyPage = () => {
  return (
    <div>
      <SellerDashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[80px] md:w-[330px]">
          <ShopSidebar active={7} />
        </div>
        <div className="w-full justify-center flex">
          <WithdrawMoney />
        </div>
      </div>
    </div>
  );
};

export default ShopWithdrawMoneyPage;
