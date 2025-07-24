function Art(props){
    return (
        <>
            <div className="outline">
                <p style={{fontSize: "24px"}}>{props.title}</p>
                <p>{props.img}</p>
                <img className="logo" src={"../halloween/" + props.img + ".png"} alt={props.image} />
            </div>
            <br />
        </>
    )
}

export default function Halloween(){
    return (
        <div className="halloweenMain">
            <br /><br /><br />
            <p>I am an evil superlord</p>
            <Art title="Mr. Don't hurt me" img="9-11-22" />
            <Art title="Rocktopus" img="9-10-22" />
            <br />
        </div>
    )
}