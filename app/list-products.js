import './index.scss';

// images
import enginakyurt from "./assets/images/pexels-enginakyurt-4458519.jpg";
import quangVietNguyen from "./assets/images/pexels-quang-viet-nguyen-107013384-9561297.jpg";
import yaazhini from "./assets/images/pexels-yaazhini-17307532.jpg";
import nietjuhart from "./assets/images/pexels-nietjuhart-843227.jpg";
import pixabay from "./assets/images/pexels-pixabay-531844.jpg";
import piabay2 from "./assets/images/pexels-pixabay-163185.jpg";
import lum from "./assets/images/pexels-lum3n-44775-399161.jpg";
import rose from "./assets/images/pexels-jonaskakaroto-736230.jpg";
import sunflower from "./assets/images/pexels-pixabay-46216.jpg";
document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Pretty Clothes',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: enginakyurt
        },
        {
            name: 'Watch',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: quangVietNguyen
        },
        {
            name: 'Soap',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: yaazhini
        },
        {
            name: 'Notebook',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: piabay2
        },
        {
            name: 'Keyboard',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: lum
        },
        {
            name: 'Rose',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: rose
        },
        {
            name: 'Sunflower',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: sunflower
        },
        {
            name: 'Book',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: nietjuhart
        },
        {
            name: 'Notepadc',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: pixabay
        }
    ];

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%'; 
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover'

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn');
        addToCart.classList.add('btn-success');
        addToCart.classList.add('float-end');
        addToCart.textContent = "Add to cart";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(addToCart);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        productsContainer.appendChild(cardDiv);
    });
});