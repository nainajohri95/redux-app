import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageSlice";
import noteSlice from "./redux/slices/noteSlice";

export default configureStore({
  reducer: {
    messageReducer, //here key and value are same as messageReducre
    notesReducer: noteSlice,
  },
});

//we are getting messageReducer from CreateSlice
