import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isMobileNavOpen: boolean;
}

const initialState: UiState = {
  isMobileNavOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileNav: (state) => {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },
    setMobileNav: (state, action: PayloadAction<boolean>) => {
      state.isMobileNavOpen = action.payload;
    },
  },
});

export const { toggleMobileNav, setMobileNav } = uiSlice.actions;
export default uiSlice.reducer;
