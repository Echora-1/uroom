<template>
  <section class="container">
    <div class="connect">
      <p>Ждем Вас в гости, готовы Вас принять в любое время суток.</p>
      <base-button>связаться с нами</base-button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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
  }

  &::after {
    right: 61px;
    top: -134px;
  }

  p {
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    max-width: 560px;
    margin: 38px 0 19px;
  }
}
</style>
<script setup>
import BaseButton from "@/components/base/BaseButton.vue";
</script>
