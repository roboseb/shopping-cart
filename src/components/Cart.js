import {useState, useEffect } from "react";
import uniqid from "uniqid";

const Cart = (props) => {

    const [total, setTotal] = useState(0);

    const sumCosts = () => {

        let tempTotal = 0;

        props.items.map((item) => {
            tempTotal += item.cost * item.amount;
        });

        tempTotal = tempTotal.toFixed(2);
        console.log(tempTotal);

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
                    >{item.amount} {item.firstName} ${(item.cost * item.amount).toFixed(2)}
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
                >Cart</div>
            
        </div>
    )
}

export default Cart;