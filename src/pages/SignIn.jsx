import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="h-screen flex items-center">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1 space-y-1 lg:space-y-5">
            <Link to="/">
              <img src="/logo3.jpg" alt="" className="size-16 lg:size-20 mx-auto md:mx-0"/>
            </Link>  
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold lg:font-bold text-center md:text-start text-[#2aceb6] fraunces">
              <span className=" text-blue-500">
                Tech
              </span>
              Nova
            </p>
            <p className="text-sm lg:text-base font-medium text-center md:text-start text-gray-500 montserrat">
              You can sign in with your email and password or with Google.
            </p>
          </div>
          <div className="flex-1">
            <form className="flex flex-col gap-4 text-base font-medium fraunces" onSubmit={handleSubmit}>
              <div>
                <Label value="Your email" />
                <TextInput
                  type="email"
                  placeholder="name@company.com"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="Your password" />
                <TextInput
                  type="password"
                  placeholder="**********"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <Button
                gradientDuoTone="purpleToPink"
                className="montserrat text-base font-medium bg-gradient-to-r from-[#2aceb6] to-blue-400 border border-transparent hover:bg-transparent"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
            <div className="flex gap-2 text-base font-medium montserrat mt-5 justify-center">
              <span>Dont Have an account?</span>
              <Link to="/sign-up" className="text-blue-500 font-semibold">
                Sign Up
              </Link>
            </div>
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
    </div>
  );
}
