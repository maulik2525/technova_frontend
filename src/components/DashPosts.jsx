import { Modal, Table, Button } from "flowbite-react";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
// import { Pagination } from "./pagination";
// import {useTable, useSortby , usepagination} from "react-table";

export default function DashPosts() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState("");
  // const [pageno setpageno] = useState (1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
          if (data.posts.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeletePost = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserPosts((prev) =>
          prev.filter((post) => post._id !== postIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full py-10">
      <div className="max-w-[1480px] w-full mx-auto px-5">
        <div className="flex justify-end">
          <form className="max-w-sm lg:max-w-md w-full ml-auto">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" > <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" /> </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  outline-none" placeholder="Search post . . ." required />
              <button type="submit" className="text-base font-medium rounded-lg text-white hover:text-blue-800 absolute end-2 bottom-2 bg-blue-500 hover:bg-transparent border border-blue-500 hover:border-b-4 hover:border-r-4 duration-500 transition-all px-4 py-2 ">Search</button>
            </div>
          </form>    
        </div>
        <div className="table-auto overflow-x-auto md:mx-auto p-3 space-y-5">
          {currentUser.isAdmin && userPosts.length > 0 ? (
            <>
              
              <Table hoverable className="shadow-md border border-grey-900 overflow-auto">
                <Table.Head className="text-base lg:text-lg font-medium border border-grey-900 overpass overflow-x-auto">
                  <Table.HeadCell className="border-r border-x-grey-900">Post image</Table.HeadCell>
                  <Table.HeadCell className="border-r border-x-grey-900">Post title</Table.HeadCell>
                  <Table.HeadCell className="border-r border-x-grey-900">Category</Table.HeadCell>
                  <Table.HeadCell className="border-r border-x-grey-900">Date updated</Table.HeadCell>
                  <Table.HeadCell className="border-r border-x-grey-900">Delete</Table.HeadCell>
                  <Table.HeadCell><span>Edit</span></Table.HeadCell>
                </Table.Head>
                {userPosts.map((post) => (
                  <Table.Body className="text-sm lg:text-base font-normal text-gray-500 divide-y border-r border-x-grey-900 overflow-auto montserrat" key={post._id}>
                    <Table.Row className=" border-gray-700">
                      <Table.Cell className="border-r border-x-grey-900">
                        <Link to={`/post/${post.slug}`}>
                          <img src={post.image} alt={post.title} className="w-20 h-10 object-cover bg-gray-500" />
                        </Link>
                      </Table.Cell>

                      <Table.Cell className="border-r border-x-grey-900 dark:text-white">
                        <Link className="font-medium text-gray-500 dark:text-white" to={`/post/${post.slug}`}>
                          {post.title}
                        </Link>
                      </Table.Cell>
                      <Table.Cell className="border-r border-x-grey-900">
                        {post.category}
                      </Table.Cell>
                      <Table.Cell className="border-r border-x-grey-900">
                        {new Date(post.updatedAt).toLocaleDateString()}
                      </Table.Cell>
                      <Table.Cell className="border-r border-x-grey-900">
                        <span onClick={() => {setShowModal(true);setPostIdToDelete(post._id);}} className="font-medium text-red-500 hover:underline cursor-pointer" >Delete</span>
                      </Table.Cell>
                      <Table.Cell className="border-r border-x-grey-900">
                        <Link className="text-teal-500 hover:underline" to={`/update-post/${post._id}`}>
                          <span>Edit</span>
                        </Link>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                ))}
              </Table>
              {/* <Pagination pageno={pageno} setpageno={setpageno}></> */}
              {showMore && (
                <button
                  onClick={handleShowMore}
                  className="text-base lg:text-lg font-medium text-teal-500 hover:text-white bg-white hover:bg-teal-500 border border-teal-500 rounded-xl duration-500 transition-all py-2.5 px-7 mx-auto">Show more
                </button>
              )}
            </>
          ) : (
            <p>You have no posts yet!</p>
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
                    Are you sure you want to delete this post?
                  </h3>
                  <div className="flex justify-center gap-4">
                    <Button color="failure" onClick={handleDeletePost}>
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
