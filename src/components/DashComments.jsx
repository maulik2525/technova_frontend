import { Modal, Table, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function DashComments() {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState("");
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comment/getcomments`);
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          if (data.comments.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchComments();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = comments.length;
    try {
      const res = await fetch(
        `/api/comment/getcomments?startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prev) => [...prev, ...data.comments]);
        if (data.comments.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteComment = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/comment/deleteComment/${commentIdToDelete}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prev) =>
          prev.filter((comment) => comment._id !== commentIdToDelete)
        );
        setShowModal(false);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full py-5">
      <div className="max-w-[1480px] w-full px-0 mx-auto">
        <div className="flex">
            <form className="max-w-sm lg:max-w-md w-full ml-auto">   
              <div className="relative">
                
                <input type="search" id="default-search" className="block w-full p-3 lg:p-4 ps-20 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  outline-none" placeholder="Search post . . ." required />
                <button type="submit" className="text-sm md:text-base font-medium rounded-lg text-white hover:text-blue-800 absolute end-2 bottom-1 lg:bottom-2 bg-blue-500 hover:bg-transparent border border-blue-500 hover:border-b-4 hover:border-r-4 duration-500 transition-all px-4 py-1.5 md:py-2 ">Search</button>
              </div>
            </form>    
          </div>
        <div className="w-full table-auto text-black overflow-x-auto my-6">
          {currentUser.isAdmin && comments.length > 0 ? (
            <>
              <Table hoverable className="shadow-md">
                <Table.Head className=" border dark:bg-gray-700">
                  <Table.HeadCell className="text-base xl:text-lg font-medium montserrat leading-6 text-gray-900 border-r border-gray-400 whitespace-nowrap">
                    Date updated
                  </Table.HeadCell>
                  <Table.HeadCell className="text-base xl:text-lg font-medium montserrat leading-6 text-gray-900 border-r border-gray-400 whitespace-nowrap">
                    Comment content
                  </Table.HeadCell>
                  <Table.HeadCell className="text-base xl:text-lg font-medium montserrat leading-6 text-gray-900 border-r border-gray-400 whitespace-nowrap">
                    Number of likes
                  </Table.HeadCell>
                  <Table.HeadCell className="text-base xl:text-lg font-medium montserrat leading-6 text-gray-900 border-r border-gray-400 whitespace-nowrap">
                    PostId
                  </Table.HeadCell>
                  <Table.HeadCell className="text-base xl:text-lg font-medium montserrat leading-6 text-gray-900 border-r border-gray-400 whitespace-nowrap">
                    UserId
                  </Table.HeadCell>
                  <Table.HeadCell className="text-base xl:text-lg font-medium montserrat leading-6 text-gray-900 border-r border-gray-400 whitespace-nowrap">
                    Delete
                  </Table.HeadCell>
                </Table.Head>
                {comments.map((comment) => (
                  <Table.Body className="border dark:bg-gray-700" key={comment._id}>
                    <Table.Row className="text-black">
                      <Table.Cell className="text-sm xl:text-base font-normal montserrat leading-5 2xl:leading-6 text-black border-r border-gray-400">
                        {new Date(comment.updatedAt).toLocaleDateString()}
                      </Table.Cell>
                      <Table.Cell className="text-sm xl:text-base font-normal montserrat leading-5 2xl:leading-6 text-black border-r border-gray-400">
                        {comment.content}
                      </Table.Cell>
                      <Table.Cell className="text-sm xl:text-base font-normal montserrat leading-5 2xl:leading-6 text-black border-r border-gray-400">
                        {comment.numberOfLikes}
                      </Table.Cell>
                      <Table.Cell className="text-sm xl:text-base font-normal montserrat leading-5 2xl:leading-6 text-black border-r border-gray-400">
                        {comment.postId}
                      </Table.Cell>
                      <Table.Cell className="text-sm xl:text-base font-normal montserrat leading-5 2xl:leading-6 text-black border-r border-gray-400">
                        {comment.userId}
                      </Table.Cell>
                      <Table.Cell>
                        <span
                          onClick={() => {
                            setShowModal(true);
                            setCommentIdToDelete(comment._id);
                          }}
                          className="text-sm xl:text-base font-medium montserrat leading-5 2xl:leading-6 text-red-500 whitespace-nowrap hover:underline cursor-pointer"
                        >
                          Delete
                        </span>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                ))}
              </Table>
              {showMore && (
                <button
                  onClick={handleShowMore}
                  className="text-base lg:text-lg font-medium text-teal-500 hover:text-white bg-white hover:bg-teal-500 border border-teal-500 rounded-xl duration-500 transition-all py-2.5 px-7 mx-auto">Show more
                </button>
              )}
            </>
          ) : (
            <p>You have no comments yet!</p>
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
                <HiOutlineExclamationCircle className="h-14base-14 text-gray-400 dark:text-black mb-4 mx-auto" />
                <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this comment?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="failure" onClick={handleDeleteComment}>
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
