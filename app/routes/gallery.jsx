import GalleryItem from "../GalleryItem";

export default function Gallery() {
  return (
    <div id="Main" className="galleryMain">
      <h1>Simpson Sells</h1>
      <span>If you don't buy this, then your a SIMP son.</span>
      <span>(Use light mode for authentic experience)</span>
      <GalleryItem img="../art/Colorless Homer.png" />
      <GalleryItem img="../art/Homer is Fine.png" />
      <GalleryItem img="../art/Colored Homer.png" />
      <GalleryItem img="../art/Retro Homer.png" />
      <GalleryItem img="../art/Fred Simmer.png" />
      <GalleryItem img="../art/homer pregnant with homer inside homers eyes that is throwing up homer thats going to fight homer.png" />
    </div>
  );
}
