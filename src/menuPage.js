import menuDeco from "./deco-bkgd.jpg";

const createMenuPage = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.setAttribute("class", "menu-bkgrd");

  document.body.style.backgroundImage = `url(${menuDeco})`;

  const menuContainer = createMenuContainer();

  const menuTitle = createMenuTitle();
  menuContainer.appendChild(menuTitle);

  const foodItemsContainer = createFoodContainer();
  menuContainer.appendChild(foodItemsContainer);

  contentDiv.appendChild(menuContainer);
};

const createMenuContainer = () => {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  return menuContainer;
};

const createMenuTitle = () => {
  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-header");
  menuTitle.textContent = "Menu";
  return menuTitle;
};

const createFoodContainer = () => {
  const foodItemsContainer = document.createElement("div");
  foodItemsContainer.classList.add("food-container");

  const sections = Object.entries(menuItems);
  sections.forEach(([sectionName, items]) => {
    const sectionContainer = createMenuSection(sectionName, items);
    foodItemsContainer.appendChild(sectionContainer);
  });

  return foodItemsContainer;
};

const createMenuSection = (sectionName, items) => {
  const sectionContainer = document.createElement("div");
  sectionContainer.classList.add(sectionName.toLowerCase());

  const header = document.createElement("h1");
  header.textContent = sectionName;
  sectionContainer.appendChild(header);

  items.forEach((item) => {
    const itemElement = document.createElement("p");
    itemElement.textContent = `${item.name} ••••• ${item.price}`;
    sectionContainer.appendChild(itemElement);
  });

  return sectionContainer;
};

const menuItems = {
  Appetizers: [
    { name: "Nebula Nacho Fries", price: "1,0002" },
    { name: "Cybernetic Wings", price: "2,0002" },
    { name: "Quantum Quinoa", price: "1,5000" },
  ],
  Sandwiches: [
    { name: "Nano Sub", price: "15,0020" },
    { name: "Galactic Grilled", price: "19,0040" },
    { name: "Warp Wrap", price: "15,0300" },
  ],
  Burgers: [
    { name: "Asteroid Burger", price: "20,3457" },
    { name: "Photon Melt", price: "15,6575" },
    { name: "Cosmic Burger", price: "18,4367" },
  ],
  Tacos: [
    { name: "Solar Sizzle Tacos", price: "12,4352" },
    { name: "Lunar Tacos", price: "10,4355" },
    { name: "Inferno Tacos", price: "15,3402" },
  ],
  Beverages: [
    { name: "Stardust Spritzer", price: "5002" },
    { name: "Quantum Quencher", price: "7002" },
  ],
};

export default createMenuPage;
