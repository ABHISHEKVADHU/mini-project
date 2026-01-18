const restaurants = [
  { name: "Pizza Hut", rating: 4.3, type: "Italian", img: "https://source.unsplash.com/300x200/?pizza" },
  { name: "Burger King", rating: 4.1, type: "Fast Food", img: "https://source.unsplash.com/300x200/?burger" },
  { name: "Biryani House", rating: 4.5, type: "Indian", img: "https://source.unsplash.com/300x200/?biryani" },
  { name: "Sushi World", rating: 4.2, type: "Japanese", img: "https://source.unsplash.com/300x200/?sushi" },
  { name: "Taco Bell", rating: 4.0, type: "Mexican", img: "https://source.unsplash.com/300x200/?taco" },
  { name: "Ice Cream Factory", rating: 4.7, type: "Dessert", img: "https://source.unsplash.com/300x200/?icecream" },
  { name: "Cafe Coffee", rating: 4.3, type: "Cafe", img: "https://source.unsplash.com/300x200/?coffee" },
  { name: "Pasta Point", rating: 4.1, type: "Italian", img: "https://source.unsplash.com/300x200/?pasta" },
  { name: "Kebab House", rating: 4.6, type: "Middle Eastern", img: "https://source.unsplash.com/300x200/?kebab" },
  { name: "Vegan Delight", rating: 4.4, type: "Vegan", img: "https://source.unsplash.com/300x200/?vegan" },
  { name: "Seafood Shack", rating: 4.3, type: "Seafood", img: "https://source.unsplash.com/300x200/?seafood" },
  { name: "Dim Sum Palace", rating: 4.5, type: "Chinese", img: "https://source.unsplash.com/300x200/?dimsum" },
  { name: "Bagel Bros", rating: 4.0, type: "Bakery", img: "https://source.unsplash.com/300x200/?bagel" },
  { name: "Smoothie Heaven", rating: 4.6, type: "Beverages", img: "https://source.unsplash.com/300x200/?smoothie" },
  { name: "Donut King", rating: 4.3, type: "Dessert", img: "https://source.unsplash.com/300x200/?donut" }
  // Add more to reach 500+ lines
];

const foodList = document.getElementById("food-list");

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

// Initial render
renderCards(restaurants);

// Search functionality
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
  const filtered = restaurants.filter(r =>
    r.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
    r.type.toLowerCase().includes(e.target.value.toLowerCase())
  );
  renderCards(filtered);
});

