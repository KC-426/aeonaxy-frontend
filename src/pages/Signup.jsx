import "../App.css";
import { TextField, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignup = async (e) => {
    e.preventDefault();
    try {
      const url = `${import.meta.env.VITE_APP_BASE_URL}/user/signup`;
      console.log(url)
      const response = await axios.post(
        url,
        { name, username, email, password },
        { withCredentials: true }
      );
      console.log(response);

      if (response.data.success) {
        setName("");
        setUsername("");
        setEmail("");
        setPassword("");
        window.location.href = `/profile/${response.data.userId}`;
        toast.success('User signed up successfully', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to sign up profile', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <Paper>
      <ToastContainer />
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2">
            <img
              className="h-screen w-full object-cover"
              src="/src/images/signup.jpg"
              alt=""
            />
          </div>

          <div className="lg:w-1/2 p-20">
            <div>
              <h1 className="mt-20 text-center lg:text-left text-4xl font-semibold">
                Sign up to dribble
              </h1>
              <h3 className="text-center lg:text-left text-2xl text-red-400">
                User has already been taken
              </h3>
            </div>

            <form onSubmit={userSignup} className="mt-20">
              <div className="grid gap-6">
                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="mb-6 lg:mb-0 w-full lg:w-1/2 pr-2">
                    <label htmlFor="name" className="font-semibold text-xl">
                      Name
                    </label>
                    <TextField
                      id="name"
                      type="text"
                      fullWidth={true}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      variant="outlined"
                      className="w-full"
                    />
                  </div>

                  <div className="w-full lg:w-1/2 pl-2">
                    <label
                      htmlFor="username"
                      className="font-semibold text-xl"
                    >
                      Username
                    </label>
                    <TextField
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      variant="outlined"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="font-semibold text-xl">
                    Email
                  </label>
                  <TextField
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="font-semibold text-xl">
                    Password
                  </label>
                  <TextField
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                    className="w-full"
                  />
                </div>

                <div className="mt-6 flex items-center justify-center lg:justify-start space-x-4">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded"
                  />
                  <p className="text-gray-500 text-sm">
                    Creating an account means you're okay with our{" "}
                    <span className="text-blue-500">Terms of Service</span>,
                    privacy policy, and our default{" "}
                    <span className="text-blue-500">Notification Settings</span>
                    .
                  </p>
                </div>

                <div className="mt-20 ">
                  <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-14 rounded-md">
                    Create Account
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-6 text-gray-500 text-sm text-center">
              This site is protected by reCaptcha and the Google Privacy Policy
              and Terms of service apply.
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
}
