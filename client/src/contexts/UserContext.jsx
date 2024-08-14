import { createContext, useEffect, useState } from 'react';
import axios from '../config/axiosInstance';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState([]);

  // let groupValue = {
  //   user,
  //   setUser,
  // };
  const fetchUser = async () => {
    try {
      const { data } = await axios({
        method: 'get',
        url: '/profile',
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setUser(data);
      // console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
}
