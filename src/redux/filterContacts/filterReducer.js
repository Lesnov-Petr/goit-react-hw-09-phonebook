import { createReducer } from "@reduxjs/toolkit";
import { filterContact } from "./filterAction";

const reducer = createReducer("", {
  [filterContact]: (state, { payload }) => (state = payload),
});

export default reducer;
