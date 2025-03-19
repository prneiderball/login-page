export function initTheme() {
  const submitBtn = document.querySelector(".form__button--submit");
  const resetBtn = document.querySelector(".form__button--reset");

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

  const changeBackgroundTheme = () => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();

    document.documentElement.style.setProperty("--primary-color", color1);
    document.documentElement.style.setProperty("--accent-color", color2);
    document.documentElement.style.setProperty("--secondary-color", color3);

    if (submitBtn) submitBtn.style.backgroundColor = color1;
    if (resetBtn) resetBtn.style.backgroundColor = color1;
  };

  if (resetBtn) resetBtn.addEventListener("click", changeBackgroundTheme);
  document.body.addEventListener("dblclick", changeBackgroundTheme);
}
