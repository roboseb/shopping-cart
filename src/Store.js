import { useState, useEffect } from "react";
import { matchPath } from "react-router";
import uniqid from "uniqid";
import Item from "./components/Item";
import Cart from "./components/Cart";
import ItemPage from "./components/ItemPage";

import chevron from './images/chevron-up.svg'

const Store = () => {

    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [currentInfo, setCurrentInfo] = useState(null);
    const [counter, setCounter] = useState(0);

    const [loaded, setLoaded] = useState(false);

    const firstNames = ['Ria', 'Veronica', 'Natalie', 'Hazel', 'Maisie', 'Josie', 'Mae', 'Meghan', 'Ava', 'Bertha', 'May', 'Ellie', 'Patricia'];
    const lastNames = ['Howell', 'Henry', 'Barker', 'Elliot', 'Brown', 'Morton', 'Garcia', 'Kennedy', 'Hale', 'Preston', 'Rosales', 'Cole', 'Parks', 'Ramirez', 'Morgan'];
    const races = ['Pure Black', 'Mocha', 'Dark Walnut', 'Egg Shell', 'Blush']

    //Generate items with fetched images and random info.
    const generateItems = (term) => {
        async function getImages() {
            let response = await fetch(`https://api.unsplash.com/search/photos/?query=${term}&per_page=11&client_id=a0UGbuGei6IPbMG18JU5nmQOyIPN-q7p2FkNy-zc0zI`);
            let images = await response.json();

            return images['results'];
        }

        //Assign response src to images and then give random info.
        getImages().then(response => {
            for (let i = 0; i < response.length; i++) {
                const source = response[i]['urls']['regular'];

                let info = (generateInfo());
                info.src = source;

                setItems(items => items.concat(info));
            };

        });
    }

    //Generate random info for each piece of furniture.
    const generateInfo = () => {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

        const amount = 0;
        const cost = Math.floor(Math.random() * 4000) + 1000.99;

        const race = races[Math.floor(Math.random() * races.length)];

        const info = {firstName, lastName, amount, cost, race};
        

        return info;
    }

    //Prevent generating another set of items.
    useEffect(() => {
        if (!loaded) {
            generateItems('dresser');
            setLoaded(true);
        }
    }, []);

    //Add item to shopping cart on click.
    const purchaseItem = (index, item, amount) => {
        

        let newIndex;
        let newAmount = parseInt(amount);

        if (index === -1 && item !== undefined) {
            newIndex = items.indexOf(item);
        } else {
            newIndex = index;
        }

        //Increment item counter if it's already in cart.
        if (cartItems.includes(items[newIndex])) {
            
            //Update item's count.
            const tempState = cartItems;
            const tempItem = tempState[tempState.indexOf(items[newIndex])];
            tempItem.amount += 1 * newAmount; 
            
            setCartItems(cartItems => cartItems = tempState);

            //Force rerender.
            setCounter(counter + 1);

        //Add the item to your cart if not already there based on amount.
        } else {

            //Update item's count.
            const tempState = items;
            const tempItem = tempState[tempState.indexOf(items[newIndex])];
            tempItem.amount += 1 * newAmount; 

            setCartItems(cartItems => cartItems.concat(items[newIndex]));
        }
    }

    //Remove an item from the shopping cart.
    const removeItem = (item) => {
        const index = cartItems.indexOf(item);

        let tempItems = cartItems;
        tempItems.splice(index, 1);

        setCartItems(tempItems);
        setCounter(counter + 1);

        //Reset item's count.
        resetItemCount(item);
    }

    //Reset an item's count.
    const resetItemCount = (item) => {
        let tempItems = items;

        let tempItem = tempItems[tempItems.indexOf(item)];
        tempItem.amount = 0;
        
        tempItems[tempItems.indexOf(item)] = tempItem;
        setItems(tempItems);
    }

    //Show an item's info on click, or hide it if already open.
    const toggleInfo = (info) => {
        const itemPage = document.getElementById('itempage');

        //Toggle info if reclicking same item.
        if (info === currentInfo) {
            itemPage.classList.toggle('showninfo');
        
        //Else verify that the info is showing before updating.
        } else {
            itemPage.classList.add('showninfo');
        }

        setCurrentInfo(info);
    }

    const moveChevron = (index) => {
        console.log(index);

        const storeItems = Array.from(document.getElementById('storeitems').children);
        const hovered = storeItems[index];
        const rect = hovered.getBoundingClientRect();
        console.log(rect.left);




        const chevron = document.getElementById('chevron');

        chevron.style.left = `${rect.left + rect.width/2}px`;

    }


    return (

        <div id="store">
            <Cart 
                items={cartItems}
                removeItem={removeItem}
            />

            <div id='storeitems'>
                {items.map((item, index) => {
                    return <Item
                        item={item}
                        src={item.src}
                        alt='alt'
                        key={uniqid()}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        cost={item.cost}
                        index={index}
                        purchaseItem={purchaseItem}
                        toggleInfo={toggleInfo}
                        moveChevron={moveChevron}
                    />
                })}
            </div>
            
            <ItemPage 
                toggleInfo={toggleInfo}
                purchaseItem={purchaseItem}
                info={currentInfo}
            />

            <img id='chevron' src={chevron} alt=''></img>

        </div>
    );
}

export default Store;
