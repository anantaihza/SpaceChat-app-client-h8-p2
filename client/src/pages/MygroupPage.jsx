import React, { useContext, useEffect, useState } from 'react';
import CardGroup from '../components/CardGroup';
import { UserContext } from '../contexts/UserContext';
import axios from '../config/axiosInstance';
// import { MyGroupContext } from '../contexts/MyGroupContext';

export default function MygroupPage() {
  const user = useContext(UserContext);
  const [myGroups, setMyGroups] = useState([]);
  // const myGroups = useContext(MyGroupContext);

  const fetchMyGroup = async () => {
    try {
      const { data } = await axios({
        method: 'get',
        url: '/myGroups',
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setMyGroups(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchMyGroup();
  }, []);

  return (
    <div className="px-20 py-16 sm:ml-64 min-h-screen">
      {/* coding nya disini */}
      <div className="breadcrumbs text-sm mt-3 font-medium">
        <ul>
          <li className="text-slate-400">
            <a>Home</a>
          </li>
          <li className="text-slate-400">List group</li>
        </ul>
      </div>
      <h1 className="font-bold text-5xl mt-3">
        Hello <span className="text-[#6A74C9]">{user.name}</span>
      </h1>
      <p className="mt-3 text-slate-400 w-[100%] md:w-[50%]">Welcome</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
        {myGroups.map((myGroup) => {
          return <CardGroup myGroup={myGroup} />;
        })}
      </div>
    </div>
  );
}
