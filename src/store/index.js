import { configureStore, createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: true,
  },
  reducers: {
    changeTheme(state, action) {
      state.theme = !action.payload;
    },
  },
});

const store = configureStore({
  reducer: { theme: themeSlice.reducer },
});

export { store };
export const { changeTheme } = themeSlice.actions;
