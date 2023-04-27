<template>
  <div class="rating">
    <icon-rating v-for="(_, index) in rating" :key="index" />
  </div>
</template>
<script>
import IconRating from "@/components/icon/IconRating.vue";
export default {
  components: { IconRating },

  props: {
    rating: {
      type: Number,
      default: 5,
    },
  },
};
</script>

<style lang="scss" scoped>
.rating {
  display: flex;

  svg {
    margin-right: 10px;
  }
}
</style>
