<template>
  <div class="container list">
    <article-card
      v-for="(item, index) in cards"
      :content="item"
      :small="index !== 0"
      class="list__item"
      :key="index"
    />
  </div>
</template>
<script>
import ArticleCard from "@/components/articles/ArticleCard.vue";

export default {
  components: { ArticleCard },
  data() {
    return {
      card: {
        img: "article1",
        date: "04/04/2023",
        title: "Tooth Decay:",
        subtitle: "How To Assess Your Risk",
        text: "Tooth decay is one of the most pervasive diseases of our time but modern dentistry has made major strides in the battle against cavities.",
        path: "/articles/1",
      },
    };
  },

  computed: {
    cards() {
      return [
        {
          img: "article1",
          date: "04/04/2023",
          title: "Tooth Decay:",
          subtitle: "How To Assess Your Risk",
          text: "Tooth decay is one of the most pervasive diseases of our time but modern dentistry has made major strides in the battle against cavities.",
          path: "/articles/1",
        },
        {
          img: "article2",
          date: "04/04/2023",
          title: "Porcelain Veneers",
          subtitle: "Easy Without the Drill",
          text: "A new look at drill-free cosmetic dentistry.",
          path: "/articles/2",
        },
        {
          img: "article3",
          date: "04/04/2023",
          title: "5 Keys",
          subtitle: "To Dental Implant Success",
          text: "Evaluating Your Options for Replacing Missing Teeth",
          path: "/articles/3",
        },
        {
          img: "article4",
          date: "04/04/2023",
          title: "Porcelain Veneers",
          subtitle: "Easy Without the Drill",
          text: "A new look at drill-free cosmetic dentistry",
          path: "/articles/4",
        },
        {
          img: "article5",
          date: "04/04/2023",
          title: "5 Keys",
          subtitle: "To Dental Implant Success",
          text: "Evaluating Your Options for Replacing Missing Teeth",
          path: "/articles/5",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 44px;
  margin-bottom: 100px;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
  }

  &__item {
    width: calc(50% - 22px);

    @media (max-width: 1000px) {
      width: 100%;
    }

    &:first-child {
      width: 100%;
    }
  }
}
</style>
