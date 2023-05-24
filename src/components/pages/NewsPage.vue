<template>
  <main-content-wrap class="wrap-news">
    <bread-crumbs start :links="[{ name: 'Новости', url: '/news' }]" />
    <news-main-block />
  </main-content-wrap>
</template>
<script setup>
import NewsMainBlock from "@/components/news/NewsMainBlock.vue";
import MainContentWrap from "@/components/index/MainContentWrap.vue";
import BreadCrumbs from "@/components/common/BreadCrumbs.vue";
</script>

<style lang="scss" scoped>
.wrap-news {
  margin-top: 263px;
}
</style>
