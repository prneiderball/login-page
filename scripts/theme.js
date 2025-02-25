export function initTheme() {
  const submitBtn = document.querySelector(".form__button--submit");
  const resetBtn = document.querySelector(".form__button--reset");

  // Generates a random hex color code
  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

  // Changes the background theme by updating CSS variables and button colors
  const changeBackgroundTheme = () => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();

    document.documentElement.style.setProperty("--primary-color", color1);
    document.documentElement.style.setProperty("--accent-color", color2);
    document.documentElement.style.setProperty("--secondary-color", color3);

    submitBtn.style.backgroundColor = color1;
    resetBtn.style.backgroundColor = color1;
  };

  // Event listeners for theme change actions
  resetBtn.addEventListener("click", changeBackgroundTheme);
  document.body.addEventListener("dblclick", changeBackgroundTheme);
}
