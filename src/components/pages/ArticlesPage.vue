<template>
  <div>
    <div class="page-header">
      <h1 class="page-title">
        Articles &
        <span>News</span>
      </h1>
    </div>
    <articles-list />
    <ContactUs />
  </div>
</template>
<script setup>
import ContactUs from "@/components/index/ContactUs.vue";
import ArticlesList from "@/components/articles/ArticlesList.vue";
</script>
