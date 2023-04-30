<template>
  <div :class="['slider']">
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
          src="@/assets/images/about/about1@2x.png"
          width="363"
          height="255"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="@/assets/images/about/about2@2x.png"
          width="363"
          height="255"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="@/assets/images/about/about3@2x.png"
          width="363"
          height="255"
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
          src="@/assets/images/about/about4@2x.png"
          width="363"
          height="255"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="@/assets/images/about/about5@2x.png"
          width="363"
          height="255"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="@/assets/images/about/about6@2x.png"
          width="363"
          height="255"
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
  max-width: 363px;
  position: relative;

  img {
    max-width: 363px;
    width: 100%;
  }

  &:deep {
    .swiper {
      padding-bottom: 55px;
    }

    .swiper-pagination-bullet {
      border-radius: 50%;
      background: #d7d7d7;
      opacity: 1;
    }

    .swiper-pagination-bullet-active {
      background: rgb(var(--mainColor));
    }

    .swiper-pagination-horizontal {
      bottom: 25px;
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
