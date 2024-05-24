import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  user: {};
}

// Define the initial state using that type
const initialState: UserState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Object>) => {
      return {
        user: action.payload,
      };
    },
    destroyUser: (state) => {
      state.user = {};
    },
  },
});

export const { setUser, destroyUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
