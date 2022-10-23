import { createSlice } from "@reduxjs/toolkit";
import profile from "./profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        saveProfile(state, action) {
            const profile = action.payload;
            state.name = profile[0];
            state.bio = profile[1];
            state.locaiton = profile[2];
            state.website = profile[3];
            state.dateOfBirth = profile[4];
        }
    }
});

export const {saveProfile} = profileSlice.actions;
export default profileSlice.reducer;