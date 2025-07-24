function PBtn(props) {
    return (
      <a href={`/turbofps/${props.version}/index.html`} className="button">{props.version}</a >
    )
  }
  
  export default function Turboman() {
    return (
      <div className="Turboman">
        <div className="versionPick">
          <h2>Pick a version (TurboFPS) (Right is newest, left is oldest)</h2>
          <PBtn version="0.1.2" />
        </div>
      </div>
    );
  }
  