const restaurants = [
  { name: "Pizza Hut", rating: 4.3, type: "Italian", img: "images/pizza.jpg" },
  { name: "Burger King", rating: 4.1, type: "Fast Food", img: "images/burger.jpg" },
  { name: "Biryani House", rating: 4.5, type: "Indian", img: "images/biryani.jpg" },
  { name: "Sushi World", rating: 4.2, type: "Japanese", img: "images/sushi.jpg" },
  { name: "Taco Bell", rating: 4.0, type: "Mexican", img: "images/taco.jpg" },
  { name: "Ice Cream Factory", rating: 4.7, type: "Dessert", img: "images/icecream.jpg" },
  { name: "Cafe Coffee Day", rating: 4.3, type: "Cafe", img: "images/coffee.jpg" },
  { name: "Pasta Point", rating: 4.1, type: "Italian", img: "images/pasta.jpg" },
  { name: "Kebab House", rating: 4.6, type: "Middle Eastern", img: "images/kebab.jpg" },
  { name: "Vegan Delight", rating: 4.4, type: "Vegan", img: "images/vegan.jpg" },

  /* 🔥 NEW ITEMS */
  { name: "Domino's Pizza", rating: 4.2, type: "Italian", img: "images/pizza.jpg" },
  { name: "McDonald's", rating: 4.0, type: "Fast Food", img: "images/burger.jpg" },
  { name: "KFC", rating: 4.1, type: "Chicken", img: "images/burger.jpg" },
  { name: "Hyderabadi Biryani", rating: 4.8, type: "Indian", img: "images/biryani.jpg" },
  { name: "Chinese Wok", rating: 4.3, type: "Chinese", img: "images/noodles.jpg" },
  { name: "South Indian Meals", rating: 4.6, type: "South Indian", img: "images/dosa.jpg" },
  { name: "Rolls Mania", rating: 4.2, type: "Street Food", img: "images/roll.jpg" },
  { name: "Sweet Corner", rating: 4.5, type: "Dessert", img: "images/icecream.jpg" },
  { name: "Healthy Bowl", rating: 4.4, type: "Healthy", img: "images/salad.jpg" },
  { name: "Milkshake Hub", rating: 4.3, type: "Beverages", img: "images/milkshake.jpg" }
];

// DOM
const foodList = document.getElementById("food-list");
const searchInput = document.getElementById("search");

// Render cards
function renderCards(data) {
  foodList.innerHTML = "";

  data.forEach(rest => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${rest.img}" alt="${rest.name}">
      <h3>${rest.name}</h3>
      <p>⭐ ${rest.rating} • ${rest.type}</p>
    `;

    foodList.appendChild(card);
  });
}

// Initial load
renderCards(restaurants);

// Search
searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  const filtered = restaurants.filter(rest =>
    rest.name.toLowerCase().includes(value) ||
    rest.type.toLowerCase().includes(value)
  );

  renderCards(filtered);
});

