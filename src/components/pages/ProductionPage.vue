<template>
  <main-content-wrap class="wrap-page">
    <bread-crumbs
      :start="!isMobile"
      :links="[{ name: 'Производство', url: '/production' }]"
    />
    <production-block />
  </main-content-wrap>
</template>
<script setup>
import MainContentWrap from "@/components/index/MainContentWrap.vue";
import BreadCrumbs from "@/components/common/BreadCrumbs.vue";
import ProductionBlock from "@/components/production/ProductionBlock.vue";
import { isMobile } from "mobile-device-detect";
</script>
