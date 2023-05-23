<template>
  <main-content-wrap class="contact">
    <rain-img class="rain" />
    <rain-img class="rain2" />
    <image-map class="contact__map" />
    <contact-form />
  </main-content-wrap>
</template>
<script setup>
import MainContentWrap from "@/components/index/MainContentWrap.vue";
import ImageMap from "@/components/contact/ImageMap.vue";
import ContactForm from "@/components/contact/ContactForm.vue";
import RainImg from "@/components/common/RainImg.vue";
</script>

<style lang="scss" scoped>
.rain {
  left: -164px;
  top: -177px;
  width: 322px;
  height: 608px;
  transform: rotate(9.26deg);
  z-index: 2;
}

.rain2 {
  right: -183px;
  bottom: -104px;
  width: 322px;
  height: 608px;
  transform: rotate(9.26deg);
  z-index: 3;
}

.contact {
  position: relative;
  overflow: hidden;

  &__map {
    height: 723px;
    position: relative;
  }
}
</style>
