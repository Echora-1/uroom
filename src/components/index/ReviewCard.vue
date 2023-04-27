<template>
  <div class="card">
    <div class="card__left">
      <img
        class="card__img"
        :src="require('../../assets/images/reviews/' + content.img + '.png')"
        width="238"
        height="238"
        alt="img"
      />
      <p class="card__name">{{ content.name }}</p>
      <div class="card__rating">
        <icon-star v-for="(_, index) in content.rating" :key="index" />
      </div>
    </div>
    <div class="card__right">
      <p class="card__title">Testimonials</p>
      <p class="card__text">
        {{ content.text }}
      </p>
    </div>
  </div>
</template>
<script>
import IconStar from "@/components/icon/IconStar.vue";

export default {
  components: { IconStar },

  props: {
    content: {
      type: Object,
      default: () => {
        return {
          name: "Morgan Wagenknecht",
          rating: 5,
          text: "Finally, an amazing dental office that accepts our insurance! (Meridian/County Care) I can't say enough good things about this office - first impression, the front desk is very kind and organized which is always appreciated.",
          img: "r1@2x",
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }

  &__left {
    background: #ffffff;
    box-shadow: 0px 8px 24px rgba(34, 48, 114, 0.07);
    border-radius: 8px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 1000px) {
      padding: 15px;
    }
  }

  &__right {
    flex-grow: 1;
    color: #ffffff;
    max-width: 786px;
    margin-left: auto;
    padding-left: 30px;

    @media (max-width: 1000px) {
      padding-left: 0;
      margin-right: auto;
    }
  }

  &__img {
    border-radius: 50%;

    @media (max-width: 1000px) {
      max-width: 98px;
      max-height: 98px;
    }
  }

  &__name {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin: 24px 0 8px;

    @media (max-width: 1000px) {
      margin: 9px 0 3px;
      font-size: 9px;
      line-height: 9px;
    }
  }

  &__rating {
    svg:not(:last-child) {
      margin-right: 8px;
    }

    @media (max-width: 1000px) {
      svg {
        width: 9px;
        height: 9px;
      }

      svg:not(:last-child) {
        margin-right: 3px;
      }
    }
  }

  &__title {
    font-weight: 700;
    font-size: 56px;
    line-height: 60px;
    margin: 0 0 46px;
    display: block;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);

    @media (max-width: 1000px) {
      display: none;
    }
  }

  &__text {
    font-size: 20px;
    line-height: 25px;
    max-width: 706px;

    @media (max-width: 1000px) {
      margin-top: 26px;
      font-size: 13px;
      line-height: 16px;
      text-align: center;
    }
  }
}
</style>
