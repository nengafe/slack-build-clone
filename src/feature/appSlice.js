import {createSlice} from "@reduxjs/toolkit";

export const appSlice=createSlice({
    name:'apps',
    initialState:{
        roomId:null,
    },
    reducer:{
        enterRoom:(state,action)=>{state.roomId=action.payload.roomId;},
    },
});

export const {enterRoom}=appSlice.actions;
export const selectRoomId=state =>state.app.roomId;
export default appSlice.reducer;
