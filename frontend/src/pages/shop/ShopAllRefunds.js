import React from 'react'
import ShopSidebar from '../../components/shop/Layout/ShopSidebar';
import SellerDashboardHeader from '../../components/shop/Layout/SellerDashboardHeader';
import AllRedunds from "../../components/shop/AllRefunds";

const ShopAllRefunds = () => {
  return (
    <div>
        <SellerDashboardHeader />
        <div className="flex justify-between w-full">
            <div className="w-[80px] md:w-[330px]">
              <ShopSidebar active={10} />
            </div>
            <div className="w-full justify-center flex">
                <AllRedunds />
            </div>
          </div>
    </div>
  )
}

export default ShopAllRefunds