<template>
  <section class="main-screen container">
    <div class="main-screen__left">
      <h1>
        ВАШ
        <br />
        АПАРТ-ОТЕЛЬ <br />
        <icon-pin />
        <span>В МОСКВЕ</span>
      </h1>
      <base-button>забронировать</base-button>
    </div>
    <div class="main-screen__right">
      <main-screen-slider />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-screen {
  display: flex;
  align-items: center;
  padding-top: 65px;
  padding-bottom: 180px;

  &__left {
    margin-top: 5px;
    margin-left: -10px;

    h1 {
      font-family: "Futura PT", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 63px;
      line-height: 115.7%;
      text-transform: uppercase;
      margin: 0 0 50px;

      span {
        color: rgb(var(--mainColor));
      }

      svg {
        margin-right: 24px;
      }
    }

    button {
      min-width: 180px;
    }
  }

  &__right {
    height: 355px;
    margin-left: auto;
  }
}
</style>
<script setup>
import IconPin from "@/components/icon/IconPin.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import MainScreenSlider from "@/components/index/MainScreenSlider.vue";
</script>
