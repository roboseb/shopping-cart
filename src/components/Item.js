const Item = (props) => {

    return (
        <div id='item'>
            <img 
                src={props.src} 
                alt={props.alt}
                onMouseEnter={() => props.displayInfo(props.index)}
            ></img>
            <div id='infobox'
                onClick={() => props.toggleInfo(props.item)}>
                <div id='itemname'>{props.firstName} {props.lastName}</div>
                <div id='itemcost'>{props.cost}</div>
                <button 
                    id='buybtn'
                    onClick={() => props.purchaseItem(props.index)}
                >Buy</button>
            </div>

        </div>
    )
}

export default Item;