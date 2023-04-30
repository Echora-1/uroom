<template>
  <section class="container">
    <div class="connect">
      <p>Ждем Вас в гости, готовы Вас принять в любое время суток.</p>
      <base-button :transparent="isMobile">связаться с нами</base-button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  @media (max-width: 1000px) {
    padding: 0 10px;
  }
}

.connect {
  min-height: 240px;
  background: #f7f9fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  position: relative;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 1000px) {
    min-height: 274px;
    margin-bottom: 46px;

    button {
      background: transparent;
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 103px;
    height: 176px;
    background: url("../../assets/images/bgConnect.svg") no-repeat center;
    z-index: -1;
  }

  &::before {
    left: 62px;
    top: 12px;

    @media (max-width: 1000px) {
      left: 30px;
      top: 131px;
    }
  }

  &::after {
    right: 61px;
    top: -134px;

    @media (max-width: 1000px) {
      display: none;
    }
  }

  p {
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    max-width: 560px;
    margin: 38px 0 19px;

    @media (max-width: 1000px) {
      font-size: 28px;
      line-height: 34px;
      margin: 43px 0 20px;
      max-width: 320px;
    }
  }
}
</style>
<script setup>
import BaseButton from "@/components/base/BaseButton.vue";
import { isMobile } from "mobile-device-detect";
</script>
