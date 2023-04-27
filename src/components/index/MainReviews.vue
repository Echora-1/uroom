<template>
  <section class="reviews">
    <div class="container reviews__wrap">
      <h2 class="base-title">Testimonials</h2>
      <swiper
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in list" :key="index">
          <review-card :content="item"
        /></swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.base-title {
  display: none;

  @media (max-width: 1000px) {
    display: inline-block;
    text-align: center;
    color: white;
    margin-bottom: 20px;
  }
}
.reviews {
  background-image: url("@/assets/images/reviews-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 553px;
  display: flex;
  align-items: center;
  background-color: #0c7ac2;

  @media (max-width: 1000px) {
    min-height: 420px;
    text-align: center;
  }
}
</style>
<script>
import ReviewCard from "@/components/index/ReviewCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export default {
  components: { ReviewCard, Swiper, SwiperSlide },
  data() {
    return {
      list: [
        {
          name: "Morgan Wagenknecht",
          rating: 5,
          text: "Finally, an amazing dental office that accepts our insurance! (Meridian/County Care) I can't say enough good things about this office - first impression, the front desk is very kind and organized which is always appreciated.",
          img: "r1@2x",
        },
        {
          name: "Morgan Wagenknecht",
          rating: 5,
          text: "Finally, an amazing dental office that accepts our insurance! (Meridian/County Care) I can't say enough good things about this office - first impression, the front desk is very kind and organized which is always appreciated.",
          img: "r1@2x",
        },
        {
          name: "Morgan Wagenknecht",
          rating: 5,
          text: "Finally, an amazing dental office that accepts our insurance! (Meridian/County Care) I can't say enough good things about this office - first impression, the front desk is very kind and organized which is always appreciated.",
          img: "r1@2x",
        },
      ],
    };
  },

  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss">
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 42px;
  left: 70%;
  transform: translateX(-50%);

  @media (max-width: 1000px) {
    left: 50%;
    bottom: -20px;
  }
}

@media (max-width: 1000px) {
  .swiper {
    overflow: visible;
  }
}
</style>
