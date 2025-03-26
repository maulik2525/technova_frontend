import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashboardComp from "../components/DashboardComp";
import { HiDesktopComputer } from "react-icons/hi";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const[status,setstatus]=useState(false);
  
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="h-full w-full flex flex-col md:flex-row">
     {status ? <div id="dashslider" className="md:w-56 translate-x-0">
        <DashSidebar/>
      </div>:null }
      {tab === "profile" && <DashProfile />}
      {tab === "posts" && <DashPosts />}
      {tab === "users" && <DashUsers />}
      {tab === "comments" && <DashComments />}
      {tab === "dash" && <DashboardComp />}
      {tab === "notification" && <DashboardComp />}
    </div>
  );
}

