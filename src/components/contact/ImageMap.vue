<template>
  <div class="image-map">
    <img
      src="../../assets/images/map.png"
      width="1940"
      height="804"
      alt="map"
      srcset="@/assets/images/map@2x.png 2x"
      class="image-map__img"
    />
  </div>
</template>

<style lang="scss" scoped>
.image-map {
  position: relative;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(27, 28, 29, 0) 0%,
      rgba(27, 27, 27, 0.39) 52.49%,
      #202021 100%
    );
  }

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 255px;
    left: 0;
    right: 0;
    bottom: -135px;
    z-index: 1;
    background: #202021;
    filter: blur(110px);
  }

  &__img {
    object-fit: cover;
    object-position: left;
    height: 100%;
    max-height: 804px;
  }
}
</style>
<script setup></script>
