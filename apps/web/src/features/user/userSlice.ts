import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  user: {};
}

const initialState: UserState = localStorage.getItem("medilink_user")
  ? JSON.parse(localStorage.getItem("medilink_user") || "")
  : null;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Object>) => {
      localStorage.setItem("medilink_user", JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    },
    destroyUser: (state) => {
      localStorage.removeItem("medilink_user");
      return { ...state };
    },
  },
});

export const { setUser, destroyUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getUser = (state: RootState) => state?.user;

export default userSlice.reducer;
