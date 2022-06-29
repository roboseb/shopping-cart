import {useState, useEffect } from "react";
import uniqid from "uniqid";

const Cart = (props) => {

    const [total, setTotal] = useState(0);

    const sumCosts = () => {

        let tempTotal = 0;


        props.items.map((item) => {
            tempTotal += item.cost * item.amount;
        });

        setTotal(tempTotal);
    }

    useEffect(() => {
        sumCosts();
    }, [props]);

    const toggleCart = () => {
        const cart = document.getElementById('cart');
        cart.classList.toggle('hidden');
    }


    return (
        <div id='cart'>
            <h2>Cart</h2>
            {props.items.map((item, index) => {
                if (item !== undefined) {
                    return <div
                        key={uniqid()}
                    >{item.amount} {item.firstName} ${item.cost * item.amount}
                    <button 
                        id='removeitembtn'
                        onClick={() => props.removeItem(item)}
                    >Remove</button>
                    </div>
                }
            })}

            <div id='carttotal'>Total: ${total}</div>
            <div 
                id='carttoggle'
                onClick={toggleCart}
                >Toggle</div>
            
        </div>
    )
}

export default Cart;