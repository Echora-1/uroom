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
  },
  {
    img: "pr2",
    title: "Лофт перегородки для бизнеса",
    price: "15 000",
  },
  {
    img: "pr3",
    title: "Лофт перегородки для душевых и саун",
    price: "20 000",
  },
  {
    img: "pr4",
    title: "Остекленение лестниц",
    price: "20 000",
  },
  {
    img: "pr5",
    title: "Цельностеклянные конструкции",
    price: "8 000",
  },
  {
    img: "pr6",
    title: "Эксклюзивный проект",
    price: "30 000",
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
  margin-bottom: 53px;
}

.product {
  width: 100%;
  background: linear-gradient(
    0deg,
    #212324 3.18%,
    rgba(27, 28, 29, 0.816544) 29.84%,
    rgba(17, 17, 17, 0.66) 50.91%,
    rgba(27, 27, 27, 0.879068) 73.98%,
    rgba(32, 32, 33, 0.9) 96.51%
  );
  backdrop-filter: blur(10px);
  transform: matrix(1, 0, 0, -1, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

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
  }

  &__list-item {
    width: calc(100% / 3 - 20px);
  }
}
</style>
