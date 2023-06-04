<template>
  <main-content-wrap class="wrap-page">
    <bread-crumbs
      :start="!isMobile"
      :links="[{ name: 'Новости', url: '/news' }]"
    />
    <news-main-block />
  </main-content-wrap>
</template>
<script setup>
import NewsMainBlock from "@/components/news/NewsMainBlock.vue";
import MainContentWrap from "@/components/index/MainContentWrap.vue";
import BreadCrumbs from "@/components/common/BreadCrumbs.vue";
import { isMobile } from "mobile-device-detect";
</script>
