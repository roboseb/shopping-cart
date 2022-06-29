import stars from '../images/stars.png'

const ItemPage = (props) => {

        return (
            <div 
                id='itempage'
                onClick={() => props.toggleInfo(props.info)}>
                {props.info === null ?  
                    <div>Null</div>
                : 
                    <div id='itempageinfo'>
                        <div id='infoheader'><div>Back to Results</div><div>Furniture / Office Furniture / Desks / SKU: TH4887</div></div>
                        <div id='infoimages'><img src={props.info.src} alt=''></img></div>
                        <div id='infodetails'>
                            <h2>
                                {props.info.firstName} {props.info.lastName}
                            </h2>
                            <div>See More by <a href=''>South Shore</a></div>
                            <div> <img id='stars' src={stars} alt=''></img> 4.4 <a href=''>11544 Reviews</a></div>
                            <div id='cost'>${props.info.cost}</div>
                            <div>Get $25 off $150 with the <a href=''>Waifair Credit Card</a></div>
                            <div>Free Shipping</div>
                            <div>Get it between Sat, Jul 2 - Mon, Jul 4</div>
                            <div>Ship To: <a href=''>M4C 1B5-Toronto</a></div>

                            <div><strong>Select Ethnicity: </strong> Pure Black</div>
                        </div>
                    </div>
                }
            </div>
        )

}

export default ItemPage;