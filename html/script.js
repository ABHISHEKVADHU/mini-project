const foods = [
  { name: "Pizza Hut", type: "Pizza", rating: 4.3, img: "https://images.unsplash.com/photo-1601924582975-7e670f608bcb" },
  { name: "Burger King", type: "Burger", rating: 4.1, img: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
  { name: "Biryani House", type: "Indian", rating: 4.5, img: "https://images.unsplash.com/photo-1600628422019-6c8c7a38b9f0" },
  { name: "Pasta Point", type: "Italian", rating: 4.2, img: "https://images.unsplash.com/photo-1525755662778-989d0524087e" },
  { name: "Sushi World", type: "Japanese", rating: 4.4, img: "https://images.unsplash.com/photo-1553621042-f6e147245754" },
  { name: "Ice Cream", type: "Dessert", rating: 4.7, img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f" },

  { name: "Domino's Pizza", type: "Pizza", rating: 4.2, img: "https://images.unsplash.com/photo-1548365328-9f547fb095c3" },
  { name: "KFC", type: "Fast Food", rating: 4.0, img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec" },
  { name: "Subway", type: "Sandwich", rating: 4.1, img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d" },
  { name: "Taco Bell", type: "Mexican", rating: 4.0, img: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c" },
  { name: "Haldiram's", type: "Indian", rating: 4.3, img: "https://images.unsplash.com/photo-1628294896516-344152572ee8" },
  { name: "Punjabi Dhaba", type: "North Indian", rating: 4.4, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950" },
  { name: "South Spice", type: "South Indian", rating: 4.2, img: "https://images.unsplash.com/photo-1630383249896-424e482df921" },
  { name: "Chinese Wok", type: "Chinese", rating: 4.1, img: "https://images.unsplash.com/photo-1546069901-eacef0df6022" },
  { name: "Momos Point", type: "Street Food", rating: 4.3, img: "https://images.unsplash.com/photo-1628294896590-6f6f0f7fdc8b" },
  { name: "Roll Express", type: "Wraps", rating: 4.0, img: "https://images.unsplash.com/photo-1604908177522-9374c33c5f8d" },
  { name: "BBQ Nation", type: "Barbecue", rating: 4.6, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
  { name: "Grill House", type: "Grill", rating: 4.2, img: "https://images.unsplash.com/photo-1555992336-03a23c06c11f" },
  { name: "Cafe Latte", type: "Cafe", rating: 4.3, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { name: "Tea Junction", type: "Beverages", rating: 4.1, img: "https://images.unsplash.com/photo-1541167760496-1628856ab772" },
  { name: "Chocolate Room", type: "Dessert", rating: 4.6, img: "https://images.unsplash.com/photo-1541781408260-3c6d63f52c4b" },
  { name: "Bakery Bliss", type: "Bakery", rating: 4.4, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591" },
  { name: "Falafel Corner", type: "Middle Eastern", rating: 4.2, img: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56" },
  { name: "Vegan Bowl", type: "Vegan", rating: 4.5, img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6" },
  { name: "Healthy Bites", type: "Healthy", rating: 4.3, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd" },
  { name: "Seafood Shack", type: "Seafood", rating: 4.4, img: "https://images.unsplash.com/photo-1553621042-7f2a66c0a31d" },
  { name: "Steak House", type: "Steak", rating: 4.6, img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" },
  { name: "Shawarma Hub", type: "Arabian", rating: 4.3, img: "https://images.unsplash.com/photo-1604908177074-5c1c5a3f5f9c" },
  { name: "Street Chaat", type: "Chaat", rating: 4.2, img: "https://images.unsplash.com/photo-1628294896604-5cfa9eec2b2c" }
];

const foodList = document.getElementById("food-list");
const search = document.getElementById("search");

function showFood(list) {
  foodList.innerHTML = "";
  list.forEach(item => {
    foodList.innerHTML += `
      <div class="card">
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>⭐ ${item.rating} • ${item.type}</p>
      </div>
    `;
  });
}

showFood(foods);

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  const filtered = foods.filter(f =>
    f.name.toLowerCase().includes(value) ||
    f.type.toLowerCase().includes(value)
  );
  showFood(filtered);
});

