<template>
  <div class="main-news">
    <div class="container">
      <h2 class="base-title">Новости</h2>
      <div class="main-news__list">
        <news-card v-for="(item, index) in list" :content="item" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "@/components/index/NewsCard.vue";

export default {
  components: { NewsCard },
  props: {
    list: {
      type: Array,
      default: () => [
        {
          img: "news1",
          name: "Перегородки в стиле Лофт",
          url: "/news/1",
          text: "Стеклянные перегородки-лофт – чудо дизайнерской мысли и воплощение удобства, ведь они одновременно и объединяют пространство, и гармонично разделяют его на приватные секторы.",
        },
        {
          img: "news2",
          name: "Особенности перегородок\n" + "в стиле Лофт",
          url: "/news/2",
          text: "Лофт – это популярный стиль интерьера, который подходит для студий, однокомнатных квартир, небольших домов, жилых гаражей, офисов и т.д. ",
        },
        {
          img: "news3",
          name: "Лофт-перегородки: идеи\n" + "для больших и маленьких квартир",
          url: "/news/3",
          text:
            "Светопроницаемые перегородки \n" +
            "из стекла особенно подходят \n" +
            "для выделения функциональных зон \n" +
            "в помещении, где всего одно окно.",
        },
      ],
    },
  },
};
</script>

<style lang="scss" scoped>
.base-title {
  margin-bottom: 60px;
}

.main-news {
  padding-top: 50px;
  padding-bottom: 120px;
  background: var(--block-gradient);
  backdrop-filter: blur(10px);

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 80px;
    justify-content: space-between;
  }

  &__item {
    width: calc((100% / 3) - (160px / 3));
  }
}
</style>
