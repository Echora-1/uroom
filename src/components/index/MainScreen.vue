<template>
  <div class="main-screen">
    <div class="container">
      <rain-img class="rain" />
      <h1>
        Стеклянные Перегородки <br />
        в стиле Лофт, под ключ
      </h1>
      <p>В Москве и Московской области</p>
      <base-button class="main-screen__btn" border
        >Рассчитать стоимость</base-button
      >
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

  @media (max-width: 1000px) {
    display: none;
  }
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

  @media (max-width: 1000px) {
    padding: 94px 0 103px;
    min-height: auto;
    background: linear-gradient(
      360deg,
      #171717 9.28%,
      rgba(27, 28, 29, 0.816544) 29.84%,
      rgba(17, 17, 17, 0.66) 50.91%,
      rgba(27, 27, 27, 0.879068) 73.98%,
      #2e2e30 96.51%
    );
  }

  h1 {
    font-family: "Halvar Breitschrift", sans-serif;
    font-size: 52px;
    line-height: 63px;
    letter-spacing: 2.6px;
    text-transform: uppercase;
    margin: 0 0 23px;

    @media (max-width: 1000px) {
      font-size: 17px;
      line-height: 26px;
      margin: 0 0 10px;
    }
  }

  p {
    margin: 0 0 51px;
    font-size: 25px;
    line-height: 38px;

    @media (max-width: 1000px) {
      font-size: 12px;
      line-height: 13px;
      margin: 0 0 29px;
    }
  }

  &__btn {
    @media (max-width: 1000px) {
      font-size: 8px;
      line-height: 9px;
      padding: 8px 10px;
    }
  }
}
</style>
