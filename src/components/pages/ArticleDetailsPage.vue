<template>
  <div>
    <div class="page-header">
      <h1 class="page-title">
        {{ title[0] }} <br />
        <span>{{ title[1] }} </span>
      </h1>
    </div>
    <article-details :content="content" :img="img" />
  </div>
</template>
<script>
import ArticleDetails from "@/components/articles/ArticleDetails.vue";
import details from "@/assets/data/details.json";
export default {
  components: { ArticleDetails },
  data() {
    return {
      content: [],
      title: ["", ""],
      img: "",
    };
  },
  created() {
    this.content = details[this.$route.params.id].content;
    this.title = details[this.$route.params.id].title;
    this.img = details[this.$route.params.id].img;
  },
};
</script>
