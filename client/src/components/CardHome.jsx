import React from 'react';
import axios from '../config/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function CardHome({ group }) {
  const navigate = useNavigate();

  const handlerJoin = async (id) => {
    try {
      const { data } = await axios({
        method: 'post',
        url: `/myGroups/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      console.log(data);
      toast.info('Success to join group');

      navigate('/my-groups');
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div
      className="card shadow-xl hover:shadow-[0px_20px_50px_10px_rgba(165,_39,_255,_0.48)] bg-center hover:scale-110 transition ease-in-out delay-50 duration-300 relative bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url(' + group.imgGroupUrl + ')' }}
    >
      <div className="p-10 h-56 text-white relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#6A74C9] to-transparent">
          <div className="p-10 h-full flex justify-center">
            <h2 className="text-center my-auto font-extrabold text-2xl">
              {group.name}
            </h2>
          </div>
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent to-transparent transition-opacity duration-300 ease-in-out hover:from-[#6A74C9] hover:to-[#1E2027] opacity-0 hover:opacity-100">
          <div className="p-10">
            <p className="line-clamp-4">{group.description}</p>
            <button
              onClick={() => handlerJoin(group.id)}
              className="btn btn-sm rounded-full px-8 mt-5"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
