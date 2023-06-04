<template>
  <div class="block">
    <div class="container">
      <h2 class="base-title" v-if="isMobile">Доставка и оплата</h2>
      <div class="block__form">
        <div class="block__left">
          <h2 class="base-title" v-if="!isMobile">
            Доставка <br />
            и оплата
          </h2>
          <p class="block__title"><icon-mini-pin /> Способы доставки:</p>
          <p class="block__text">
            Доставка в пределах МКАД - <span>3500 руб.</span>
          </p>
          <p class="block__text block__text--last">
            За пределы МКАД - от <span>4 000 руб.</span>
          </p>
          <p class="block__title"><icon-mini-card /> Способы оплаты:</p>
          <p class="block__text">Интернет-эквайринг для физических лиц</p>
          <p class="block__text">Наличный расчет</p>
          <p class="block__text">Безналичный расчет</p>
        </div>
        <div class="block__right">
          <img
            src="../../assets/images/delivery.png"
            width="639"
            height="568"
            alt="delivery"
            srcset="../../assets/images/delivery@2x.png 2x"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-title {
  margin: 0 0 45px;

  @media (max-width: 1000px) {
    text-align: center;
  }
}

.block {
  padding: 96px 0 142px;
  background: var(--block-gradient);
  backdrop-filter: blur(10px);

  @media (max-width: 1000px) {
    padding-top: 40px;
  }

  &__form {
    min-height: 556px;
    width: 100%;
    max-width: 1300px;
    background: rgb(var(--form-bg));
    box-shadow: 0px 0px 158px rgba(255, 146, 132, 0.06);
    position: relative;
    display: flex;

    @media (max-width: 1000px) {
      flex-direction: column;
      max-width: 340px;
      margin: 0 auto;
      min-height: auto;
    }
  }

  &__left {
    padding: 57px 40px 70px 65px;

    @media (max-width: 1000px) {
      padding: 30px 20px 40px;
      text-align: center;
    }
  }

  &__right {
    background: rgb(var(--form-bg2));
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      object-fit: contain;

      @media (max-width: 1000px) {
        width: 100%;
        object-fit: cover;
        height: 280px;
      }
    }
  }

  &__title {
    font-weight: 700;
    font-size: 17px;
    line-height: 25px;
    display: flex;
    align-items: center;
    margin: 0 0 18px;

    @media (max-width: 1000px) {
      flex-direction: column;
    }

    svg {
      margin-right: 13px;

      @media (max-width: 1000px) {
        margin-right: 0;
        margin-bottom: 4px;
      }
    }
  }

  &__text {
    font-size: 17px;
    line-height: 25px;
    margin: 0 0 10px;

    @media (max-width: 1000px) {
      font-size: 12px;
      line-height: 25px;
    }

    span {
      font-weight: 700;
    }

    &--last {
      margin-bottom: 32px;
    }
  }
}
</style>
<script setup>
import IconMiniPin from "@/components/icon/IconMiniPin.vue";
import IconMiniCard from "@/components/icon/IconMiniCard.vue";
import { isMobile } from "mobile-device-detect";
</script>
