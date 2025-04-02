import {
  Modal,
  Table,
  Button,
  TableBody,
  TableRow,
  TableHead,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function DashUsers() {
  const { currentUser } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/user/getusers`);
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          if (data.users.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchUsers();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = users.length;
    try {
      const res = await fetch(`/api/user/getusers?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setUsers((prev) => [...prev, ...data.users]);
        if (data.users.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const res = await fetch(`/api/user/delete/${userIdToDelete}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setUsers((prev) => prev.filter((user) => user._id !== userIdToDelete));
        setShowModal(false);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const options = {
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    series: [
      {
        name: "New users",
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: "#1A56DB",
      },
    ],
    xaxis: {
      categories: [
        "01 February",
        "02 February",
        "03 February",
        "04 February",
        "05 February",
        "06 February",
        "07 February",
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  if (
    document.getElementById("area-chart") &&
    typeof ApexCharts !== "undefined"
  ) {
    const chart = new ApexCharts(
      document.getElementById("area-chart"),
      options
    );
    chart.render();
  }
  return (
    
    <div className="relative z-0 w-full">
      <div className="max-w-[1480px] w-full px-5 mx-auto">
        <div className="flex justify-end">
          <form className="max-w-sm lg:max-w-md w-full mt-5">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <input type="search" id="default-search" className="block w-full p-3 lg:p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  outline-none" placeholder="Search post . . ." required />
              <button type="submit" className="text-sm md:text-base font-medium rounded-lg text-white hover:text-blue-800 absolute end-2 bottom-1 lg:bottom-2 bg-blue-500 hover:bg-transparent border border-blue-500 hover:border-b-4 hover:border-r-4 duration-500 transition-all px-4 py-1.5 lg:py-2 ">Search</button>
            </div>
          </form>    
        </div>
        <div className="w-full table-auto overflow-x-auto p-3 my-5 space-y-5 overflow-auto">
          {currentUser.isAdmin && users.length > 0 ? (
            <>
              <Table hoverable className="shadow-sm">
                <Table.Head className="border">
                  <Table.HeadCell className="text-gray-900 text-base xl:text-lg font-medium border-r border-x-gray-200 whitespace-nowrap">User image</Table.HeadCell>
                  <Table.HeadCell className="text-gray-900 text-base xl:text-lg font-medium border-r border-x-gray-200 whitespace-nowrap"> Username</Table.HeadCell>
                  <Table.HeadCell className="text-gray-900 text-base xl:text-lg font-medium border-r border-x-gray-200 whitespace-nowrap"> Email</Table.HeadCell>
                  <Table.HeadCell className="text-gray-900 text-base xl:text-lg font-medium border-r border-x-gray-200 whitespace-nowrap">Date created</Table.HeadCell>
                  <Table.HeadCell className="text-gray-900 text-base xl:text-lg font-medium border-r border-x-gray-200 whitespace-nowrap">Admin</Table.HeadCell>
                  <Table.HeadCell className="text-gray-900 text-base xl:text-lg font-medium border-r border-x-gray-200 whitespace-nowrap">Delete</Table.HeadCell>
                </Table.Head>
                {users.map((user) => (
                  <Table.Body className="divide-y border" key={user._id}>
                    <Table.Row className="bg-white text-gray-600 border dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="text-base font-normal leading-6 tracking-normal border-r border-x-gray-200">
                        <img src={user.profilePicture}alt={user.username}className="w-10 h-10 object-cover bg-gray-500 rounded-full"/>
                      </Table.Cell>
                      <Table.Cell className="text-sm xl:text-base font-normal text-gray-600 leading-6 tracking-normal border-r border-x-gray-200">
                        {user.username}
                      </Table.Cell>
                      <Table.Cell className="text-sm xl:text-base font-normal text-gray-600 marker:leading-6 tracking-normal border-r border-x-gray-200">
                        {user.email}
                      </Table.Cell>
                      <Table.Cell className="text-sm xl:text-base font-normal text-gray-600 leading-6 tracking-wide border-r border-x-gray-200">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </Table.Cell>
                      <Table.Cell className="text-sm xl:text-base font-normal text-gray-600 leading-6 tracking-normal border-r border-x-gray-200">
                        {user.isAdmin ? (
                          <FaCheck className="text-green-500" />
                        ) : (
                          <FaTimes className="text-red-500" />
                        )}
                      </Table.Cell>
                      <Table.Cell>
                        <span onClick={() => {setShowModal(true); setUserIdToDelete(user._id);}}className="font-medium text-red-500 hover:underline cursor-pointer">Delete</span>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                ))}
              </Table>

              {showMore && (
                <button
                  onClick={handleShowMore}
                  className="text-base lg:text-lg font-medium text-teal-500 hover:text-white bg-white hover:bg-gradient-to-r from-[#2aceb6] to-blue-400 border border-teal-500 rounded-xl duration-500 transition-all py-2.5 px-7 mx-auto">Show more
                </button>
              )}
            </>
          ) : (
            <p>You have no users yet!</p>
          )}
          <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
            popup
            size="md"
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
                <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this user?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="failure" onClick={handleDeleteUser}>
                    Yes, I'm sure
                  </Button>
                  <Button color="gray" onClick={() => setShowModal(false)}>
                    No, cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}
