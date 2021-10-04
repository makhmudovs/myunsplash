import { combineReducers } from "redux";

import ImgReducer from "./Images/images-reducer";

const rootReducer = combineReducers({
  img: ImgReducer
});

export default rootReducer;
