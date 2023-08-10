const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },
  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },
  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: ["Muzzarella", "Tomate", "Queso Azul", "Parmesano", "Roquefort"],
    imagen: "./img/4quesos.png",
  },
  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Jamón"],
    imagen: "./img/especial.png",
  },
  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Piña"],
    imagen: "./img/anana.png",
  },
];

const searchForm = document.getElementById('search-form');
const pizzaIdInput = document.getElementById('pizza-id');
const pizzaContainer = document.getElementById('pizza-container');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchId = parseInt(pizzaIdInput.value);
  const foundPizza = pizzas.find(pizza => pizza.id === searchId);

  if (foundPizza) {
    // Crear la tarjeta de la pizza encontrada
    const pizzaCard = document.createElement('div');
    pizzaCard.className = 'pizza-card';

    const pizzaImage = document.createElement('img');
    pizzaImage.src = foundPizza.imagen;
    pizzaImage.alt = foundPizza.nombre;
    pizzaCard.appendChild(pizzaImage);

    const pizzaDetails = document.createElement('div');
    pizzaDetails.className = 'pizza-details';

    const pizzaName = document.createElement('h2');
    pizzaName.className = 'pizza-name';
    pizzaName.textContent = foundPizza.nombre;
    pizzaDetails.appendChild(pizzaName);

    const pizzaPrice = document.createElement('p');
    pizzaPrice.className = 'pizza-price';
    pizzaPrice.textContent = `Precio: $${foundPizza.precio}`;
    pizzaDetails.appendChild(pizzaPrice);

    pizzaCard.appendChild(pizzaDetails);

    // Limpiar el contenedor antes de renderizar
    pizzaContainer.innerHTML = '';
    pizzaContainer.appendChild(pizzaCard);

    // Guardar en LocalStorage
    localStorage.setItem('lastPizza', JSON.stringify(foundPizza));
  } else {
    // Mostrar mensaje de error si no se encuentra la pizza
    pizzaContainer.innerHTML = '<p class="error-message">Pizza no encontrada</p>';
  }
});

// Cargar la pizza del LocalStorage al cargar la página
window.addEventListener('load', () => {
  const lastPizza = JSON.parse(localStorage.getItem('lastPizza'));

  if (lastPizza) {
    const pizzaCard = document.createElement('div');
    pizzaCard.className = 'pizza-card';

    const pizzaImage = document.createElement('img');
    pizzaImage.src = lastPizza.imagen;
    pizzaImage.alt = lastPizza.nombre;
    pizzaCard.appendChild(pizzaImage);

    const pizzaDetails = document.createElement('div');
    pizzaDetails.className = 'pizza-details';

    const pizzaName = document.createElement('h2');
    pizzaName.className = 'pizza-name';
    pizzaName.textContent = lastPizza.nombre;
    pizzaDetails.appendChild(pizzaName);

    const pizzaPrice = document.createElement('p');
    pizzaPrice.className = 'pizza-price';
    pizzaPrice.textContent = `Precio: $${lastPizza.precio}`;
    pizzaDetails.appendChild(pizzaPrice);

    pizzaCard.appendChild(pizzaDetails);

    pizzaContainer.appendChild(pizzaCard);
  }
});
