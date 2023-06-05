import React from 'react'
import DashboardMessages from "../../components/shop/DashboardMessages";
import SellerDashboardHeader from '../../components/shop/Layout/SellerDashboardHeader';
import ShopSidebar from '../../components/shop/Layout/ShopSidebar';

const ShopInboxPage = () => {
  return (
    <div>
    <SellerDashboardHeader />
    <div className="flex items-start justify-between w-full">
      <div className="w-[80px] md:w-[330px]">
        <ShopSidebar active={8} />
      </div>
       <DashboardMessages />
    </div>
  </div>
  )
}

export default ShopInboxPage