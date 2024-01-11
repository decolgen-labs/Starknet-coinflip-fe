import { createSlice } from '@reduxjs/toolkit';

import { getItemFromLocal } from './user-helper';
import { IInitialState } from './user-interface';

const initialState: IInitialState = {
  user: getItemFromLocal('user'),
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const { setUser, setUserLoading } = userSlice.actions;
