<template>
  <div class="modal">
    <div class="modal__header" @click="$emit('close')">
      <img
        class="modal__img"
        src="../../assets/images/modal/d2.png"
        width="172"
        height="172"
        alt=""
      />
    </div>
    <div class="modal__content">
      <p class="modal__name">Dк. Gary Beyer</p>
      <p class="modal__position">General Dentist / Owner</p>
      <p class="modal__text">
        Dr. Beyer earned his Bachelor of Science degree and his Doctorate in
        Dentistry degree from St. Petersburg School of Stomatology in 1986. His
        Doctor of Dental Surgery degree was earned at Marquette University
        School of Dentistry in 1993 and he has been working as a dentist ever
        since. He is a proud member of the American Dental Association, the
        Illinois State Dental Society, the Chicago Dental Society, and is
        Invisalign Certified.
      </p>
      <div class="modal__slide">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="0"
          :navigation="true"
          :breakpoints="{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }"
        >
          <swiper-slide>
            <img
              @click="fullscreen = !fullscreen"
              src="../../assets/images/diploms/all.png"
              width="174"
              height="192"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              @click="fullscreen1 = !fullscreen1"
              src="../../assets/images/diploms/kateryna.png"
              width="174"
              height="192"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              @click="fullscreen2 = !fullscreen2"
              src="../../assets/images/diploms/kateryna1.png"
              width="174"
              height="192"
              alt=""
            />
          </swiper-slide>
        </swiper>
      </div>
      <base-button class="modal__btn">Book Appointment</base-button>
    </div>

    <fullscreen v-model="fullscreen">
      <div
        v-if="fullscreen"
        class="fullscreen-wrap"
        @click="fullscreen = false"
      >
        <img
          src="../../assets/images/diploms/all.png"
          width="622"
          height="480"
          alt=""
          style="margin: auto"
        />
      </div>
    </fullscreen>
    <fullscreen v-model="fullscreen1">
      <div
        v-if="fullscreen1"
        class="fullscreen-wrap"
        @click="fullscreen1 = false"
      >
        <img
          src="../../assets/images/diploms/kateryna.png"
          width="622"
          height="480"
          alt=""
          style="margin: auto"
        />
      </div>
    </fullscreen>
    <fullscreen v-model="fullscreen2">
      <div
        v-if="fullscreen2"
        class="fullscreen-wrap"
        @click="fullscreen2 = false"
      >
        <img
          src="../../assets/images/diploms/kateryna1.png"
          width="622"
          height="476"
          alt=""
          style="margin: auto"
        />
      </div>
    </fullscreen>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import { Navigation } from "swiper/core";
export default {
  components: { BaseButton, Swiper, SwiperSlide },

  data() {
    return {
      fullscreen: false,
      fullscreen1: false,
      fullscreen2: false,
    };
  },

  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  min-height: 720px;
  height: 100%;
  width: 675px;

  @media (max-width: 767px) {
    width: calc(100vw - 60px);
    min-height: auto;
    max-height: calc(100vh - 60px);
    overflow-y: auto;
  }

  &__header {
    min-height: 122px;
    position: relative;

    @media (max-width: 767px) {
      min-height: 80px;
      position: relative;
    }
  }

  &__img {
    border-radius: 50%;
    border: 2px solid #ffffff;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    background: #606e8a;
    @media (max-width: 767px) {
      width: 86px;
      height: 86px;
    }
  }

  &__content {
    padding: 105px 30px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: white;

    @media (max-width: 767px) {
      padding-top: 65px;
    }
  }

  &__name {
    font-weight: 700;
    font-size: 25px;
    line-height: 34px;
    margin: 0;
  }

  &__position {
    font-weight: 400;
    font-size: 13px;
    line-height: 130%;
    color: rgba(38, 38, 38, 0.7);
    display: block;
    padding: 0 75px 18px;
    border-bottom: 1px solid rgba(82, 82, 91, 0.3);
    margin: 0;
    width: fit-content;
  }

  &__text {
    margin: 20px 0 20px;
    font-size: 16px;
    line-height: 22px;
    color: #777777;
    max-width: 535px;
  }

  &__slide {
    max-width: 90%;
    margin-bottom: 20px;
    img {
      object-fit: contain;

      &:not(:last-child) {
        @media (max-width: 767px) {
          display: none;
        }
      }
    }
  }

  &__btn {
    font-size: 14px;
    line-height: 17px;
  }
}

.fullscreen-wrap {
  width: 100%;
  height: 100%;
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: 767px) {
    img {
      max-width: 622px;
      max-height: 480px;
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
