import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  isModal: boolean;

  filters: {
    search: string;
    location: string;
    isFullTiem: boolean;
  };
}

const initialState: IInitialState = {
  isModal: false,

  filters: {
    search: '',
    location: '',
    isFullTiem: false,
  },
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    toggleModal(state) {
      state.isModal = !state.isModal;
    },
  },
});

export const jobActions = jobSlice.actions;

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({ reducer: { jobs: jobSlice.reducer } });

export default store;
