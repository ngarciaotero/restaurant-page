import chef from "./robot-chef.png";
import cityscape from "./futuristic-space.jpg";

const createAboutPage = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.setAttribute("class", "about-bkgrd");

  document.body.style.backgroundImage = `url(${cityscape})`;

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const aboutHeader = document.createElement("h1");
  aboutHeader.textContent = "About Us";

  const aboutText1 = document.createElement("p");
  aboutText1.textContent =
    "Imagine a world where every aspect of your dining experience is meticulously curated by our team of cutting-edge robots. From the moment you step through our doors, you'll be greeted by our charming robotic hosts, programmed to ensure your visit is nothing short of extraordinary.";
  const aboutText2 = document.createElement("p");
  aboutText2.textContent =
    "Each dish is crafted with precision by our culinary robots, utilizing state-of-the-art equipment to deliver unparalleled taste and presentation.";
  aboutContainer.appendChild(aboutHeader);
  aboutContainer.appendChild(aboutText1);
  aboutContainer.appendChild(aboutText2);

  const bottomContainer = document.createElement("div");
  bottomContainer.classList.add("img-address-container");

  const robotChef = document.createElement("img");
  robotChef.src = chef;
  robotChef.classList.add("robot-chef");
  bottomContainer.appendChild(robotChef);

  const address = document.createElement("div");
  const restaurantName = document.createElement("p");
  restaurantName.textContent = "NeonNexus Bistro";
  const street = document.createElement("p");
  street.textContent = " 789 Nebula Boulevard";
  const stateCity = document.createElement("p");
  stateCity.textContent = "Stellar City, Alpha Centauri 12345";
  const division = document.createElement("p");
  division.textContent = "Galactic Sector 7G-42";
  address.appendChild(restaurantName);
  address.appendChild(street);
  address.appendChild(stateCity);
  address.appendChild(division);

  bottomContainer.appendChild(address);

  aboutContainer.appendChild(bottomContainer);

  contentDiv.appendChild(aboutContainer);
};

export default createAboutPage;
