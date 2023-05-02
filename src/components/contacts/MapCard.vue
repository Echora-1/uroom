<template>
  <div class="card">
    <h2>Как проехать {{ content?.title }}:</h2>
    <img
      :src="require(`../../assets/images/maps/${content?.img}.png`)"
      width="936"
      height="400"
      alt="map"
    />
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

  img {
    object-fit: cover;
    width: 100%;
  }
}
</style>
