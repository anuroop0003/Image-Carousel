function ImagetoPreview({ handleClick, imageToDisplay, index}) {
  return (
    <div id="preview-container">
      <button id="btn-prev" onClick={() => handleClick("-")}>{`<`}</button>
      <img src={imageToDisplay[index]} alt=""></img>
      <button id="btn-next" onClick={() => handleClick("+")}>{`>`}</button>
    </div>
  );
}

export default ImagetoPreview;
