var productosContainer = document.getElementById("productos");

// Obtiene los datos de los productos (puedes reemplazar este ejemplo con una llamada AJAX para cargar el archivo JSON)
var productos = [
  {
    id: 1,
    nombre: "Jirafa",
    descripcion: "Mini Amigurumi",
    stock: 1,
    precio: 19.99,
    imagen: "https://i.pinimg.com/564x/79/c7/b6/79c7b65312aaba28a473b8bc28539cc3.jpg",
  },
  {
    id: 2,
    nombre: "Puerco",
    descripcion: "Mini Amigurumi",
    stock: 5,
    precio: 9.99,
    imagen: "https://i.pinimg.com/736x/96/9f/e7/969fe7552c0bd8ded2cd7e5c4afd8904.jpg",
  },
  {
    id: 3,
    nombre: "Pinguino",
    descripcion: "Mini Amigurumi",
    stock: 2,
    precio: 29.99,
    imagen: "https://i.pinimg.com/236x/ac/39/a2/ac39a2ac65f51c0f34a8e7aa6eeb170b.jpg",
  },
  {
    id: 4,
    nombre: "Sapo",
    descripcion: "Mini Amigurumi",
    stock: 0,
    precio: 39.99,
    imagen: "https://i.pinimg.com/564x/92/44/55/924455970c90fd481e0ffcdb76e43c5c.jpg",
  },
  {
    id: 5,
    nombre: "Elefante",
    descripcion: "Mini Amigurumi",
    stock: 1,
    precio: 49.99,
    imagen: "https://i.pinimg.com/236x/23/b3/f7/23b3f7c3def6d0daaadf67d2aa9f5209.jpg",
  },
  {
    id: 6,
    nombre: "Pato",
    descripcion: "Mini Amigurumi",
    stock: 10,
    precio: 59.99,
    imagen: "https://i.pinimg.com/564x/90/d6/df/90d6dfafdcb3cecd9eed35e25ee1001b.jpg",
  },
];

// Recorre los productos y crea elementos HTML para mostrarlos
productos.forEach(function (producto) {
  // Crea un contenedor para cada producto
  var productoContainer = document.createElement("div");
  productoContainer.className = "producto";

  // Crea elementos HTML para mostrar la información del producto
  var nombreElement = document.createElement("h2");
  nombreElement.textContent = producto.nombre;

  var descripcionElement = document.createElement("p");
  descripcionElement.textContent = producto.descripcion;

  var stockElement = document.createElement("p");
  stockElement.textContent = "Stock: " + producto.stock;

  var precioElement = document.createElement("p");
  precioElement.textContent = "Precio: " + producto.precio;

  var imagenElement = document.createElement("img");
  imagenElement.src = producto.imagen;

  // Agrega los elementos al contenedor del producto
  productoContainer.appendChild(nombreElement);
  productoContainer.appendChild(descripcionElement);
  productoContainer.appendChild(stockElement);
  productoContainer.appendChild(precioElement);
  productoContainer.appendChild(imagenElement);

  // Agrega el contenedor del producto al contenedor principal
  productosContainer.appendChild(productoContainer);
});
