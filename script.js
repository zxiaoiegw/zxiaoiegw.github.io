// Zhen Xiao 10-17-2023

// JSON API to fetch a single cat image
let userRequest = new Request('https://api.thecatapi.com/v1/images/search?limit=1');
fetch(userRequest)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(JSON.stringify(data));
    let cat = data[0];
    let imgElement = `<img src="${cat.url}" alt="cat" style="height:400px; width:800px;">`;
    document.getElementById("pictures").innerHTML += imgElement;
  })
  .catch(error => console.error('Error', error));

// Array of cat objects
const cats = [
  {
    id: 1,
    name: "Chartreux",
    description: "The Chartreux is a medium-sized, blue-gray cat with a thick, plush coat.",
    price: 100,
    image: "images/chartreux.jpg"
  },
  {
    id: 2,
    name: "Persian",
    description: "The Persian is a heavily boned, well-balanced cat with a sweet expression and soft, round lines.",
    price: 150,
    image: "images/persian.jpg"
  },
  {
    id: 3,
    name: "Scottish Fold",
    description: "The Scottish Fold cat occurred as a spontaneous mutation in farm cats in Scotland.",
    price: 150,
    image: "images/scottish.jpg"
  },
  {
    id: 4,
    name: "Himalayan",
    description: "The Himalayans cat combine the luxurious coat of a Persian with the flashy coloring of a Siamese.",
    price: 150,
    image: "images/himalayan.jpg"
  },
  {
    id: 5,
    name: "Bengal",
    description: "The Bengal cats are an intelligent and active breed prized for their boldly patterned coats.",
    price: 100,
    image: "images/bengal.jpg"
  }
];

// The renderCats function uses jQuery to dynamically generate a list of cat items on the webpage. For each cat in the cats array, it creates an HTML element with the cat's details and a quantity dropdown. These elements are then added to an existing list on the page with the class cats-list.
const renderCats = (() => {
  const catList = $(".cats-list");
  cats.forEach(cat => {
    // Options for the drop-down list
    let options = '';
    for (let i = 1; i <= 10; i++) {
      options += `<option value="${i}">Qty: ${i}</option>`;
    }
    const catEl = $(`
        <div class="cat-item">
          <img src="${cat.image}" alt="${cat.name}">
          <h3>${cat.name}</h3>
          <p>${cat.description}</p>
          <p>Price: $${cat.price}</p>
          <select name="quantity" class="quantity">
            ${options}
          </select>  
          <button class="add-to-cart" data-id="${cat.id}">Add to cart</button>
        </div>
      `);
    catList.append(catEl);
  });
})();

// An empty array to hold items added to the cart
const cart = [];
console.log(cart);

// The updateCart function uses jQuery to update the shopping cart's display. I employ the empty() method at the beginning of the function to remove any existing items from the cart display. This ensures that the cart starts fresh each time the function is called. After that, the function adds the current items back into the cart and updates the total price based on the quantities of each item.
const updateCart = () => {
  const cartList = $(".cart-items");
  cartList.empty();

  let total = 0;

  cart.forEach(item => {
    // Total Calculation
    total += item.price * item.quantity; // Multiply price by quantity
    const cartItemEl = $(`
        <li>
          <img src="${item.image}" alt="${item.name}" width="50" height="50"> ${item.name} - $${item.price * item.quantity}  Qty: ${item.quantity}
          <button class="remove-from-cart" data-id="${item.id}">Remove</button>
        </li>
        <hr>
      `);
    cartList.append(cartItemEl);
  });

  $(".total").text(total.toFixed(2));
};

// Adds the selected cat to the cart array and updates the cart
document.addEventListener('click', function (event) {
  if (event.target.matches('.add-to-cart')) {
    const catId = parseInt(event.target.getAttribute('data-id'));
    const cat = cats.find(p => p.id === catId);
    const quantity = event.target.parentElement.querySelector('select.quantity').value;
    // If cat exists, push a new object to the cart array and plus a new property quantity.
    if (cat) {
      cart.push({ ...cat, quantity: parseInt(quantity) });
      updateCart();
      console.log(cart);
    }
  }
});


// Removes the selected cat from the cart array and updates the cart.
document.addEventListener('click', function (event) {
  if (event.target.matches('.remove-from-cart')) {
    const catId = parseInt(event.target.getAttribute('data-id'));
    const index = cart.findIndex(p => p.id === catId);
    // If cat id is found, delete the selected cat item
    if (index > -1) {
      cart.splice(index, 1);
      updateCart();
    }
  }
});






