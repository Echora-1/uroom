<template>
  <main-content-wrap class="wrap-news-details">
    <bread-crumbs
      start
      :links="[
        { name: 'Новости', url: '/news' },
        { name: 'Особенности перегородок в стиле Лофт', url: '/news/1' },
      ]"
    />
    <news-detail-block />
  </main-content-wrap>
</template>
<script setup>
import MainContentWrap from "@/components/index/MainContentWrap.vue";
import NewsDetailBlock from "@/components/news/NewsDetailBlock.vue";
import BreadCrumbs from "@/components/common/BreadCrumbs.vue";
</script>

<style lang="scss" scoped>
.wrap-news-details {
  margin-top: 263px;
}
</style>
