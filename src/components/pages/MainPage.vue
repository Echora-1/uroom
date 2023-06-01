<template>
  <div class="line line1"></div>
  <div class="line line2"></div>
  <div class="line"></div>
  <div class="line line4"></div>
  <div class="line line5"></div>
  <mainscreen-wrap>
    <main-screen />
  </mainscreen-wrap>
  <main-content-wrap>
    <product-block />
    <about-company />
    <advantages-block />
    <peculiarities-block />
    <news-block />
  </main-content-wrap>
</template>

<style lang="scss" scoped>
.line1 {
  left: 3%;
  @media (max-width: 1000px) {
    left: 8%;
  }
}

.line2 {
  left: 25%;
  @media (max-width: 1000px) {
    display: none;
  }
}

.line4 {
  left: 75%;

  @media (max-width: 1000px) {
    display: none;
  }
}

.line5 {
  left: unset;
  right: 3%;

  @media (max-width: 1000px) {
    right: 8%;
  }
}
</style>
<script setup>
import MainscreenWrap from "@/components/index/MainscreenWrap.vue";
import MainContentWrap from "@/components/index/MainContentWrap.vue";
import MainScreen from "@/components/index/MainScreen.vue";
import ProductBlock from "@/components/index/ProductBlock.vue";
import AboutCompany from "@/components/index/AboutCompany.vue";
import AdvantagesBlock from "@/components/index/AdvantagesBlock.vue";
import PeculiaritiesBlock from "@/components/index/PeculiaritiesBlock.vue";
import NewsBlock from "@/components/index/NewsBlock.vue";
</script>
