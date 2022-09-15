import "../index.css";
function ImageCollection({ handleClick, photos }) {
  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
        backgroundColor: "red",
        position: "absolute",
        top: "90%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {photos.map((photo, i) => (
        <img className="image-collection-div" onClick={() =>handleClick(i+1)} key={i} src={photo}></img>
      ))}
    </div>
  );
}

export default ImageCollection;
