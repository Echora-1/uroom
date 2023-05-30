<template>
  <div class="options">
    <div class="container options__wrap">
      <h2 class="base-title">Больше примеров наших работ</h2>
      <div class="options__list">
        <img
          v-for="(item, index) in content"
          :src="`${require('@/assets/images/lofts/' + item + '.jpg')}`"
          width="406"
          height="296px"
          :key="index"
          class="options__item"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Array,
      default: () => [
        "1/options/options1",
        "1/options/options2",
        "1/options/options3",
        "1/options/options4",
        "1/options/options5",
        "1/options/options6",
      ],
    },
  },
};
</script>

<style lang="scss" scoped>
.base-title {
  margin-bottom: 50px;
}

.options {
  background: var(--block-bg2);
  padding: 68px 0 74px;

  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__list {
    display: flex;
    gap: 27px;
    flex-wrap: wrap;
  }

  &__item {
    width: calc((100% - 54px) / 3);
    object-fit: cover;
    height: auto;
    max-height: 296px;
    filter: grayscale(1);
    transition: all 0.3s;

    &:hover {
      filter: none;
      box-shadow: 0 0 0 15px rgba(255, 146, 132, 0.2);
    }
  }
}
</style>
