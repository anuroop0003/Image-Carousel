import "../index.css";
function ImageCollection({ handleClick, photos, css, imageToDisplay}) {
  return (
    <div
      style={{
        width: "100vw",
        height: "10vh",
        backgroundColor: "#1A2421",
        position: "absolute",
        top: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        overflow:"auto"
      }}
    >
      {photos.map((photo, i) => (
        <img className="image-collection" onClick={() =>handleClick(i+1)} key={i} alt={i} src={photo}></img>
      ))}
    </div>
  );
}

export default ImageCollection;
