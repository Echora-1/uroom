<template>
  <div class="product">
    <rain-img class="rain" />
    <div class="container product__wrap">
      <h2 class="base-title">Лофт перегородки от производителя</h2>
      <div class="product__list">
        <product-card
          v-for="(item, index) in products"
          :content="item"
          :key="index"
          class="product__list-item"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "@/components/index/ProductCard.vue";
import RainImg from "@/components/common/RainImg.vue";

const products = [
  {
    img: "pr1",
    title: "Лофт перегородки в квартиру",
    price: "18 000",
    url: "1",
  },
  {
    img: "pr2",
    title: "Лофт перегородки для бизнеса",
    price: "15 000",
    url: "2",
  },
  {
    img: "pr3",
    title: "Лофт перегородки для душевых и саун",
    price: "20 000",
    url: "3",
  },
  {
    img: "pr4",
    title: "Остекленение лестниц",
    price: "20 000",
    url: "4",
  },
  {
    img: "pr5",
    title: "Цельностеклянные конструкции",
    price: "8 000",
    url: "5",
  },
  {
    img: "pr6",
    title: "Эксклюзивный проект",
    price: "30 000",
    url: "6",
  },
];
</script>

<style lang="scss" scoped>
.rain {
  left: -120px;
  top: 120px;
  width: 234px;
  height: 442px;
  transform: matrix(1, 0, 0, -1, 0, 0);
}

.base-title {
  text-align: center;
  margin-top: 33px;
  margin-bottom: 53px;

  @media (max-width: 1000px) {
    margin: 30px 0;
  }
}

.product {
  width: 100%;
  background: var(--block-gradient);
  backdrop-filter: blur(10px);
  transform: matrix(1, 0, 0, -1, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 1000px) {
    background: linear-gradient(
      360deg,
      #171717 9.28%,
      rgba(27, 28, 29, 0.816544) 29.84%,
      rgba(17, 17, 17, 0.66) 50.91%,
      rgba(27, 27, 27, 0.879068) 73.98%,
      #2e2e30 96.51%
    );
  }

  &__wrap {
    padding-top: 20px;
    transform: matrix(1, 0, 0, -1, 0, 0);
    padding-bottom: 72px;
  }

  &__list {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 30px;

    @media (max-width: 1000px) {
      flex-direction: column;
      gap: 25px;
      align-items: center;
      padding-bottom: 0;
    }
  }

  &__list-item {
    width: calc(100% / 3 - 20px);

    @media (max-width: 1000px) {
      width: 100%;
    }
  }
}
</style>
