import EN from "../locale/en.js";
import RU from "../locale/ru.js";

const initTranslate = () => {
  const switcherBtns = document.querySelectorAll(
    ".language-switcher__btn"
  ) as NodeListOf<HTMLButtonElement>;
  const textEls = document.querySelectorAll("[data-translate]");

  let currentLng = "en";

  switcherBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      currentLng = (e.target as HTMLButtonElement).dataset.lng;

      textEls.forEach((el: HTMLElement) => {
        el.innerHTML = (currentLng === "en" ? EN : RU)[el.dataset.translate];
      });
    });
  });
};

export default initTranslate;
