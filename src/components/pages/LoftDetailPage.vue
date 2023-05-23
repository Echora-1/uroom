<template>
  <div>
    <loft-main-screen />
    <bread-crumbs />
    <main-content-wrap>
      <loft-main-block />
      <loft-options />
      <loft-faq />
    </main-content-wrap>
  </div>
</template>
<script setup>
import LoftMainScreen from "@/components/lofts/LoftMainScreen.vue";
import BreadCrumbs from "@/components/common/BreadCrumbs.vue";
import MainContentWrap from "@/components/index/MainContentWrap.vue";
import LoftMainBlock from "@/components/lofts/LoftMainBlock.vue";
import LoftOptions from "@/components/lofts/LoftOptions.vue";
import LoftFaq from "@/components/lofts/LoftFaq.vue";
</script>
