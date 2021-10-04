import Navbar from "./components/Navbar/Navbar";
import Images from "./components/Images/Images";
import "./styles.css";

import { connect } from "react-redux";

function App({ images, term }) {
  return (
    <div className="App container pt-4">
      <Navbar />
      <Images term={term} images={images} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    images: state.img.images,
    term: state.img.searchTerm,
  };
};

export default connect(mapStateToProps)(App);
