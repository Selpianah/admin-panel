"use client"
import Loader from "@/components/admin-apnel/loader";
import Login from "@/components/admin-apnel/login";
import Sidebar from "@/components/admin-apnel/Sidebar";
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import React from "react";

const layout = ({children}: {children: React.ReactNode}) => {
    const isloading = useAppSelector(store => store.loadingReducer);
    const {data: session} = useSession();

    if(!session?.user){
        return <Login />;
    }

  return (
    <div className="flex">
    <Sidebar />
    <div className="w-full h-full">
      {/* <Navbar /> */}
      <div className="bg-gray-200 p-4 h-[calc(100vh-64px)]">{children}</div>
    </div>
    {isloading && <Loader />}
  </div>
  );
};

export default layout;
