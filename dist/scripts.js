const data = [
    {
        "id": 1,
        "name": "iPhone 12 Pro",
        "price": 999,  
        "link": "https://www.apple.com/in/iphone-12-pro/",  
    },
    {
        "id": 2,
        "name": "iPhone 13 Pro Max",
        "price": 1299,
        "link": "https://www.apple.com/in/iphone-13-pro/",
    },
    {
        "id": 3, 
        "name": "Samsung Galaxy S23 Ultra",
        "price": 1099,

    },
    {
        "id": 4,
        "name": "Samsung Galaxy S21",
        "price": 899,
    },
    {
        "id": 5,
        "name": "Samsung Galaxy S22 Ultra",
        "price": 1199,
    },
    {
        "id": 6,
        "name": "Motorola Moto G100",
        "price": 699,
    },
    {
        "id": 7,
        "name": "Redmi Note 10 Pro",
        "price": 499,
    },
    {
        "id": 8,    
        "name": "Realme 8",
        "price": 399,
    },
]


const configObj = {
    bannerImage : "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/6/x/j/-original-imaghxejqvpwfqh2.jpeg?q=90",
    logoImage: "../logo.png",
}

const display = document.querySelector("#display_search");
const input = document.querySelector("#input");

const displayUsers = async () => {
    let query = input.value;
    console.log("Query: ", query);

    let displayData = data.filter((eventData) => {
        if (query === "") {
            return false;
        } else if (eventData.name.toLowerCase().includes(query.toLowerCase())) {
            return true;
        }
    }).map((object) => {
        const {name, price, link} = object;
        return `<div class="container">
                <style>
                    div:hover{
                        <a href=${link}></a>;
                    }
                </style>
                    <h5>${name}</h5>
                    <h5>Price= ${price}$</h5>
                <a href=${link}></a>
       
                </div>
                <hr>
                `
    }).join("");
    display.innerHTML = displayData;
}
displayUsers();

input.addEventListener("input", () => {
    displayUsers();
});

const logoImage = document.getElementById("logoImage");
logoImage.src = configObj.logoImage;
const bannerImage = document.getElementById("bannerImage");
bannerImage.src = configObj.bannerImage;

const bf = [
    {
        "name": "bf1",
        "price": 30,
        "display": "Sofa Set",
        "description": "Experience the best comfort with our sofas",
        "image": "https://ii3.pepperfry.com/media/catalog/product/n/i/494x544/niki-fabric-2-seater-sofa-in-vivid-orange-colour-niki-fabric-2-seater-sofa-in-vivid-orange-colour-kovap7.jpg "
    },
    {
        "name": "bf2",
        "price": 3,
        "display": "Kid's Wear",
        "description": "Get the comfort for your kids at the best price.",
        "image": "https://www.suratsuit.in/product-img/thumb/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg"

    },
    {
        "name": "bf3",
        "price": 8,
        "display": "Dining Table",
        "description": "A perfect table for the family to enjoy the delicious food.",
        "image": "https://www.royaloakindia.com/_next/image?url=https%3A%2F%2Fmedia.royaloakindia.com%2Fmedia%2Fcatalog%2Fproduct%2F7%2F_%2F7_copy_6.jpg&w=1920&q=50"
    },
    {
        "name": "bf4",
        "price": 10,
        "display": "Smart Watch",
        "description": "To keep you updated with the Time & be ahead of it.",
        "image": "https://assets.ajio.com/medias/sys_master/root/20221123/Sjgk/637e3b99aeb269659caca8de/-473Wx593H-460794019-black-MODEL.jpg"
    },
]
