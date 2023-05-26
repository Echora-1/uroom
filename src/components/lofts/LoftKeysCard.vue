<template>
  <div class="card">
    <img
      :src="`${require('@/assets/images/lofts/' + content?.img + '.jpg')}`"
      alt="news"
      width="1300"
      height="650"
      loading="lazy"
    />
    <div class="card__main">
      <span class="card__name">{{ content?.name }}</span>
      <p class="card__price">
        Цена: <span>{{ content?.price }} руб</span>
      </p>
    </div>
    <p class="card__text">
      <span>Описание: </span>
      {{ content?.text }}
    </p>
    <p class="card__text">
      <span>Материалы: </span>
      {{ content?.materials }}
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

  img {
    width: 100%;
    object-fit: contain;
    height: auto;
    max-height: 650px;
  }

  &__main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(var(--mainColor), 0.4);
    padding: 20px 0;
    margin-bottom: 30px;
  }

  &__name {
    font-size: 40px;
    line-height: 56px;
    position: relative;
    margin: 0;
  }

  &__text {
    margin: 0 0 30px;
    font-size: 17px;
    line-height: 35px;

    span {
      font-weight: 600;
    }
  }

  &__price {
    font-size: 40px;
    line-height: 56px;
    margin: 0;
    color: rgb(var(--mainColor));
  }
}
</style>
