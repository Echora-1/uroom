<template>
  <div class="mainscreen-wrap">
    <img
      src="@/assets/images/mainscreen/msBg.jpg"
      width="1920"
      height="723"
      alt=""
      srcset="@/assets/images/mainscreen/msBg@2x.jpg 2x"
      class="mainscreen-wrap__pic"
    />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.mainscreen-wrap {
  position: relative;
  z-index: 2;

  &__pic {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    object-fit: cover;
    width: 100%;

    @media (max-width: 1000px) {
      height: 328px;
    }
  }
}
</style>
<script setup></script>
