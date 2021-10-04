import React from "react";

// import img from "../../../assets/images/charlie-harris-oU4cxfzF66s-unsplash.jpg";

import { connect } from "react-redux";
import { removeImage } from "../../../redux/Images/images-actions";

const Image = ({ item, removeImage }) => {
  return (
    <div
      data-title={item.alt}
      className="item col-lg-3 col-md-6 col-12 mb-3 mb-lg-0"
    >
      <div className="card img-fluid p-0 mb-3" style={{ width: "500px" }}>
        <img
          className="card-img-top rounded"
          src={item.img}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div
          className="card-img-overlay w-100 h-100"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="d-flex image-wrapper justify-content-end">
            <a
              onClick={() => {
                removeImage(item.id);
              }}
              href="#"
              className="btn btn-sm btn-danger"
            >
              delete
            </a>
          </div>
          <p className="card-text text-white">{item.alt}</p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeImage: (image) => dispatch(removeImage(image)),
  };
};

export default connect(null, mapDispatchToProps)(Image);
