const product=[
    {   id: 1,
        productName:"Samsung Mobile Phone",
        imageURL:"https://www.samsung.com/bd/smartphones/galaxy-s/galaxy-s23-fe-mint-128gb-sm-s711blg2afa/",
        price:23000,
        description:"Samsung Galaxy S20 Ultra 5G",
    },
    {   id: 2,
        productName:"Television",
        imageURL:"https://waltonbd.com/television/all-tv/w43s6dg",
        price:3000,
        description:"walto smart tv",
    },
    {   id: 3,
        productName:"Washing Machine",
        imageURL:"https://singerbd.com/singer-top-loading-washing-machine-7-0-kg-srwm-s300atl70ismjg1.html",
        price:4000,
        description:"Samsung washing machine",
    },
    
];

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

const searchBoxValue = e.target.search_box.value; 
const searchText = searchBoxValue.toLowerCase();

const searchResult = product.filter((value)=>{
    const productTitle = value.productName;
    
const Title= productTitle.toLowerCase();

   return Title.includes(searchText);

});
let rootDiv= document.getElementById("root");
let htmlCode = ``;

searchResult.forEach(value =>{
    const code = productCard(value);
  return htmlCode += code;

});

 rootDiv.innerHTML += htmlCode;
    
});

function productCard (info){
        
    const {productName, imageURL, price, description}= info;

    const html = `
    <div class="product-card">
            <img src="${imageURL}">
            <h2>${productName}</h2>
            <p>$ ${price}</p>
            <p>${description}</p>
            <div class="cta-buttons">
              <button class="add-to-cart">Add to Cart</button>
              <button class="view-more">View More</button>
            </div>
          </div>
    `
        return html;
};