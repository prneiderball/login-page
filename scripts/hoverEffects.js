export function initHoverEffects() {
  const submitBtn = document.querySelector(".form__button--submit");
  const resetBtn = document.querySelector(".form__button--reset");

  const addHoverEffect = (button) => {
    button.addEventListener("mouseover", () => {
      button.style.transform = "scale(1.05)";
    });
    button.addEventListener("mouseout", () => {
      button.style.transform = "scale(1)";
    });
  };

  [submitBtn, resetBtn].forEach(addHoverEffect);
}
