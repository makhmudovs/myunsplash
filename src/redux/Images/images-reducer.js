import * as actionTypes from "./images-types";

const INITIAL_STATE = {
  images: [
    {
      id: 1,
      img: "https://live.staticflickr.com/65535/51527808770_cb71f3283b_c.jpg",
      alt: "Balcony Veranda",
    },
    {
      id: 3,
      img: "https://live.staticflickr.com/65535/51361395778_b0781ef88a_c.jpg",
      alt: "An Ant drinking water from the plant",
    },
    {
      id: 2,
      img: " https://live.staticflickr.com/65535/51388271634_0da6c3d993_c.jpg",
      alt: "Watery Field in the cloudy sky",
    },
    {
      id: 4,
      img: "https://live.staticflickr.com/65535/51521917462_86422a30db_c.jpg",
      alt: "Night by the Lake",
    },
    {
      id: 5,
      img: "https://live.staticflickr.com/1820/43827005971_ff2f9e030c_c.jpg",
      alt: "some image",
    },
    {
      id: 6,
      img: "https://live.staticflickr.com/65535/51525864162_56171034b4_c.jpg",
      alt: "some image",
    },
    {
      id: 7,
      img: "https://live.staticflickr.com/65535/51527263621_a9a9eba695_c.jpg",
      alt: "some image",
    },
    {
      id: 8,
      img: "https://live.staticflickr.com/65535/51431507151_114c347060_c.jpg",
      alt: "some image",
    },
  ],
  searchTerm: "",
};

const imageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_IMAGES:
      return {
        ...state,
      };
    case actionTypes.ADD_IMAGE:
      return {
        ...state,
        images: [
          ...state.images,
          {
            id: action.payload.image.id,
            img: action.payload.image.img,
            alt: action.payload.image.alt,
          },
        ],
      };
    case actionTypes.REMOVE_IMAGE:
      console.log(action.payload);
      return {
        ...state,
        images: state.images.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.SET_TERM:
      return {
        ...state,
        searchTerm: action.payload.term,
      };
    default:
      return state;
  }
};

export default imageReducer;
