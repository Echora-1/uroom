<template>
  <div class="options">
    <div class="container options__wrap">
      <h2 class="base-title">Виды перегородок в квартиру</h2>
      <loft-options-tab />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-title {
  margin-bottom: 64px;
}

.options {
  background: rgba(44, 45, 46, 0.8);
  padding: 68px 0 74px;

  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
<script setup>
import LoftOptionsTab from "@/components/lofts/LoftOptionsTab.vue";
</script>
