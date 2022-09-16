import ImageCollection from "./components/imagethumbnail";
import ImagrtoPreview from "./components/imagetopreview";
import { useState } from "react";

function Homepage({ photos }) {
  const [index, setIndex] = useState(0);
  const handleClick = (props) => {
    switch (props) {
      case "+":
        if (index >= photos.length - 1) setIndex(0);
        // console.log(next);
        else setIndex((next) => next + 1);
        break;
      case "-":
        if (index <= 0) setIndex(photos.length - 1);
        else setIndex((prev) => prev - 1);
        break;
      default:
        setIndex(props);
        break;
    }
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ImagrtoPreview
        handleClick={handleClick}
        imageToDisplay={photos}
        index={index}
      />
      <ImageCollection
        handleClick={handleClick}
        thumbnailImages={photos}
        index={index}
      />
    </div>
  );
}

export default Homepage;
