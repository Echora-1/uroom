<template>
  <section class="about">
    <div class="container about__wrap">
      <div class="about__left">
        <h2 class="base-title">About <span>our clinic</span></h2>
        <p class="about__mb-text">
          NextGen Dental & Orthodontics is committed to providing the best
          dental services for patients in Miami, FL and the surrounding area.
          Not only do we take pride in the quality of care that we offer, but we
          are also dedicated to implementing the latest technology that is
          available in the dental industry. We invite you to visit our office to
          learn about our excellent services that can improve your smile. Our
          office is designed with your comfort in mind. We focus on the details
          that will improve your experience: beautiful décor, comfortable
          chairs, and high-quality treatments. You can relax knowing that you
          selected a dental team that you can trust. Sanitation and safety are
          priorities for our team. We are thorough with hygiene while using the
          leading technological advances in the industry. These quality tools
          provide optimal results for your dental care. Staying up-to-date in
          the dental industry allows us to offer the best treatments focused on
          accuracy and efficiency.
        </p>
        <div class="about__img">
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :centeredSlides="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :navigation="true"
          >
            <swiper-slide>
              <img
                src="../../assets/images/about@2x.png"
                width="558"
                height="480"
                alt="about"
            /></swiper-slide>
            <swiper-slide>
              <img
                src="../../assets/images/about@2x.png"
                width="558"
                height="480"
                alt="about"
            /></swiper-slide>
            <swiper-slide>
              <img
                src="../../assets/images/about@2x.png"
                width="558"
                height="480"
                alt="about"
            /></swiper-slide>
            <swiper-slide>
              <img
                src="../../assets/images/about@2x.png"
                width="558"
                height="480"
                alt="about"
            /></swiper-slide>
            <swiper-slide>
              <img
                src="../../assets/images/about@2x.png"
                width="558"
                height="480"
                alt="about"
            /></swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="about__right">
        <p class="text">
          NextGen Dental & Orthodontics is committed to providing the best
          dental services for patients in Miami, FL and the surrounding area.
          Not only do we take pride in the quality of care that we offer, but we
          are also dedicated to implementing the latest technology that is
          available in the dental industry. We invite you to visit our office to
          learn about our excellent services that can improve your smile. Our
          office is designed with your comfort in mind. We focus on the details
          that will improve your experience: beautiful décor, comfortable
          chairs, and high-quality treatments. You can relax knowing that you
          selected a dental team that you can trust. Sanitation and safety are
          priorities for our team. We are thorough with hygiene while using the
          leading technological advances in the industry. These quality tools
          provide optimal results for your dental care. Staying up-to-date in
          the dental industry allows us to offer the best treatments focused on
          accuracy and efficiency.
        </p>

        <!--        <div class="about__what">
          <p class="about__title"><span>?</span> WHAT WE PROVIDE</p>
          <div class="about__items">
            <div class="about__list">
              <p class="about__item" v-for="(item, index) in list" :key="index">
                <icon-sec />
                {{ item }}
              </p>
            </div>
            <div class="about__list">
              <p
                class="about__item"
                v-for="(item, index) in list2"
                :key="index"
              >
                <icon-sec />
                {{ item }}
              </p>
            </div>
          </div>
        </div>-->
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/core";

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      list: [
        "Dental crowns",
        "Emergency dentistry",
        "Root Canals",
        "Dental Fillings",
      ],
      list2: ["Veneers", "Whitening", "Orthodontics", "Dental Implants"],
    };
  },

  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
.base-title {
  margin-top: 50px;
  margin-bottom: 50px;

  @media (max-width: 1000px) {
    margin-top: 25px;
    margin-bottom: 11px;
  }
}

.text {
  display: inline-block;
  padding-left: 72px;
  position: relative;

  /*  &:before {
    content: "";
    height: 0;
    width: 558px;
    border-bottom: 1px solid #0c7ac2;
    position: absolute;
    bottom: -1px;
    left: 0;
    transform: translateX(-100%);
  }*/

  @media (max-width: 1000px) {
    display: none;
  }
}

.about {
  background: #ffffff;

  &__wrap {
    display: flex;

    @media (max-width: 1000px) {
      flex-direction: column;
      text-align: center;
    }
  }

  &__left {
    max-width: 558px;
    width: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: -5px;

    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 2000px;
      height: 100%;
      background: rgba(222, 238, 251, 0.4);
      right: 0;
      top: 0;
      z-index: -1;
    }

    @media (max-width: 1000px) {
      &::before {
        right: unset;
        width: 1000px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  &__left,
  &__right {
    @media (max-width: 1000px) {
      padding-top: 0;
      max-width: 100%;
      width: 100%;
      position: relative;
    }
  }

  &__right {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  &__mb-text {
    display: none;

    @media (max-width: 1000px) {
      display: inline;
      font-size: 13px;
      line-height: 16px;
      max-width: 320px;
      margin: 0 auto 348px;
    }
  }

  &__img {
    margin-top: auto;
    border-top: 2px solid #0c7ac2;

    @media (max-width: 1000px) {
      max-width: 440px;
      width: calc(100% + 50px);
      max-height: 320px;
      object-fit: cover;
      object-position: center;
      position: absolute;
      bottom: 0;
      left: 50%;
      right: 0;
      transform: translateX(-50%);

      img {
        max-width: 440px;
        width: calc(100% + 50px);
        max-height: 320px;
      }
    }

    &:deep {
      .swiper-button-prev,
      .swiper-button-next {
        color: #0c7ac2;
        @media (min-width: 1000px) {
          opacity: 0;
        }
        transition: opacity 0.3s;
      }
    }

    &:hover:deep {
      .swiper-button-prev,
      .swiper-button-next {
        opacity: 1;
      }
    }
  }

  &__what {
    @media (min-width: 1001px) {
      padding-left: 72px;
    }
  }

  &__items {
    display: flex;
    margin-bottom: 107px;

    @media (max-width: 1000px) {
      margin-bottom: 45px;
    }
  }

  &__list {
    &:first-child {
      margin-right: 85px;
    }

    @media (max-width: 1000px) {
      &:first-child {
        margin-left: auto;
        margin-right: 30px;
      }

      &:last-child {
        margin-right: auto;
      }
    }
  }

  &__item {
    display: flex;
    align-items: center;
    font-size: 22px;
    line-height: 32px;
    margin: 0 0 24px;

    &:last-child {
      margin: 0;
    }

    svg {
      margin-right: 16px;
    }

    @media (max-width: 1000px) {
      font-size: 12px;
      line-height: 18px;
      margin: 0 0 13px;

      svg {
        width: 18px;
        height: 18px;
        margin-right: 9px;
      }
    }
  }

  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 34px;
    color: #282828;
    display: flex;
    align-items: center;
    margin: 42px 0;

    span {
      font-size: 48px;
      line-height: 34px;
      color: #0c74b5;
      display: inline-block;
      margin-right: 16px;
    }

    @media (max-width: 1000px) {
      margin-top: 26px;
      margin-bottom: 26px;
      flex-direction: column;
      font-size: 15px;
      line-height: 34px;

      span {
        font-size: 30px;
        line-height: 34px;
      }
    }
  }
}
</style>
