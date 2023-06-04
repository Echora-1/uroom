<template>
  <main-content-wrap class="wrap-page">
    <bread-crumbs start :links="data.links" />
    <news-detail-block :content="data.content" />
  </main-content-wrap>
</template>
<script>
import MainContentWrap from "@/components/index/MainContentWrap.vue";
import NewsDetailBlock from "@/components/news/NewsDetailBlock.vue";
import BreadCrumbs from "@/components/common/BreadCrumbs.vue";
import { newsData } from "@/assets/data/newsData";

export default {
  components: { MainContentWrap, NewsDetailBlock, BreadCrumbs },

  data() {
    return {
      data: null,
    };
  },

  computed: {
    url() {
      return this.$route.params.id;
    },
  },

  watch: {
    url() {
      this.data = newsData[this.$route.params.id];
      window.document.title = this.data.title;
    },
  },

  created() {
    this.data = newsData[this.$route.params.id];
    window.document.title = this.data.title;
  },
};
</script>
