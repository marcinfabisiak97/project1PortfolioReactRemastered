import { createSlice } from "@reduxjs/toolkit";
import cv from "../../../assets/cv Marcin Fabisiak FE.pdf";
interface InitialState {
  author: string;
  email: string;
  phone: string;
  gitHub: string;
  cv: string;
}
const initialState: InitialState = {
  author: "Marcin Fabisiak",
  email: "marcinfabisiak123@gmail.com",
  phone: "48 604 132 689",
  gitHub: "https://github.com/marcinfabisiak97",
  cv: cv,
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export default dataSlice.reducer;
