import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../config/axiosInstance';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerLogin = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios({
        method: 'post',
        url: '/login',
        data: {
          email,
          password,
        },
      });

      console.log(data);

      localStorage.setItem('access_token', data.access_token);

      toast.info('Login success');

      navigate('/');
    } catch (error) {
      // error.response.data.message.map((msg) => toast.error(msg));
      toast.error(error.response.data.message)
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="h-screen flex">
      <div className="flex w-[75%] h-[70%] m-auto rounded-3xl drop-shadow-xl">
        <div className="w-[50%] bg-[#6A74C9] rounded-l-3xl p-16 relative">
          <h1 className="font-extrabold text-5xl text-[#FFFFFF]">
            Welcome to <br />
            SpaceChat
          </h1>
          <p className="mt-8 text-[#FFFFFF]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea
            quod enim assumenda perspiciatis reiciendis, repudiandae
          </p>
          <img src="/group.png" className="absolute bottom-0 w-[80%]" alt="" />
        </div>
        <div className="w-[50%] bg-[#FFFFFF] rounded-r-3xl p-16">
          <h1 className="font-extrabold text-4xl text-center">Login</h1>
          <form className="mt-20" onSubmit={handlerLogin}>
            <label className="input input-bordered flex items-center gap-2 px-8 py-8 rounded-full mt-5">
              <b className="font-bold">Email:</b>
              <input
                type="email"
                className="grow border-none focus:ring-transparent"
                placeholder=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 px-8 py-8 rounded-full mt-5">
              <b className="font-bold">Password:</b>
              <input
                type="password"
                className="grow border-none focus:ring-transparent"
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="flex justify-center mt-12">
              <button className="bg-[#6A74C9] btn px-12 text-lg rounded-full text-white">
                Login
              </button>
            </div>
          </form>
          <p className="text-center font-medium mt-8 text-gray-400">
            Don’t have an account?{' '}
            <Link to="/register" className="text-[#6A74C9]">
              Create
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}