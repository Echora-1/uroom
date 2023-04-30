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

  @media (max-width: 1000px) {
    margin-top: 45px;
    margin-bottom: 15px;
  }
}

.container {
  @media (max-width: 1000px) {
    padding: 0 10px;
  }
}

.address {
  padding-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__item {
    margin-bottom: 100px;

    @media (max-width: 1000px) {
      margin-bottom: 70px;
    }
  }
}
</style>
