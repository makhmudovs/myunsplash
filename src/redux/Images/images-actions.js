import * as actionTypes from "./images-types";

export const setImage = (image) => {
  return {
    type: actionTypes.SET_IMAGES,
    payload: {
      image,
    },
  };
};

export const addImage = (image) => {
  return {
    type: actionTypes.ADD_IMAGE,
    payload: {
      image,
    },
  };
};

export const removeImage = (id) => {
  return {
    type: actionTypes.REMOVE_IMAGE,
    payload: {
      id,
    },
  };
};

export const setTerm = (term) => {
  return {
    type: actionTypes.SET_TERM,
    payload: {
      term,
    },
  };
};
