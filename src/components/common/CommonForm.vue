<template>
  <div class="com-form">
    <rain-img class="rain1" />
    <rain-img class="rain2" />
    <button class="com-form__close" @click="store.setModal(false)">
      <icon-close />
    </button>
    <p class="base-title">Вызвать замерщика</p>
    <p class="com-form__subtitle">
      Оставьте ваши контактные данные, и наш менеджер свяжется с вами в течение
      10 минут
    </p>
    <common-feedback-form class="com-form__form" />
  </div>
</template>

<style lang="scss" scoped>
.base-title {
  font-size: 40px;
  line-height: 49px;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 26px;
  }
}

.rain1 {
  width: 322px;
  height: 608px;
  transform: rotate(9.26deg);
  left: -123px;
  top: -402px;

  @media (max-width: 1000px) {
    display: none;
  }
}

.rain2 {
  width: 322px;
  height: 608px;
  transform: rotate(9.26deg);
  right: -205px;
  top: 42px;

  @media (max-width: 1000px) {
    display: none;
  }
}

.com-form {
  width: 757px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(var(--modal));
  padding: 55px 30px;
  position: relative;
  background-image: url("@/assets/images/modal.png");
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1000px) {
    width: 350px;
    padding: 30px 15px;
  }

  &__close {
    position: absolute;
    background: transparent;
    top: 20px;
    right: 20px;

    @media (max-width: 1000px) {
      top: 10px;
      right: 10px;
    }
  }

  &__subtitle {
    font-size: 17px;
    line-height: 130%;
    text-align: center;
    max-width: 500px;
    margin: 5px 0 30px;

    @media (max-width: 1000px) {
      font-size: 13px;
      line-height: 18px;
      max-width: 280px;
    }
  }

  &__form {
    max-width: 540px;
    min-height: 305px;

    @media (max-width: 1000px) {
      max-width: 320px;
      min-height: 280px;
    }
  }
}
</style>
<script setup>
import IconClose from "@/components/icon/IconClose.vue";
import CommonFeedbackForm from "@/components/common/CommonFeedbackForm.vue";
import RainImg from "@/components/common/RainImg.vue";
import { useThemeStore } from "@/store/theme";

const store = useThemeStore();
</script>
