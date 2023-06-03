<template>
  <div
    class="mainscreen-wrap"
    :style="{
      background: `url(${require('@/assets/images/lofts/' +
        content?.img +
        '/loftms.jpg')}) center/cover`,
    }"
  >
    <div class="main-screen">
      <div class="main-screen__wrap container">
        <h1>
          {{ content?.title }}
        </h1>
        <p>{{ content?.subtitle }}</p>
        <base-button border>Рассчитать стоимость</base-button>
      </div>
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
      default: () => {
        return {
          img: "1",
          title: "Лофт перегородки для квартиры и дома",
          subtitle: "По индивидуальному проекту",
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.mainscreen-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}

.rain {
  right: 0;
  bottom: -136px;
  width: 234px;
  height: 442px;
}

.main-screen {
  padding: 210px 0 217px;
  color: #ffffff;
  background: var(--main-screen-bg);
  width: 100%;

  @media (max-width: 1000px) {
    background: linear-gradient(
      360deg,
      #1a1a1a 9.28%,
      rgba(27, 28, 29, 0.816544) 29.84%,
      rgba(17, 17, 17, 0.66) 50.91%,
      rgba(27, 27, 27, 0.879068) 73.98%,
      #2e2e30 96.51%
    );
    padding: 100px 0 120px;
    min-height: 370px;
  }

  &__wrap {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-family: "Halvar Breitschrift", sans-serif;
    font-size: 52px;
    line-height: 63px;
    letter-spacing: 2.6px;
    text-transform: uppercase;
    margin: 0 0 23px;
    max-width: 840px;

    @media (max-width: 1000px) {
      font-size: 18px;
      line-height: 26px;
      letter-spacing: 0.9px;
      margin: 0 0 10px;
    }
  }

  p {
    margin: 0 0 51px;
    font-size: 25px;
    line-height: 38px;

    @media (max-width: 1000px) {
      font-size: 12px;
      line-height: 13px;
      margin: 0 0 27px;
    }
  }

  button {
    @media (max-width: 1000px) {
      font-size: 8px;
      line-height: 9px;
      padding: 8px 10px;
    }
  }
}
</style>
