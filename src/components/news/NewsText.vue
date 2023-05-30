<template>
  <div class="text">
    <p v-if="content?.title" class="text__title">{{ content.title }}</p>
    <p class="text__text">
      {{ content.text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  &__title {
    font-weight: 700;
    font-size: 27px;
    line-height: 27px;
    margin: 0 0 34px;
  }

  &__text {
    font-size: 16px;
    line-height: 27px;
    margin: 0 0 34px;
  }
}
</style>
