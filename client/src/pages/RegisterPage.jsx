import React from 'react';

export default function RegisterPage() {
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
          <h1 className="font-extrabold text-4xl text-center">Register</h1>
          <form className="mt-20">
            <label className="input input-bordered flex items-center gap-2 px-8 py-8 rounded-full mt-5">
              <b className="font-bold">Username:</b>
              <input type="email" className="grow border-none" placeholder="" />
            </label>
            <label className="input input-bordered flex items-center gap-2 px-8 py-8 rounded-full mt-5">
              <b className="font-bold">Email:</b>
              <input type="email" className="grow border-none" placeholder="" />
            </label>
            <label className="input input-bordered flex items-center gap-2 px-8 py-8 rounded-full mt-5">
              <b className="font-bold">Password:</b>
              <input type="password" className="grow border-none" placeholder="" />
            </label>
            <div className="flex justify-center mt-12">
              <button className="bg-[#6A74C9] btn px-12 text-lg rounded-full text-white">
                Register
              </button>
            </div>
          </form>
          <p className="text-center font-medium mt-8 text-gray-400">
            Already have an account?
            <a href="" className="text-[#6A74C9]">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
