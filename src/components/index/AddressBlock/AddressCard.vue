<template>
  <div :class="['card', { 'card--reverse': content?.reverse }]">
    <div class="card__info">
      <p class="card__title">{{ content?.title }}</p>
      <p class="card__address">{{ content?.address }}</p>
      <ul class="card__list">
        <li v-for="(item, index) in content?.list" :key="index">{{ item }}</li>
      </ul>
      <div class="card__btns">
        <router-link :to="`${$route.path}/reservation`"
          ><base-button>забронировать</base-button></router-link
        >
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

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    padding: 27px;
  }

  &--reverse {
    @media (min-width: 1001px) {
      flex-direction: row-reverse;
      justify-content: space-between;

      .card__info {
        margin-left: 90px;
      }
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
    @media (max-width: 1000px) {
      margin-bottom: 50px;
    }

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

        @media (max-width: 1000px) {
          margin-bottom: 25px;
        }
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

    @media (max-width: 1000px) {
      max-width: 100%;
    }
  }

  &__btns {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: -88px;
    left: 0;

    @media (max-width: 1000px) {
      bottom: -53px;
      left: 50%;
      transform: translateX(-50%);
    }

    button:first-child {
      margin-right: 15px;
    }
  }

  &__map {
    img {
      object-fit: contain;

      @media (max-width: 1000px) {
        max-width: 342px;
        max-height: 342px;
        width: 100%;
        object-fit: cover;
        margin-bottom: 37px;
      }
    }
  }
}
</style>
