import React from 'react';
import { Link } from 'react-router-dom';

export default function CardGroup({ myGroup, handlerDelete }) {
  return (
    <div className="card shadow-xl hover:shadow-[0px_20px_50px_10px_rgba(165,_39,_255,_0.48)] bg-center hover:scale-110 transition ease-in-out delay-50 duration-300 relative bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="p-10 h-56 text-white relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#6A74C9] to-transparent">
          <div className="p-10 h-full flex justify-center">
            <h2 className="text-center my-auto font-extrabold text-2xl">
              {myGroup.Group.name}
            </h2>
          </div>
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent to-transparent transition-opacity duration-300 ease-in-out hover:from-[#6A74C9] hover:to-[#1E2027] opacity-0 hover:opacity-100">
          <div className="p-10 flex flex-col">
            <div className="flex flex-col">
              <Link to={`/my-groups/${myGroup.Group.id}`} className="btn btn-sm rounded-full px-8 mt-5">
                Enter The Chat
              </Link>
              <button className="btn btn-sm rounded-full px-8 mt-5" onClick={() => handlerDelete(myGroup.id)}>
                Leave
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
