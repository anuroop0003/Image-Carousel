import "../index.css";
function ImageThumbnail({ handleClick, thumbnailImages, index }) {

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
        justifyContent: "center",
        overflow: "auto",
      }}
    >
      {thumbnailImages.map((photo, i) => (
        <img
          className="thumbnail-image"
          style={index === i ? { boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(35, 203, 49) 0px 0px 0px 3px" } : null}
          onClick={() => handleClick(i)}
          key={i}
          alt=""
          src={photo}
        ></img>
      ))}
    </div>
  );
}

export default ImageThumbnail;
