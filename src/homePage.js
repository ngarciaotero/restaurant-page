const createHomePage = () => {
  const contentDiv = document.querySelector("#content");

  const introContainer = document.createElement("div");
  introContainer.classList.add("intro-container");

  const introHeader = document.createElement("h1");
  introHeader.textContent = "Lorem ipsum dolor";
  introContainer.appendChild(introHeader);

  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit egestas. Commodo odio aenean sed adipiscing diam donec adipiscing. Mauris vitae ultricies leo integer. Tristique et egestas quis ipsum suspendisse ultrices gravida. Et ultrices neque ornare aenean. In nisl nisi scelerisque eu. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Odio facilisis mauris sit amet massa. Ac tincidunt vitae semper quis. Mattis aliquam faucibus purus in massa tempor. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Eget nulla facilisi etiam dignissim. Consequat mauris nunc congue nisi vitae suscipit tellus mauris.";
  introContainer.appendChild(description);

  contentDiv.appendChild(introContainer);
};

export default createHomePage;
