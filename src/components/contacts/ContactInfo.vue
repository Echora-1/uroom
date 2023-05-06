<template>
  <div class="info">
    <div class="info__left">
      <h1>Контакты:</h1>
      <div class="info__list">
        <p v-for="(item, index) in content?.address" :key="index">
          <icon-address />
          {{ item }}
        </p>
        <a :href="content?.phoneLink">
          <icon-info-phone />
          {{ content?.phone }}</a
        >
        <a :href="content?.emailLink">
          <icon-email />
          {{ content?.email }}</a
        >
      </div>
      <base-social class="info__social" />
    </div>
    <div class="info__right">
      <div class="info__reservation">
        <icon-reservation />
        <p>
          Бронирование номера <br />
          осуществляется <span>круглосуточно!</span>
        </p>
      </div>
      <a @click="$emit('doc')" class="base-link">Посмотреть лицензию</a>
    </div>
  </div>
</template>
<script>
import BaseSocial from "@/components/base/BaseSocial.vue";
import IconAddress from "@/components/icon/info/IconAddress.vue";
import IconInfoPhone from "@/components/icon/info/IconInfoPhone.vue";
import IconEmail from "@/components/icon/info/IconEmail.vue";
import IconReservation from "@/components/icon/info/IconReservation.vue";

export default {
  components: {
    IconReservation,
    IconEmail,
    IconInfoPhone,
    BaseSocial,
    IconAddress,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  margin-top: 26px;
  margin-bottom: 68px;
  display: flex;
  width: 100%;
  align-items: flex-end;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    margin: 0 0 30px;
  }

  &__left,
  &__right {
    width: 50%;

    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  &__left {
    @media (max-width: 1000px) {
      margin-bottom: 40px;
    }
  }

  &__list {
    a,
    p {
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      margin: 0 0 30px;
    }

    svg {
      margin-right: 12px;
    }

    p {
      svg {
        margin-right: 14px;
      }
    }
  }

  &__social {
    padding-top: 8px;
  }

  &__reservation {
    padding: 23px 32px 23px 42px;
    border: 1px solid #ffc000;
    margin-bottom: 27px;

    p {
      font-size: 17px;
      line-height: 26px;
      margin: 17px 0 0;

      span {
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }
}
</style>
