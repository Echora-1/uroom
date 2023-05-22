<template>
  <div class="card">
    <img
      :src="`${require('@/assets/images/lofts/' + content?.img + '.jpg')}`"
      alt="news"
      width="360"
      height="280"
      loading="lazy"
    />
    <span class="card__name">{{ content?.name }}</span>
    <p class="card__text">
      {{ content?.text }}
    </p>
    <p class="card__price">
      Стоимость <span>{{ content?.price }} руб</span>
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
.card {
  display: flex;
  flex-direction: column;
  max-width: 360px;

  img {
    width: 100%;
    object-fit: contain;
  }

  &__name {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    max-width: 354px;
    border-bottom: 1px solid rgba(var(--mainColor), 0.4);
    padding: 20px 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 29px;
    position: relative;
  }

  &__text {
    margin: 8px 0 13px;
    max-width: 354px;
    font-size: 16px;
    line-height: 29px;
  }

  &__price {
    font-size: 18px;
    line-height: 29px;
    margin: 27px 0 0;

    span {
      color: rgb(var(--mainColor));
    }
  }
}
</style>
