export default function Youtube() {
  function embed() {
    var id = document.getElementById("id");
    var frame = document.getElementById("frame");
    if (id.value.length === 11) {
      frame.src = `https://youtube.com/embed/${id.value}?rel=0`;
    }
    else {
      alert("Please format the id correctly...");
    }
  }
  return (
    <div className="Youtube" id="youtube">
      <h1>Youtube Video Viewer</h1>
      <iframe
        src="//youtube.com/embed/MMkhUqLe82Q?rel=0"
        className="youtubeFrame shadow"
        id="frame"
        allowFullScreen
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        frameBorder={0}
      ></iframe>
      <div>
        <input
          id="id"
          className="input mr"
          type="text"
          placeholder="Youtube ID"
          name="YoutubeLink"
        />
        <button onClick={embed} className="button" type="submit" id="submitFrame">
          Submit
        </button>
      </div>
    </div>
  );
}
