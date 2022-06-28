import { useState, useEffect } from "react";
import { matchPath } from "react-router";
import uniqid from "uniqid";
import Item from "./components/Item";

const Store = () => {

    const [items, setItems] = useState([]);

    const firstNames = ['Ria', 'Veronica', 'Natalie', 'Hazel', 'Maisie', 'Josie', 'Mae', 'Meghan', 'Ava', 'Bertha', 'May', 'Ellie', 'Patricia'];
    const lastNames = ['Howell', 'Henry', 'Barker', 'Elliot', 'Brown', 'Morton', 'Garcia', 'Kennedy', 'Hale', 'Preston', 'Rosales', 'Cole', 'Parks', 'Ramirez', 'Morgan'];

    //Generate items with fetched images and random info.
    const generateItems = (term) => {
        async function getImages() {
            let response = await fetch(`https://api.unsplash.com/search/photos/?query=${term}&per_page=10&client_id=a0UGbuGei6IPbMG18JU5nmQOyIPN-q7p2FkNy-zc0zI`);
            let images = await response.json();

            //console.log(images['results']);

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
        
        const info = {firstName, lastName};
        const src = '';

        return info;
    }

    useEffect(() => {
        generateItems('dresser');
    }, []);

    useEffect(() => {
        console.log('items:',items);
    }, [items]);

    const displayInfo = (index) => {

        // const storeItems = Array.from(document.getElementById('storeitems').children);

        // const currentItem = storeItems[index];

        // const infoBox = currentItem.querySelector('#infobox');
        // infoBox.innerText = `${items[index]['firstName']} ${items[index]['lastName']}`;
    }


  return (
      
    <div id="store">
        <div id='storeitems'>
        {items.map((item, index) => {
            return <Item 
                        src={item.src} 
                        alt='alt' 
                        key={uniqid()}
                        displayInfo = {displayInfo}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        index={index}
                    />

        })}
        </div>
    </div>
  );
}

export default Store;
