import React, { useEffect, useState } from 'react';
import axios from '../config/axiosInstance';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { getUser } from '../redux/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function UpdateProfilePage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setName(user.name);
    }
  }, [user]);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSetImage = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const dataUploadImage = new FormData();
      if (name) {
        dataUploadImage.append('name', name);
      }
      if (username) {
        dataUploadImage.append('username', username);
      }
      if (image) {
        dataUploadImage.append('avatar', image);
      }

      const { data } = await axios({
        method: 'put',
        url: '/profile/update',
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
        data: dataUploadImage,
      });
      console.log(data);
      toast.success('Profile updated successfully');
      dispatch(getUser());
    } catch (error) {
      console.log(error);
      toast.error('Error updating profile.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-10 md:px-20 py-16 sm:ml-64 min-h-screen">
      <div className="flex justify-center mt-[15%]">
        <div className="bg-white p-10 rounded-3xl shadow-lg max-w-md w-full  text-center">
          <h2 className="text-2xl text-[#6A74C9] font-bold mb-4 sm:mb-6">
            EDIT PROFILE
          </h2>
          <form onSubmit={handleSetImage} className="space-y-4 sm:space-y-6">
            <label className="input input-bordered flex items-center gap-2 rounded-full">
              <span className='font-bold'>Name:</span>
              <input
                type="text"
                className="grow border-none focus:ring-transparent"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=""
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 rounded-full">
              <span className='font-bold'>Username:</span>
              <input
                type="text"
                className="w-full sm:flex-1 grow border-none focus:ring-transparent"
                defaultValue={username}
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

              <Link
                to="/"
                className="bg-neutral btn btn-md w-full sm:w-auto px-8 py-2 text-lg rounded-full text-white hover:bg-neutral-800"
              >
                CANCEL
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
