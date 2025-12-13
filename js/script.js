const products = [
  {
    id: 1,
    name: "Bag",
    price: "₹1499",
    img: "images/bag.jpg",
    desc: "Bag"
  },
  {
    id: 2,
    name: "Laptop",
    price: "₹56000",
    img: "images/laptop.jpg",
    desc: "Laptop"
  },
  {
    id: 3,
    name: "Mobile",
    price: "₹99999",
    img: "images/mobile.jpg",
    desc: "Mobile"
  },
  {
    id: 4,
    name: "Watch",
    price: "₹2999",
    img: "images/watch.jpg",
    desc: "Watch"
  },
  {
    id: 5,
    name: "Bottle",
    price: "₹499",
    img: "images/bottle.jpg",
    desc: "Bottle"
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: "₹2499",
    img: "images/bluetooth.jpg",
    desc: "Bluetooth"
  }
];

const container = document.getElementById("productContainer");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.img}">
    <h3>${p.name}</h3>
    <p>${p.price}</p>
    <button onclick="viewDetails(${p.id})">View Details</button>
  `;
  container.appendChild(card);
});

function viewDetails(id) {
  localStorage.setItem("productId", id);
  window.location = "product.html";
}
