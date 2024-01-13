function initMenu() {
  const burger = document.querySelector(".burger");
  const header = document.querySelector(".header");
  const burgerItem = document.querySelector(".header__list-item");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
    header.classList.toggle("active");
  });

  burgerItem.addEventListener("click", () => {
    header.classList.remove("active");
  });
}

export default initMenu;
