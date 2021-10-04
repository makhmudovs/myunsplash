import React, { useState } from "react";
import uniqid from "uniqid";

import { connect } from "react-redux";
import { addImage, setTerm } from "../../redux/Images/images-actions";

const Navbar = ({ addImage, setTerm }) => {
  const [label, setLabel] = useState("");
  const [imgAddr, setImgAddr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    document.querySelector(".msg").classList.add("d-none");

    const rand = Math.floor(Math.random() * 30);
    console.log(rand);
    const data = {
      alt: label,
      img: imgAddr,
      id: uniqid(),
    };
    addImage(data);
    document.querySelector(".msg").classList.remove("d-none");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        My Unsplash
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="d-flex my-2">
          <input
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            className="form-control me-2"
            type="search"
            placeholder="Search By Name"
            aria-label="Search"
            id="search_input"
          />
        </form>
        <div className="ms-auto my-2">
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-success"
          >
            Add a Photo
          </button>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body p-3">
              <h4 className="text-center">Add a Photo</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <label className="mb-2" htmlFor="label">
                    Label
                  </label>
                  <input
                    onChange={(e) => {
                      setLabel(e.target.value);
                    }}
                    required
                    type="text"
                    className="form-control"
                    placeholder="Label"
                    id="label"
                  />
                </div>
                <div className="form-group">
                  <label className="mb-2" htmlFor="url">
                    Photo Url
                  </label>
                  <input
                    onChange={(e) => {
                      setImgAddr(e.target.value);
                    }}
                    required
                    type="text"
                    className="form-control"
                    placeholder="https://www.somephoto.com/somephoto_url"
                    id="url"
                  />
                </div>
                <div className="my-5">
                  <p className="msg text-center display-4 text-success d-none">
                    Added Successfully Can close the window now !
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add Photo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addImage: (image) => dispatch(addImage(image)),
    setTerm: (term) => dispatch(setTerm(term)),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
