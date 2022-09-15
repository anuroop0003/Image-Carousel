function ImagrtoPreview({handleClick, imageToDisplay}) {
  return (
    <div id="preview-container">
      <button id="btn-prev" onClick={() => handleClick("-")}>{`<`}</button>
      <img src={imageToDisplay}></img>
      <button id="btn-next" onClick={() => handleClick("+")}>{`>`}</button>
    </div>
  );
}

export default ImagrtoPreview;
