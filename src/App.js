import { useState } from "react";
import ImageCollection from "./components/imagecollection";
import ImagrtoPreview from "./components/imagetopreview";

function App() {
  const photos = [
    "./images/1.jpg",
    "./images/2.jpg",
    // "./images/3.jpg",
    // "./images/4.jpg",
    // "./images/5.jpg",
    // "./images/6.jpg",
    // "./images/7.jpg",
    // "./images/8.jpg",
    // "./images/9.jpg",
    // "./images/10.jpg",
  ];
  const [value, setValue] = useState(1);

  const handleClick = (props) => {
    let newIndex = 0;
    let x = 0;
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
          return setValue((newIndex = value + 1));
        }
      case "-":
        resetValue = value - 1;
        if (resetValue <= 0) {
          return setValue(photos.length);
        } else {
          return setValue((newIndex = value - 1));
        }
      default:
        return null;
    }
  }

  let imageToDisplay = photos.filter((image, i) => {
    if (i === value - 1) return image;
  });
  return (
    <div style={{height:"100vh", width:"100%"}}>
    <ImagrtoPreview handleClick = {handleClick} imageToDisplay = {imageToDisplay}/>
    <ImageCollection photos = {photos}/>
    </div>
  );
}

export default App;
