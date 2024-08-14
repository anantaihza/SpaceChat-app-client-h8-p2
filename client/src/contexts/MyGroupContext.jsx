import { createContext, useEffect, useState } from 'react';
import axios from '../config/axiosInstance';

export const MyGroupContext = createContext(null);

export function MyGroupProvider({ children }) {
  const [myGroups, setMyGroups] = useState([]);

  // let groupValue = {
  //   myGroups,
  //   setMyGroups,
  // };
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
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyGroup();
  }, []);

  return (
    <MyGroupContext.Provider value={myGroups}>
      {children}
    </MyGroupContext.Provider>
  );
}
