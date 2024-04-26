const createMenuPage = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.setAttribute("class", "menu-bkgrd");
  
  const menuContainer = createMenuContainer();

};

const createMenuContainer = () => {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  return menuContainer;
};

export default createMenuPage;
