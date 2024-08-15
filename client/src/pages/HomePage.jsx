import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GroupContext } from '../contexts/GroupContext';
// import { UserContext } from '../contexts/UserContext';'
import { useSelector } from 'react-redux';
import CardHome from '../components/CardHome';

export default function HomePage() {
  const groups = useContext(GroupContext);
  // const user = useContext(UserContext)
  const { user } = useSelector((state) => state.user);

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
        Hello <span className="text-[#6A74C9]">{user.name}</span>
      </h1>
      <p className="mt-3 text-slate-400 w-[100%] md:w-[50%]">
        Join various community groups to discuss, share knowledge, and learn
        together based on your specific interests in technology.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
        {groups.map((group) => {
          return <CardHome key={group.id} group={group} />;
        })}
      </div>
    </div>
  );
}
