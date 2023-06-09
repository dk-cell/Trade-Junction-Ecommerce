import React, { useEffect } from "react";
import AdminHeader from "../../components/Admin/Layout/AdminHeader";
import AdminSideBar from "../../components/Admin/Layout/AdminSideBar";
import { DataGrid } from "@mui/x-data-grid";
import AllOrders from "../../components/Admin/AllOrders";

const AdminDashboardOrders = () => {
  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] md:w-[330px]">
            <AdminSideBar active={2} />
          </div>
          <AllOrders />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardOrders;
