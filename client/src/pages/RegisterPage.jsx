import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../config/axiosInstance';
import { toast } from 'react-toastify';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerRegister = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios({
        method: 'post',
        url: '/register',
        data: {
          username,
          name,
          email,
          password,
        },
      });
      console.log(data);

      toast.success('Register success');
      navigate('/login');
    } catch (error) {
      error.response.data.message.map((msg) => toast.error(msg));
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="h-screen flex">
      <div className="flex w-[75%] h-[70%] m-auto rounded-3xl drop-shadow-xl">
        <div className="hidden lg:block w-[50%] bg-[#6A74C9] rounded-l-3xl p-16 relative">
          <h1 className="font-extrabold text-5xl text-[#FFFFFF]">
            Welcome to <br />
            SpaceChat
          </h1>
          <p className="mt-8 text-[#FFFFFF]">
            SpaceChat is a platform that connects professionals and programming
            enthusiasts from diverse backgrounds and regions.
          </p>
          <img src="/group.png" className="absolute bottom-0 w-[80%]" alt="" />
        </div>
        <div className="w-[100%] lg:w-[50%] lg:bg-[#FFFFFF] rounded-r-3xl py-16 lg:px-16">
          <h1 className="font-extrabold text-4xl text-center">Register</h1>
          <h1 className="lg:hidden font-extrabold text-4xl text-center">
            SpaceChat
          </h1>
          <form className="mt-10" onSubmit={handlerRegister}>
            <label className="input input-bordered flex items-center gap-2 px-8 py-7 rounded-full mt-5">
              <b className="font-bold">Name:</b>
              <input
                type="text"
                className="grow border-none focus:ring-transparent"
                placeholder=""
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 px-8 py-7 rounded-full mt-5">
              <b className="font-bold">Username:</b>
              <input
                type="text"
                className="grow border-none focus:ring-transparent"
                placeholder=""
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 px-8 py-7 rounded-full mt-5">
              <b className="font-bold">Email:</b>
              <input
                type="email"
                className="grow border-none focus:ring-transparent"
                placeholder=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 px-8 py-7 rounded-full mt-5">
              <b className="font-bold">Password:</b>
              <input
                type="password"
                className="grow border-none focus:ring-transparent"
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="flex justify-center mt-5">
              <button
                type="submit"
                className="bg-[#6A74C9] btn px-12 text-lg rounded-full text-white"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-center font-medium mt-3 text-gray-400">
            Already have an account?
            <Link to="/login" className="text-[#6A74C9]">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
