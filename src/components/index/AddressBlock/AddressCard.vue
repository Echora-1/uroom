<template>
  <div :class="['card', { 'card--reverse': content?.reverse }]">
    <div class="card__info">
      <p class="card__title">{{ content?.title }}</p>
      <p class="card__address">{{ content?.address }}</p>
      <ul class="card__list">
        <li v-for="(item, index) in content?.list" :key="index">{{ item }}</li>
      </ul>
      <div class="card__btns">
        <base-button>забронировать</base-button>
        <base-button transparent>подробнее</base-button>
      </div>
    </div>
    <div class="card__map">
      <img
        :src="require(`../../../assets/images/address/${content?.map}.png`)"
        width="404"
        height="404"
        alt="map"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  components: { BaseButton },

  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 40px;
  border: 1px solid #ebebeb;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &--reverse {
    flex-direction: row-reverse;
    justify-content: space-between;

    .card__info {
      margin-left: 90px;
    }
  }

  &__title {
    font-size: 18px;
    line-height: 22px;
    margin: 0 0 6px;
  }

  &__address {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin: 0 0 27px;
  }

  &__list {
    li {
      font-size: 13px;
      line-height: 18px;
      padding-left: 20px;
      max-width: 364px;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        width: 11px;
        height: 11px;
        left: 0;
        top: 4px;
        background: url("@/assets/images/listDecor.png") no-repeat center;
      }

      &:not(:last-child) {
        margin-bottom: 29px;
      }

      &:last-child {
        font-weight: 700;
      }
    }
  }

  &__info {
    max-width: 50%;
    width: 100%;
    position: relative;
  }

  &__btns {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: -88px;
    left: 0;

    button:first-child {
      margin-right: 15px;
    }
  }

  &__map {
    img {
      object-fit: contain;
    }
  }
}
</style>
