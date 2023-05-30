import { defineStore } from "pinia";

export const useThemeStore = defineStore("counter", {
  state: () => ({ themeLight: false }),
  actions: {
    toggleTheme() {
      this.themeLight = !this.themeLight;
    },
  },
});
