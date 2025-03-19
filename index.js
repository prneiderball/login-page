import { initForm } from "./scripts/form.js";
import { initTheme } from "./scripts/theme.js";
import { initHoverEffects } from "./scripts/hoverEffect.js";

document.addEventListener("DOMContentLoaded", () => {
  initForm();
  initTheme();
  initHoverEffects();
});
