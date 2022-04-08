import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

interface IFilters {
  search: string;
  location: string;
  isFullTiem: boolean;
}

interface IInitialState {
  isModal: boolean;

  filters: IFilters;
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
    setFiters(state, action: PayloadAction<IFilters>) {
      state.filters = action.payload;
    },
  },
});

export const jobActions = jobSlice.actions;

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({ reducer: { jobs: jobSlice.reducer } });

export default store;
