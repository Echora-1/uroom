<template>
  <button class="switcher" @click="switchTheme">
    <icon-theme
      :is-light="store.themeLight"
      :class="[
        'switcher__icon',
        { 'switcher__icon--active': store.themeLight },
      ]"
    />
  </button>
</template>
<script setup>
import IconTheme from "@/components/icon/IconTheme.vue";
import { useThemeStore } from "@/store/theme";
const store = useThemeStore();
function switchTheme() {
  store.toggleTheme();
  document.body.classList.toggle("light");
}
</script>

<style lang="scss" scoped>
.switcher {
  background: rgb(var(--theme-switcher-bg));
  box-shadow: var(--theme-switcher-shadow);
  border-radius: 27.6804px;
  width: 86px;
  height: 42px;
  position: relative;

  &__icon {
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translate(0, -50%);
    transition: all 0.3s;

    &--active {
      transform: translate(45px, -50%);
    }
  }
}
</style>
