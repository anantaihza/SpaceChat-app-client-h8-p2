import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { GroupProvider } from '../contexts/GroupContext';
import { UserProvider } from '../contexts/UserContext';

export default function MainLayout() {
  return (
    <>
      <UserProvider>
        <Sidebar />
        <GroupProvider>
          <Outlet />
        </GroupProvider>
      </UserProvider>

      {/* <GroupContext.Provider value={groups}>
        <Outlet />
      </GroupContext.Provider> */}
    </>
  );
}
