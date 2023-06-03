<template>
  <div class="submit-app">
    <div>
      <h2>Оставьте заявку на замер</h2>
      <p>
        Для рационального зонирования комнат, закажите стеклянные перегородки, в
        нашей компании. Оставьте заявку или позвоните по телефону: +7 (925)
        43-77-300
      </p>
    </div>
    <base-button transparent>Вызвать замерщика</base-button>
  </div>
</template>

<style lang="scss" scoped>
.submit-app {
  padding: 48px;
  background: rgba(236, 45, 36, 0.5);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
  }

  h2 {
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
    letter-spacing: 1px;
    margin: 0 0 24px;

    @media (max-width: 1000px) {
      font-size: 15px;
      line-height: 20px;
      margin: 0 0 14px;
    }
  }

  p {
    font-size: 18px;
    line-height: 32px;
    max-width: 820px;
    margin: 0;

    @media (max-width: 1000px) {
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 25px;
    }
  }
}
</style>
<script setup>
import BaseButton from "@/components/base/BaseButton.vue";
</script>
