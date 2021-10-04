import React, { useEffect } from "react";
import Image from "./Image/Image";



const Images = ({ images, term }) => {
  useEffect(() => {
    const items = document.querySelectorAll(".item");
    if (term.length >= 1) {
      items.forEach((element) => {
        if (
          !element.dataset.title
            .trim()
            .toLowerCase()
            .includes(term.trim().toLowerCase())
        ) {
          element.classList.add("d-none");
        }
      });
    } else {
      items.forEach((item) => item.classList.remove("d-none"));
    }
  }, [term, images]);

  return (
    <div className="row mt-5">
      {images.map((item) => (
        <Image key={item.id} item={item} />
      ))}
    </div>
  );
};



export default Images;
