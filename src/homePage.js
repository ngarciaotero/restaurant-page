import robot from "./robot.png";
import space from "./city-bkgd.jpg";

const createHomePage = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.setAttribute("class", "home-bkgrd");

  document.body.style.backgroundImage = `url(${space})`;

  const introContainer = document.createElement("div");
  introContainer.classList.add("intro-container");

  const introHeader = document.createElement("h1");
  introHeader.classList.add("intro-header");
  introHeader.textContent = "NeonNexus Bistro";
  introContainer.appendChild(introHeader);

  const description = document.createElement("p");
  description.classList.add("intro-description");
  description.innerHTML =
    "<span>Welcome traveler!</span> May I offer you a Stardust Spritzer or Quantum Quencher from our menu. In our cyberpunk oasis, we blend flavors and styles to create an unforgettable dining experience. Head on over to our menu.";
  introContainer.appendChild(description);

  const robotCharacter = document.createElement("img");
  robotCharacter.classList.add("intro-robot");
  robotCharacter.src = robot;
  introContainer.appendChild(robotCharacter);

  contentDiv.appendChild(introContainer);
};

export default createHomePage;
