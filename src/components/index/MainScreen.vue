<template>
  <div class="main-screen">
    <div class="container">
      <rain-img class="rain" />
      <h1>
        Стеклянные Перегородки <br />
        в стиле Лофт, под ключ
      </h1>
      <p>В Москве и Московской области</p>
      <base-button border>Рассчитать стоимость</base-button>
    </div>
  </div>
</template>
<script setup>
import BaseButton from "@/components/base/BaseButton.vue";
import RainImg from "@/components/common/RainImg.vue";
</script>

<style lang="scss" scoped>
.rain {
  right: 0;
  bottom: -136px;
  width: 234px;
  height: 442px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-screen {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 210px 0 217px;
  min-height: 723px;
  color: #ffffff;
  height: 100%;
  background: var(--main-screen-bg);

  h1 {
    font-family: "Halvar Breitschrift", sans-serif;
    font-size: 52px;
    line-height: 63px;
    letter-spacing: 2.6px;
    text-transform: uppercase;
    margin: 0 0 23px;
  }

  p {
    margin: 0 0 51px;
    font-size: 25px;
    line-height: 38px;
  }
}
</style>
