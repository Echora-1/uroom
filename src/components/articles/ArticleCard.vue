<template>
  <div :class="['card', { 'card--small': small }]">
    <img
      :src="require(`../../assets/images/articles/${content?.img}.png`)"
      width="626"
      height="336"
      alt=""
      class="card__img"
    />
    <div class="card__info">
      <span class="card__date">{{ content?.date }}</span>
      <p class="card__title">{{ content?.title }}</p>
      <p class="card__subtitle">{{ content?.subtitle }}</p>
      <div class="card__footer">
        <p class="card__text">
          {{ content?.text }}
        </p>
        <router-link :to="content?.path" class="card__link"
          >Read More <IconArrow
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import IconArrow from "@/components/icon/IconArrow.vue";

export default {
  components: { IconArrow },
  props: {
    content: {
      type: Object,
      default: () => {},
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  max-height: 338px;
  background: #f8f8f8;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  overflow: hidden;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }

  &__img,
  &__info {
    width: 50%;

    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  &__img {
    object-fit: cover;

    @media (max-width: 1000px) {
      max-height: 115px;
    }
  }

  &__info {
    padding: 43px 0 30px 47px;
    position: relative;

    @media (max-width: 1000px) {
      padding: 16px 20px !important;
    }
  }

  &__title,
  &__subtitle {
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    margin: 0;

    @media (max-width: 1000px) {
      font-size: 18px;
      line-height: 18px;
    }
  }

  &__title {
    margin-bottom: 15px;

    @media (max-width: 1000px) {
      margin-bottom: 5px;
    }
  }

  &__subtitle {
    color: #2180bc;
  }

  &__date {
    position: absolute;
    right: 47px;
    top: 43px;
    font-size: 18px;
    line-height: 160%;
    color: rgba(78, 78, 78, 0.6);

    @media (max-width: 1000px) {
      font-size: 10px;
      line-height: 160%;
      top: 16px !important;
      right: 20px !important;
    }
  }

  &__text {
    margin: 15px 0 24px;
    font-size: 20px;
    line-height: 32px;
    color: #777777;
    max-width: 568px;

    @media (max-width: 1000px) {
      font-size: 12px;
      line-height: 15px;
      max-width: 203px;
      margin-bottom: 0;
    }
  }

  &__link {
    font-size: 20px;
    line-height: 32px;
    color: #0c74b5;
    font-weight: bold;
    display: flex;
    align-items: center;

    svg {
      margin-left: 13px;
    }

    @media (max-width: 1000px) {
      font-size: 10px;
      line-height: 160%;

      svg {
        margin-left: 6px;
        width: 10px;
        height: 7px;
      }
    }
  }

  &__footer {
    @media (max-width: 1000px) {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
  }

  &--small {
    width: 50%;
    flex-direction: column;
    max-height: unset;

    .card__img,
    .card__info {
      width: 100%;
    }

    .card__img {
      width: 100%;
      height: 193px;
      object-fit: cover;
      object-position: top;
    }

    .card__info {
      padding: 23px 0 30px 28px;
    }

    .card__date {
      top: 23px;
      right: 28px;
    }
  }
}
</style>
