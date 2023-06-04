<template>
  <main-content-wrap class="contact">
    <bread-crumbs
      class="brd"
      :links="[{ name: 'Контакты', url: '/contacts' }]"
    />
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
import BreadCrumbs from "@/components/common/BreadCrumbs.vue";
</script>

<style lang="scss" scoped>
.brd {
  position: relative;
  margin-top: 80px;
  z-index: 2;

  @media (max-width: 1000px) {
    margin-top: 0;
  }
}

.rain {
  left: -164px;
  top: -177px;
  width: 322px;
  height: 608px;
  transform: rotate(9.26deg);
  z-index: 2;

  @media (max-width: 1000px) {
    display: none;
  }
}

.rain2 {
  right: -183px;
  bottom: -104px;
  width: 322px;
  height: 608px;
  transform: rotate(9.26deg);
  z-index: 3;
  @media (max-width: 1000px) {
    display: none;
  }
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
