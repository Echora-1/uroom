<template>
  <div :class="['slider', { 'slider--2': city !== 'moscow' }]">
    <swiper
      v-if="city === 'moscow'"
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :centeredSlides="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide>
        <img
          src="@/assets/images/mainSlide.png"
          width="505"
          height="354"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="@/assets/images/mainSlide.png"
          width="505"
          height="354"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="@/assets/images/mainSlide.png"
          width="505"
          height="354"
          alt=""
        />
      </swiper-slide>
    </swiper>
    <swiper
      v-else
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :centeredSlides="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide>
        <img
          src="@/assets/images/mainSlide2.png"
          width="416"
          height="355"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="@/assets/images/mainSlide2.png"
          width="416"
          height="355"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="@/assets/images/mainSlide2.png"
          width="416"
          height="355"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/core";

export default {
  components: { Swiper, SwiperSlide },

  props: {
    city: {
      type: String,
      default: "moscow",
    },
  },

  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
};
</script>

<style lang="scss" scoped>
.slider {
  max-width: 505px;
  position: relative;

  &--2 {
    max-width: 416px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 365px;
    height: 389px;
    background: rgb(var(--mainColor));
    right: -50px;
    bottom: -45px;
  }

  &:deep {
    .swiper-pagination-bullet {
      border-radius: 50%;
      background: white;
      opacity: 1;
    }

    .swiper-pagination-bullet-active {
      background: rgb(var(--mainColor));
    }

    .swiper-pagination-horizontal {
      bottom: 20px;
    }

    .swiper-button-prev {
      border: none;
      left: -40px;

      &::after {
        display: none;
      }

      @media (max-width: 1023px) {
        left: -30px;
        transform: translateY(-70%);
      }
    }

    .swiper-button-next {
      transform: scale(-1);
      border: none;
      right: -40px;

      &::after {
        display: none;
      }

      @media (max-width: 1023px) {
        right: -30px;
        transform: scale(-1) translateY(70%);
      }
    }
  }
}
</style>
