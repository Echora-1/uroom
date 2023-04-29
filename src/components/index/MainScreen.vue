<template>
  <section class="main-screen container">
    <div class="main-screen__left">
      <h1>
        ваш
        <br />
        апарт-отель <br />
        <icon-pin />
        <span>в {{ title }}</span>
      </h1>
      <base-button>забронировать</base-button>
    </div>
    <div class="main-screen__right">
      <main-screen-slider :city="city" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-screen {
  display: flex;
  align-items: center;
  padding-top: 65px;
  padding-bottom: 180px;

  @media (max-width: 1000px) {
    padding-top: 30px;
    padding-bottom: 156px;
    flex-direction: column-reverse;
  }

  &__left {
    @media (min-width: 1001px) {
      margin-top: 5px;
      margin-left: -10px;
    }

    h1 {
      font-family: "Futura PT", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 63px;
      line-height: 115.7%;
      text-transform: uppercase;
      margin: 0 0 50px;

      span {
        color: rgb(var(--mainColor));
      }

      svg {
        margin-right: 24px;
      }

      @media (max-width: 1000px) {
        font-size: 54px;
        text-align: center;
        line-height: 69px;
        margin: 0 0 42px;

        br {
          display: none;
        }

        svg {
          display: none;
        }
      }
    }

    button {
      min-width: 180px;

      @media (max-width: 1000px) {
        margin: 0 auto;
        min-width: 364px;
      }
    }
  }

  &__right {
    height: 355px;
    margin-left: auto;
  }
}
</style>
<script>
import IconPin from "@/components/icon/IconPin.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import MainScreenSlider from "@/components/index/MainScreenSlider.vue";

export default {
  components: { IconPin, BaseButton, MainScreenSlider },

  props: {
    title: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "moscow",
    },
  },
};
</script>
