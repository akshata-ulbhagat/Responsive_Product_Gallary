const products = [
  {
    id: 1,
    name: "Bag",
    price: "₹1499",
    img: "images/bag.jpg",
    desc: "This stylish and durable bag is designed for daily use, travel, and office purposes. It provides ample storage space for books, accessories, and personal belongings. The strong material ensures long-lasting performance and comfort."
  },
  {
    id: 2,
    name: "Laptop",
    price: "₹56000",
    img: "images/laptop.jpg",
    desc: "This high-performance laptop is suitable for students and professionals. It supports multitasking, programming, and office applications efficiently. The sleek design and powerful processor ensure smooth and reliable performance."
  },
  {
    id: 3,
    name: "Mobile",
    price: "₹99999",
    img: "images/mobile.jpg",
    desc: "This smartphone features a high-resolution camera, fast processor, and long battery life. It is ideal for communication, entertainment, and everyday usage. The modern design enhances user experience."
  },
  {
    id: 4,
    name: "Watch",
    price: "₹2999",
    img: "images/watch.jpg",
    desc: "This elegant wrist watch is suitable for both formal and casual wear. It offers accurate timekeeping with a premium finish. The stylish design adds sophistication to your personality."
  },
  {
    id: 5,
    name: "Bottle",
    price: "₹499",
    img: "images/bottle.jpg",
    desc: "This reusable water bottle is made from high-quality material and is eco-friendly. It is lightweight, easy to carry, and perfect for daily hydration."
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: "₹2499",
    img: "images/bluetooth.jpg",
    desc: "This Bluetooth speaker delivers clear sound and strong bass. It supports wireless connectivity and is portable in design."
  }
];

const id = localStorage.getItem("productId");
const product = products.find(p => p.id == id);

document.getElementById("pImg").src = product.img;
document.getElementById("pName").innerText = product.name;
document.getElementById("pPrice").innerText = product.price;
document.getElementById("pDesc").innerText = product.desc;
