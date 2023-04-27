<template>
  <div class="details">
    <img
      :src="require(`../../assets/images/articleDetails/${img}.png`)"
      alt=""
      height="468"
      width="1512"
      class="details__img"
    />
    <div class="details__wrap">
      <div class="details__list">
        <p class="details__date">04/04/2023</p>
        <details-card
          v-for="(item, index) in content"
          :content="item"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DetailsCard from "@/components/articles/DetailsCard.vue";

export default {
  components: { DetailsCard },
  props: {
    content: {
      type: Array,
      default: () => [],
    },
    img: {
      type: String,
      default: "details1",
    },
  },
};
</script>

<style lang="scss" scoped>
.details {
  text-align: center;

  &__img {
    object-fit: cover;
    height: 468px;
    object-position: top;
    margin-bottom: -3px;
    width: 100%;

    @media (max-width: 1000px) {
      height: 252px;
      object-fit: cover;
    }
  }

  &__wrap {
    background: #ffffff;
  }

  &__list {
    padding: 45px 0 100px;
    text-align: start;
    max-width: 900px;
    margin: 0 auto;

    @media (max-width: 1000px) {
      padding: 45px 20px 30px;
    }
  }

  &__date {
    font-size: 22px;
    line-height: 160%;
    color: rgba(78, 78, 78, 0.6);
    margin: 0 0 30px;

    @media (max-width: 1000px) {
      font-size: 16px;
      line-height: 19px;
      margin: 0 0 20px;
    }
  }
}
</style>
