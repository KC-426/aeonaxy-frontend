import * as React from "react";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import Header from "../components/header";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom"; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Profile() {
  const { userId } = useParams();
  const [location, setLocation] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [avatarUrl, setAvatarUrl] = React.useState("");

  const addProfile = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("location", location);
      if (image) { 
        formData.append("file", image);
      }

      const response = await axios.put(
        `${import.meta.env.VITE_APP_BASE_URL}/user/profile/${userId}`, 
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setLocation("");
        setImage(null);
        setAvatarUrl("");
        toast.success('Profile updated successfully', {
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
      toast.error('Failed to update profile', {
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
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]; 
    setImage(selectedImage);
    setAvatarUrl(URL.createObjectURL(selectedImage)); 
  };


  return (
    <>
  <Header />
      <div className="container mx-auto px-4 mt-10 md:mt-20">
      <ToastContainer />
        <div>
          <h1 className="font-bold text-3xl md:text-5xl">
            Welcome! Let's create your profile
          </h1>
        </div>
        <div className="mt-5">
          <span className="text-gray-400">
            Let others get to know you better! You can do these later
          </span>
        </div>

        <div className="image-section mt-10">
          <h2 className="font-bold text-lg md:text-2xl">Add an avatar</h2>
          <div className="flex flex-col md:flex-row items-center mt-5">
            <div className="mb-5 md:mb-0">
              <Stack direction="row">
                <Avatar
                  alt="Avatar"
                  src={avatarUrl}
                  sx={{ width: 150, height: 150 }}
                />
              </Stack>
            </div>
            <div>
              <input
                type="file"
                accept="image/*"
                id="avatar"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <label
                htmlFor="avatar"
                className="border p-3 md:ml-5 font-bold py-3 px-12 rounded-md mt-5 md:mt-0 cursor-pointer"
              >
                Choose image
              </label>
            </div>
          </div>
        </div>

        <form onSubmit={addProfile}>
          <div>
            <h1 className="mt-10 font-bold text-lg md:text-xl">
              Add your location
            </h1>
            <div className="mt-3">
              <TextField
                fullWidth
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-10 mb-20">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-14 md:px-24 rounded-md"
            >
              Next
            </button>
            <Link to="/find-work" className="ml-4 text-gray-500 font-semibold">
              Skip (Go to Find Work)
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}