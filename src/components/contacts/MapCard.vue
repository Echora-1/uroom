<template>
  <div class="card">
    <h2>Как проехать {{ content?.title }}:</h2>
    <div class="card_map-wrap">
      <block-map class="card__map" :coordinates="content?.coord" />
    </div>
  </div>
</template>

<script>
import BlockMap from "@/components/common/BlockMap.vue";

export default {
  components: { BlockMap },
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  h2 {
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    margin: 0 0 32px;

    @media (max-width: 1000px) {
      margin: 0 0 18px;
    }
  }

  &__map-wrap {
    width: 100%;
  }

  &__map {
    height: 400px;
  }
}
</style>
