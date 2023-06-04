import { defineStore } from "pinia";

export const useThemeStore = defineStore("counter", {
  state: () => ({ themeLight: false, modal: false }),
  actions: {
    toggleTheme() {
      this.themeLight = !this.themeLight;
    },
    setModal(payload) {
      this.modal = payload;
    },
  },
});
