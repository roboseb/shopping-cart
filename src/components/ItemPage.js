import stars from '../images/stars.png';
import heart from '../images/heart.svg';
import wood from '../images/wood.jpg';
import arrowLeft from '../images/arrowleft.svg';

import { useEffect, useState } from 'react';



const ItemPage = (props) => {

        const [number, setNumber] = useState(1);

        //On page load, set number variable to number's inner text.

        

        //Adjust amount to add to cart.
        const changeCount = (amount) => {
            let newAmount = number + amount;

            //Set min and max for amount to add to cart.
            if (newAmount < 0) newAmount = 0;
            if (newAmount > 30) newAmount = 30;

            setNumber(newAmount);
        }



        return (
            <div 
                id='itempage'
                >
                {props.info === null ?  
                    <div>Null</div>
                : 
                    <div id='itempageinfo'>

                        <div id='infoheader'>
                            <button 
                                id='hideinfobtn'
                                onClick={() => props.toggleInfo(props.info)}
                            ><img src={arrowLeft} alt=''></img>
                            Back to Results</button>
                            <div>Furniture / Office Furniture / "Desks" / SKU: TH4887</div>
                        </div>
                        <div id='infoimages'><img src={props.info.src} alt=''></img></div>
                        <div id='infodetails'>
                            <h2>
                                {props.info.firstName} {props.info.lastName}
                            </h2>
                            <div>See More by <a href=''>Salman bin Abdulaziz</a></div>
                            <div id='rating'> <img id='stars' src={stars} alt=''></img> 4.4 <a href=''>11 Reviews</a></div>
                            <div id='cost'>${props.info.cost}</div>
                            <div>Get $25 off $150 with the <a href=''>Waifair Credit Card</a></div>
                            
                            <div id='shipping'>
                                <div>Free Air Fare</div>
                                <div>Get her between Sat, Jul 2 - Mon, Jul 4</div>
                                <div>Fly To: <a href=''>M4C 1B5-Toronto</a></div>
                            </div>
                            

                            <div><strong>Ethnicity: </strong>{props.info.race}</div>
                            <div id='racebox'>
                                <img src={wood} alt=''></img>
                                <div>{props.info.race}</div>
                            </div>
                            
                            <div id='cartbox'>
                                <div id='addbox'>
                                    <button id='subbtn' onClick={() => changeCount(-1)}>-</button>
                                    <div>
                                        <div id='number'>{number}</div>
                                    </div>
                                    <button id='addbtn' onClick={() => changeCount(1)}>+</button>
                                </div>
                                <div id='heartbox'><img src={heart} alt=''></img></div>
                                <button id='cartbtn' onClick={() => props.purchaseItem(-1, props.info, number)}>Add to Cart</button>
                            </div>

                        </div>
                    </div>
                }
            </div>
        )

}

export default ItemPage;