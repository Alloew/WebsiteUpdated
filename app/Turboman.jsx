function PBtn(props) {
  function changeVersion() {
    var frame = document.getElementById("turbomanFrame");
    frame.src = `/turboman/${props.version}/index.html`;
    frame.style.display = "flex";
    var verElem = document.getElementById("version");
    if (verElem) {
      verElem.innerText = `Turboman - ${props.version}`;
    }
  }
  return (
    <button
      style={{ background: props.color }}
      onClick={changeVersion}
      id="pickButton"
      className="button"
    >
      {props.name ? props.name : props.version}
    </button>
  );
}

export default function Turboman() {
  return (
    <div className="Turboman">
      <h3 id="version"></h3>
      <iframe
        id="turbomanFrame"
        className="gameFrame"
        src={``}
        style={{ display: "none" }}
      />
      <div className="versionPick">
        <div className="versionRow">
          <div className="versionColumn">
            <span>Turboman 1</span>
            <PBtn name="Original" version="V1.0S5" />
            <details className="versionColumn">
              <summary>More</summary>
              <PBtn version="V1.0S5" />
              <PBtn version="V1.0S4" />
              <PBtn version="V1.0S4.1" />
              <PBtn version="V1.0S2" />
              <PBtn version="V1.0S2" />
              <PBtn version="V1.0S1" />
              <PBtn version="B1.1" />
              <PBtn version="B1.1.1" />
              <PBtn version="B1.0" />
              <PBtn version="A3.3" />
              <PBtn version="A3.2" />
              <PBtn version="A3.2.1" />
              <PBtn version="A3.1" />
              <PBtn version="A2.0" />
              <PBtn version="A1.0" />
            </details>
          </div>
          <div className="versionColumn">
            <span>Turboman 2</span>
            <PBtn color="rgb(7, 201, 25)" name="Latest" version="V2_B0.08" />
            <details className="versionColumn">
              <summary>More</summary>
              <PBtn version="V2_B0.08" />
              <PBtn version="V2_B0.07" />
              <PBtn version="V2_B0.06" />
              <PBtn version="V2_B0.05" />
              <PBtn version="V2_B0.04" />
              <PBtn version="V2_B0.03" />
              <PBtn version="V2_B0.02" />
              <PBtn version="V2_B0.01" />
            </details>
          </div>
        </div>
      </div>
      <h2 className="worldRecordTitle">World Records! (Latest version only)</h2>
      <p>
        (If you get a record, just for verification, take a screenshot, and post
        it in the chat below)
      </p>
      <br />
      <div className="worldRecordsDiv">
        <span className="worldRecord">Practice 1 : None</span>
        <span className="worldRecord">Practice 2 : None</span>
      </div>
    </div>
  );
}
