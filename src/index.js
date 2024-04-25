import "./style.css";
import createHomePage from "./homePage.js";
import createMenuPage from "./menuPage.js";
import createAboutPage from "./aboutPage.js";

document.addEventListener("DOMContentLoaded", () => {
  createHomePage();
  const tabs = document.querySelectorAll("button");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabType = tab.textContent;
      clearDisplay();
      switch (tabType) {
        case "Home":
          createHomePage();
          break;
        case "Menu":
          createMenuPage();
          break;
        case "About":
          createAboutPage();
          break;
      }
    });
  });
});

const clearDisplay = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
};
