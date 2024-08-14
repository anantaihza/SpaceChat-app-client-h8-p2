import React, { useState } from "react";
import axios from "../config/axiosInstance";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function UpdateProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSetImage = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const dataUploadImage = new FormData();
      dataUploadImage.append("avatar", image);

      const { data } = await axios({
        method: "put",
        url: "/profile/update",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
        data: dataUploadImage,
      });
      console.log(data);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error updating profile.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[#EFF2F9]">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 sm:mx-6 lg:mx-8 text-center">
        <h2 className="text-2xl text-[#6A74C9] font-bold mb-4 sm:mb-6">
          EDIT PROFILE
        </h2>
        <form onSubmit={handleSetImage} className="space-y-4 sm:space-y-6">
          <label className="input input-bordered input-md flex flex-col sm:flex-row items-start sm:items-center rounded-full mt-5">
            <b className="font-bold mb-2 sm:mb-0 sm:mr-2">Username:</b>
            <input
              type="text"
              className="w-full sm:flex-1 grow border-none focus:ring-transparent"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder=""
            />
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full file-input-md rounded-3xl"
            onChange={handleFileChange}
          />
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              type="submit"
              className="bg-[#6A74C9] btn btn-md w-full sm:w-auto px-8 py-2 text-lg rounded-full text-white hover:bg-[#5a66b2]"
            >
              UPDATE
            </button>

            <Link to='/'  className="bg-neutral btn btn-md w-full sm:w-auto px-8 py-2 text-lg rounded-full text-white hover:bg-neutral-800">
              CANCEL
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
