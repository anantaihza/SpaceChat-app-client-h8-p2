import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="px-20 py-16 sm:ml-64 min-h-screen">
      {/* coding nya disini */}
      <div className="breadcrumbs text-sm mt-3 font-medium">
        <ul>
          <li className="text-slate-400">
            <Link to="/">Home</Link>
          </li>
          <li className="text-slate-400">List group</li>
        </ul>
      </div>
      <h1 className="font-bold text-5xl mt-3">
        Hello <span className="text-[#6A74C9]">Ananta</span>
      </h1>
      <p className="mt-3 text-slate-400 w-[100%] md:w-[50%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et quasi
        expedita ipsum eum nemo, commodi optio, similique modi maiores tempora,
        cumque.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
        
        <div className="card shadow-xl hover:shadow-[0px_20px_50px_10px_rgba(165,_39,_255,_0.48)] bg-center hover:scale-110 transition ease-in-out delay-50 duration-300 relative bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="p-10 h-56 text-white relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#6A74C9] to-transparent">
              <div className="p-10 h-full flex justify-center">
                <h2 className="text-center my-auto font-extrabold text-2xl">
                  CodeMasters
                </h2>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent to-transparent transition-opacity duration-300 ease-in-out hover:from-[#6A74C9] hover:to-[#1E2027] opacity-0 hover:opacity-100">
              <div className="p-10">
                <p className="line-clamp-4">
                  A community that encourages members to become coding experts
                  through weekly challenges and mentoring.
                </p>
                <button className="btn btn-sm rounded-full px-8 mt-5">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card shadow-xl hover:shadow-[0px_20px_50px_10px_rgba(165,_39,_255,_0.48)] bg-center hover:scale-110 transition ease-in-out delay-50 duration-300 relative bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1622935694506-947278a89006?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="p-10 h-56 text-white relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#6A74C9] to-transparent">
              <div className="p-10 h-full flex justify-center">
                <h2 className="text-center my-auto font-extrabold text-2xl">
                  CodeMasters
                </h2>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent to-transparent transition-opacity duration-300 ease-in-out hover:from-[#6A74C9] hover:to-[#1E2027] opacity-0 hover:opacity-100">
              <div className="p-10">
                <p className="line-clamp-4">
                  A community that encourages members to become coding experts
                  through weekly challenges and mentoring.
                </p>
                <button className="btn btn-sm rounded-full px-8 mt-5">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow-xl hover:shadow-[0px_20px_50px_10px_rgba(165,_39,_255,_0.48)] bg-center hover:scale-110 transition ease-in-out delay-50 duration-300 relative bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="p-10 h-56 text-white relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#6A74C9] to-transparent">
              <div className="p-10 h-full flex justify-center">
                <h2 className="text-center my-auto font-extrabold text-2xl">
                  CodeMasters
                </h2>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent to-transparent transition-opacity duration-300 ease-in-out hover:from-[#6A74C9] hover:to-[#1E2027] opacity-0 hover:opacity-100">
              <div className="p-10">
                <p className="line-clamp-4">
                  A community that encourages members to become coding experts
                  through weekly challenges and mentoring.
                </p>
                <button className="btn btn-sm rounded-full px-8 mt-5">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
