const Item = (props) => {

    return (
        <div id='item'>
            <img 
                src={props.src} 
                alt={props.alt}
                onMouseEnter={() => props.displayInfo(props.index)}
            ></img>
            <div id='infobox'>
                <div>{props.firstName} {props.lastName}</div>
            </div>

        </div>
    )
}

export default Item;