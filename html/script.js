const foods = [
  { name: "Pizza Hut", type: "Pizza", rating: 4.3, img: "https://images.unsplash.com/photo-1601924582975-7e670f608bcb" },
  { name: "Burger King", type: "Burger", rating: 4.1, img: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
  { name: "Biryani House", type: "Indian", rating: 4.5, img: "https://images.unsplash.com/photo-1600628422019-6c8c7a38b9f0" },
  { name: "Pasta Point", type: "Italian", rating: 4.2, img: "https://images.unsplash.com/photo-1525755662778-989d0524087e" },
  { name: "Sushi World", type: "Japanese", rating: 4.4, img: "https://images.unsplash.com/photo-1553621042-f6e147245754" },
  { name: "Ice Cream", type: "Dessert", rating: 4.7, img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f" }
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

