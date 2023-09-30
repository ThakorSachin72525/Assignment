const http = require("http");

// Dummy products data
const menProducts = [
  {
    id: 1,
    name: "Classic Leather Jacket",
    category: "Outerwear",
    price: 149.99,
    color: "Black",
    sizes: ["S", "M", "L", "XL"],
    description: "A timeless leather jacket that adds an edge to any outfit.",
  },
  {
    id: 2,
    name: "Slim-Fit Denim Jeans",
    category: "Bottoms",
    price: 79.99,
    color: "Blue",
    sizes: ["28", "30", "32", "34"],
    description: "Modern slim-fit jeans for a stylish and comfortable look.",
  },
  {
    id: 3,
    name: "Cotton Crewneck T-Shirt",
    category: "Tops",
    price: 29.99,
    color: "White",
    sizes: ["S", "M", "L"],
    description: "Essential cotton crewneck t-shirt for everyday wear.",
  },
  {
    id: 4,
    name: "Formal Dress Shirt",
    category: "Shirts",
    price: 89.99,
    color: "Light Blue",
    sizes: ["M", "L", "XL"],
    description: "Elegant formal dress shirt for sophisticated occasions.",
  },
  {
    id: 5,
    name: "Sports Performance Shorts",
    category: "Activewear",
    price: 49.99,
    color: "Charcoal Gray",
    sizes: ["S", "M", "L"],
    description: "Breathable and comfortable shorts for your active lifestyle.",
  },
];

const womenProducts = [
  {
    id: 1,
    name: "Flowy Maxi Dress",
    category: "Dresses",
    price: 129.99,
    color: "Rose Pink",
    sizes: ["XS", "S", "M", "L"],
    description: "Elegant maxi dress with a flowy silhouette, perfect for special occasions.",
  },
  {
    id: 2,
    name: "High-Rise Skinny Jeans",
    category: "Bottoms",
    price: 89.99,
    color: "Indigo",
    sizes: ["24", "26", "28", "30"],
    description: "Comfortable high-rise skinny jeans that hug your curves.",
  },
  {
    id: 3,
    name: "Off-Shoulder Crop Top",
    category: "Tops",
    price: 39.99,
    color: "White",
    sizes: ["XS", "S", "M"],
    description: "Trendy off-shoulder crop top for a stylish look.",
  },
  {
    id: 4,
    name: "Lace Cocktail Dress",
    category: "Dresses",
    price: 149.99,
    color: "Black",
    sizes: ["S", "M", "L"],
    description: "Sensational lace cocktail dress for evening events.",
  },
  {
    id: 5,
    name: "Yoga Leggings with Pockets",
    category: "Activewear",
    price: 59.99,
    color: "Deep Navy",
    sizes: ["S", "M", "L"],
    description: "Stretchy yoga leggings with convenient pockets for your essentials.",
  },
];


// Create a server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Men & Women Dummy Data");
  } else if (req.url === "/men") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(menProducts));
  } else if (req.url === "/women") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(womenProducts));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
