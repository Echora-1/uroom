<template>
  <div class="news-block">
    <div class="news-block__wrap container">
      <rain-img class="rain" />
      <rain-img class="rain2" />
      <div class="news-block__header">
        <h2 class="base-title">Новости и статьи</h2>
        <router-link to="/">Смотреть все <icon-arrow /></router-link>
      </div>
      <div class="news-block__list">
        <news-card
          v-for="(item, index) in newsContent"
          :content="item"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rain {
  top: -52px;
  right: -236px;
  transform: rotate(-30deg);
  width: 322px;
  height: 349px;
}

.rain2 {
  bottom: -360px;
  left: -162px;
  transform: rotate(-30deg);
  width: 322px;
  height: 349px;
}

.news-block {
  padding: 76px 0 111px;
  background: linear-gradient(
    0deg,
    #26282a 3.18%,
    rgba(27, 28, 29, 0.816544) 29.84%,
    rgba(17, 17, 17, 0.66) 50.91%,
    rgba(27, 27, 27, 0.879068) 73.98%,
    rgba(32, 32, 33, 0.9) 96.51%
  );
  backdrop-filter: blur(10px);

  &__wrap {
    position: relative;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 54px;

    a {
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.7px;
      text-transform: uppercase;
      color: rgb(var(--mainColor));

      svg {
        margin-left: 10px;
      }
    }
  }

  &__list {
    display: flex;
    justify-content: space-between;
    gap: 25px;
  }
}
</style>

<script setup>
import IconArrow from "@/components/icon/IconArrow.vue";
import NewsCard from "@/components/index/NewsCard.vue";
import RainImg from "@/components/common/RainImg.vue";

const newsContent = [
  {
    img: "news1",
    name: "Перегородки в стиле Лофт",
    url: "/",
    text: "Стеклянные перегородки-лофт – чудо дизайнерской мысли и воплощение удобства, ведь они одновременно и объединяют пространство, и гармонично разделяют его на приватные секторы.",
  },
  {
    img: "news2",
    name: "Особенности перегородок\n" + "в стиле Лофт",
    url: "/",
    text: "Лофт – это популярный стиль интерьера, который подходит для студий, однокомнатных квартир, небольших домов, жилых гаражей, офисов и т.д. ",
  },
  {
    img: "news3",
    name: "Лофт-перегородки: идеи\n" + "для больших и маленьких квартир",
    url: "/",
    text:
      "Светопроницаемые перегородки \n" +
      "из стекла особенно подходят \n" +
      "для выделения функциональных зон \n" +
      "в помещении, где всего одно окно.",
  },
];
</script>
