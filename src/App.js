import { useState } from "react";
import ImageCollection from "./components/imagecollection";
import ImagrtoPreview from "./components/imagetopreview";

function App() {
  const photos = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg",
    "./images/8.jpg",
    "./images/9.jpg",
    "./images/10.jpg",
  ];
  const [value, setValue] = useState(1);
  const [css, setCss] = useState("custom-css");

  const handleClick = (props) => {
    let resetValue = 0;
    // setValue((temp = value + 1));
    // console.log(value);
    switch (props) {
      case "+":
        resetValue = value + 1;
        if (resetValue >= photos.length + 1) {
          console.log(resetValue);
          return setValue(1);
        } else {
          return setValue((next) => next + 1);
        }
      case "-":
        resetValue = value - 1;
        if (resetValue <= 0) {
          return setValue(photos.length);
        } else {
          return setValue((prev) => prev + 1);
        }
      default:
        return setValue(props);
    }
  };

  let imageToDisplay = photos.filter((image, i) => (i === value - 1));
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ImagrtoPreview
        handleClick={handleClick}
        imageToDisplay={imageToDisplay}
      />
      <ImageCollection handleClick={handleClick} photos={photos} css={css}/>
    </div>
  );
}

export default App;
