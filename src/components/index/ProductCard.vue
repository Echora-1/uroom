<template>
  <div
    class="card"
    :style="{
      backgroundImage: `url(${require('@/assets/images/product/' +
        content?.img +
        '.png')})`,
    }"
  >
    <p class="card__title">{{ content?.title }}</p>
    <p class="card__price">от {{ content?.price }} руб./кв.м</p>
    <router-link class="card__btn" :to="`/lofts/${content?.url}`">
      <base-button>Подробнее</base-button>
    </router-link>
  </div>
</template>
<script>
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  components: { BaseButton },
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          img: "pr1",
          title: "Лофт перегородки в квартиру",
          price: "18 000",
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 413px;
  width: 100%;
  min-height: 495px;
  background-size: cover;
  padding: 53px 0 40px 40px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  color: #ffffff;

  &::before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      116.29deg,
      rgba(26, 30, 33, 0.8) 19.5%,
      rgba(26, 30, 33, 0) 78.79%
    );
    z-index: -1;
  }

  &__title {
    font-family: "Halvar Breitschrift", sans-serif;
    font-size: 28px;
    line-height: 36px;
    max-width: 350px;
    margin: 0 0 42px;
  }

  &__price {
    font-weight: 700;
    font-size: 18px;
    line-height: 29px;
    margin: 0;
  }

  &__btn {
    margin-top: auto;

    button {
      max-width: 167px;
    }
  }
}
</style>
