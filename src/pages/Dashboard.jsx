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
      {/* <span>
      <svg id="dashslider" className="size-10" onClick={()=> setstatus(!status)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" > <path d="M64 0C28.711 0 0 28.711 0 64s28.711 64 64 64 64-28.711 64-64S99.289 0 64 0zm0 120C33.121 120 8 94.879 8 64S33.121 8 64 8s56 25.121 56 56-25.121 56-56 56zm26.828-58.828a3.997 3.997 0 0 1 0 5.656l-20 20C70.047 87.609 69.023 88 68 88s-2.047-.391-2.828-1.172a3.997 3.997 0 0 1 0-5.656L78.344 68H40c-2.209 0-4-1.789-4-4s1.791-4 4-4h38.344L65.172 46.828c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0z" /> </svg>
        <img src="/close-button.png" alt="" className="size-10 cursor-pointer duration-700 transition-all" />
      </span> */}
      {tab === "profile" && <DashProfile />}
      {tab === "posts" && <DashPosts />}
      {tab === "users" && <DashUsers />}
      {tab === "comments" && <DashComments />}
      {tab === "dash" && <DashboardComp />}
      {tab === "notification" && <DashboardComp />}
    </div>
  );
}

