import restaurant from "./futuristic-space.jpg";
import robot from "./robot.png";

const createHomePage = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.style.background = `url(${restaurant})`;

  const introContainer = document.createElement("div");
  introContainer.classList.add("intro-container");

  const introHeader = document.createElement("h1");
  introHeader.classList.add("intro-header");
  introHeader.textContent = "NeonNexus Bistro";
  introContainer.appendChild(introHeader);

  const description = document.createElement("p");
  description.textContent =
    "Welcome traveler! May I offer you a Stardust Spritzer or Quantum Quencher from our menu. Try our Cybernetic Sushi Symphony, from our award winning robo chefs. In our cyberpunk oasis, we blend flavors and styles to create an unforgettable dining experience. Join us and discover the future of culinary artistry";
  introContainer.appendChild(description);

  const robotCharacter = document.createElement("img");
  robotCharacter.classList.add("intro-robot");
  robotCharacter.src = robot;
  introContainer.appendChild(robotCharacter);

  contentDiv.appendChild(introContainer);
};

export default createHomePage;
