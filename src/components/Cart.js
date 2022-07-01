import {useState, useEffect } from "react";
import uniqid from "uniqid";

import trash from "../images/trash.svg"
import cart from "../images/cart.svg"

const Cart = (props) => {

    const [total, setTotal] = useState(0);

    const sumCosts = () => {

        let tempTotal = 0;

        props.items.map((item) => {
            tempTotal += item.cost * item.amount;
        });

        tempTotal = tempTotal.toFixed(2);

        setTotal(tempTotal);
    }

    useEffect(() => {
        sumCosts();
    }, [props]);

    const toggleCart = () => {
        const cart = document.getElementById('cart');
        cart.classList.toggle('hidden');

        const cartToggle = document.getElementById('carttoggle');
        cartToggle.classList.toggle('cartbtnhidden');
    }


    return (
        <div id='cart'>
            {props.items.map((item, index) => {
                if (item !== undefined) {
                    return <div
                        key={uniqid()}
                        id='cartitem'
                    >{item.amount} {item.firstName} ${(item.cost * item.amount).toFixed(2)}
                    <button 
                        className='removeitembtn black'
                        onClick={() => props.removeItem(item)}
                    >
                        <img src={trash} alt=""></img>
                    </button>
                    </div>
                }
            })}

            <div id='carttotal'>Total: ${total}
                <img id='carticon' src={cart} alt=""></img>
            </div>
            <div 
                id='carttoggle'
                onClick={toggleCart}
                >Cart</div>
            
        </div>
    )
}

export default Cart;