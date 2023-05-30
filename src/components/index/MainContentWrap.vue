<template>
  <div class="main-content-wrap">
    <picture class="main-content-wrap__pic" v-if="!store.themeLight">
      <source
        type="image/webp"
        srcset="
          @/assets/images/maincontent/mcBg.webp    1x,
          @/assets/images/maincontent/mcBg@2x.webp 2x
        "
      />
      <img
        src="@/assets/images/maincontent/mcBg.png"
        width="1920"
        height="4219"
        alt=""
        srcset="@/assets/images/maincontent/mcBg@2x.png 2x"
        class="main-screen__img"
      />
    </picture>
    <picture class="main-content-wrap__pic" v-else>
      <source
        type="image/webp"
        srcset="
          @/assets/images/maincontent/lightMcBg.webp    1x,
          @/assets/images/maincontent/lightMcBg@2x.webp 2x
        "
      />
      <img
        src="@/assets/images/maincontent/lightMcBg.png"
        width="1920"
        height="4219"
        alt=""
        srcset="@/assets/images/maincontent/lightMcBg.png 2x"
        class="main-screen__img"
      />
    </picture>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.main-content-wrap {
  position: relative;
  z-index: 1;

  &__pic {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
<script setup>
import { useThemeStore } from "@/store/theme";

const store = useThemeStore();
</script>
