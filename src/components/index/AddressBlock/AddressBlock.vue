<template>
  <section class="address container">
    <h2 class="base-title">
      {{ address.length > 1 ? "Наши адреса" : "Адрес" }}
    </h2>
    <address-card
      v-for="(item, index) in address"
      :key="index"
      class="address__item"
      :content="item"
    />
  </section>
</template>

<script>
import AddressCard from "@/components/index/AddressBlock/AddressCard.vue";

export default {
  components: { AddressCard },
  props: {
    address: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.base-title {
  margin-bottom: 30px;
}

.address {
  padding-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__item {
    margin-bottom: 100px;
  }
}
</style>
