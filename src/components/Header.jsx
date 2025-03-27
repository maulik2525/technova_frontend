import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      localStorage.setItem("avatar", "");
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) return;
      dispatch(signoutSuccess());
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className="fixed top-0 left-0 z-50 w-full border-b-2 bg-white dark:bg-gray-900 shadow-sm">
          <div className="relative z-50 flex items-center gap-2">
            <a href="/">
              <img
                src="/logo3.jpg"
                alt="TechNova Logo"
                className="size-16 rounded-full"
              />
            </a>
          </div>
          
          <Navbar.Collapse>
              <Navbar.Link
                active={path === "/"}
                as="div"
                className="text-base 2xl:text-lg font-medium text-gray-800 hover:border border fraunces"
              >
                <Link to="/">Home</Link>
              </Navbar.Link>
              <Navbar.Link
                active={path === "/about"}
                as="div"
                className="text-base 2xl:text-lg font-medium text-gray-800 fraunces"
              >
                <Link to="/about">About</Link>
              </Navbar.Link>
              {currentUser && (
                <Navbar.Link
                  active={path === "/create-post"}
                  as="div"
                  className="text-base 2xl:text-lg font-medium text-gray-800 fraunces"
                >
                  <Link to="/create-post">Create Blog</Link>
                </Navbar.Link>
              )}
              <Navbar.Link
                active={path === "/search"}
                as="div"
                className="text-base 2xl:text-lg font-medium text-gray-800 fraunces"
              >
                <Link to="/search">All Blogs</Link>
              </Navbar.Link>             
              {currentUser?.isAdmin && (
                <Navbar.Link
                  active={path === "/dashboard"}
                  as="div"
                  className="text-base 2xl:text-lg font-medium text-gray-800 fraunces"
                >
                  <Link to="/dashboard?tab=dash">Admin Dashboard</Link>
                </Navbar.Link>
              )}
          </Navbar.Collapse>
          <form
            onSubmit={handleSubmit}
            className="hidden lg:flex items-center gap-2 w-full max-w-40"
          >
            <TextInput
              type="text"
              placeholder="Search articles..."
              rightIcon={AiOutlineSearch}
              className="w-full text base font-medium text-gray-800 montserrat outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          <div className="flex items-center gap-4 md:order-2">
            {currentUser ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="user"
                    img={currentUser.profilePicture || "/default-avatar.png"}
                    rounded
                    className="cursor-pointer"
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm font-semibold text-gray-800 dark:text-white">
                    @{currentUser.username}
                  </span>
                  <span className="block text-sm text-gray-600 dark:text-gray-400 truncate">
                    {currentUser.email}
                  </span>
                </Dropdown.Header>
                <Link to="/dashboard?tab=profile">
                  <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
              </Dropdown>
            ) : (
              <Link to="/sign-in">
                <Button gradientDuoTone="purpleToBlue" 
                className="montserrat text-base font-medium bg-gradient-to-r from-[#2aceb6] to-blue-400 border border-transparent hover:bg-white"
                outline>
                  Sign In
                </Button>
              </Link>
            )}
            <Navbar.Toggle />
          </div>
    </Navbar>
  );
}
