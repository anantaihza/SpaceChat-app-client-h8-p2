import { createContext, useEffect, useState } from 'react';
import axios from '../config/axiosInstance';

export const GroupContext = createContext(null);

export function GroupProvider({ children }) {
  const [groups, setGroups] = useState([]);

  // let groupValue = {
  //   groups,
  //   setGroups,
  // };
  const fetchGroup = async () => {
    try {
      const { data } = await axios({
        method: 'get',
        url: '/groups',
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGroup();
  }, []);

  return (
    <GroupContext.Provider value={groups}>{children}</GroupContext.Provider>
  );
}
