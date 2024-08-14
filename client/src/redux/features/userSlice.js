import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from '../../config/axiosInstance';

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const getUser = () => async (dispatch) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: '/profile',
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });

    dispatch(setUser(data));
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export default userSlice.reducer;
