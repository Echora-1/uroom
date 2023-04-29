<template>
  <section class="about container">
    <div class="about__left" v-if="city === 'moscow' && !isMobile()">
      <img
        src="../../assets/images/about/about1@2x.png"
        alt="hotel"
        width="268"
        height="188"
      />
      <img
        src="../../assets/images/about/about2@2x.png"
        alt="hotel"
        width="335"
        height="236"
      />
      <img
        src="../../assets/images/about/about3@2x.png"
        alt="hotel"
        width="253"
        height="178"
      />
    </div>
    <div class="about__left" v-if="city !== 'moscow' && !isMobile()">
      <img
        src="../../assets/images/about/about4@2x.png"
        alt="hotel"
        width="268"
        height="188"
      />
      <img
        src="../../assets/images/about/about5@2x.png"
        alt="hotel"
        width="335"
        height="236"
      />
      <img
        src="../../assets/images/about/about6@2x.png"
        alt="hotel"
        width="253"
        height="178"
      />
    </div>
    <about-slider v-if="isMobile()" class="about__slider" />
    <div class="about__right">
      <h2 class="base-title">Об отеле</h2>
      <p v-for="(item, index) in text" :key="index">
        {{ item }}
      </p>
      <a href="">Посмотреть лицензию</a>
    </div>
  </section>
</template>
<script>
import { isMobile } from "mobile-device-detect";
import AboutSlider from "@/components/index/AboutSlider.vue";
export default {
  components: { AboutSlider },
  methods: {
    isMobile() {
      return isMobile;
    },
  },
  props: {
    text: { type: Array, default: () => [] },
    city: { type: String, default: "moscow" },
  },
};
</script>

<style lang="scss" scoped>
.base-title {
  margin-bottom: 25px;

  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }
}

.about {
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  &__slider {
    margin-bottom: 55px;

    img {
      object-fit: contain;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    max-width: 432px;
    width: 100%;

    @media (max-width: 1000px) {
      max-width: 100%;
      display: none;
    }

    img {
      object-fit: contain;

      &:nth-child(1) {
        position: relative;
        z-index: 2;
      }

      &:nth-child(2) {
        margin-left: auto;
        position: relative;
        top: -55px;
        z-index: 1;
      }

      &:nth-child(3) {
        position: relative;
        top: -100px;
        margin-left: 60px;
      }
    }
  }

  &__right {
    width: fit-content;
    margin-left: 48px;

    @media (max-width: 1000px) {
      margin-left: 0;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      margin: 0 0 30px;
      max-width: 440px;

      @media (max-width: 1000px) {
        margin-bottom: 20px;
        &:nth-child(4) {
          margin-bottom: 5px;
        }
      }
    }

    a {
      color: rgb(var(--mainColor));
      font-size: 16px;
      line-height: 30px;
      position: relative;
      display: flex;
      width: fit-content;
      transition: all 0.3s;

      &:hover {
        opacity: 0.7;
      }

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 4px;
        left: 0;
        background: rgb(var(--mainColor));
      }
    }
  }
}
</style>
