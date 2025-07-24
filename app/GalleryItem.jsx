export default function GalleryItem(props) {
  return (
    <div className="galleryFrame">
      <div className="galleryItem">
        <img src={props.img} alt={props.name} />
      </div>
      <a href={props.img} download>
        Download
      </a>
    </div>
  );
}
