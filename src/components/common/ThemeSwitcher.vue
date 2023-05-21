<template>
  <button class="switcher" @click="switchTheme">
    <icon-theme
      :class="['switcher__icon', { 'switcher__icon--active': theme }]"
    />
  </button>
</template>
<script setup>
import IconTheme from "@/components/icon/IconTheme.vue";
import { ref } from "vue";
const theme = ref(false);
function switchTheme() {
  theme.value = !theme.value;
}
</script>

<style lang="scss" scoped>
.switcher {
  background: #282a2d;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
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
