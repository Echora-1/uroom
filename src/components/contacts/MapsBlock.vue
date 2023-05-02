<template>
  <div class="maps">
    <map-card
      class="maps__item"
      v-for="(item, index) in content"
      :key="index"
      :content="item"
    />
  </div>
</template>
<script>
import MapCard from "@/components/contacts/MapCard.vue";

export default {
  components: { MapCard },

  props: {
    content: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.maps {
  margin-bottom: 55px;

  &__item:not(:last-child) {
    margin-bottom: 70px;

    @media (max-width: 1000px) {
      margin-bottom: 50px;
    }
  }
}
</style>
