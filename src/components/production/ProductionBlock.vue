<template>
  <div class="production">
    <rain-img class="rain" />
    <rain-img class="rain2" />
    <div class="container production__wrap">
      <h2 class="base-title">Производство</h2>
      <div class="production__main">
        <div class="production__item">
          <div class="production__text-card" v-if="isMobile">
            <p>Наше производство находится по адресу:</p>
            <div></div>
            <span>г. Москва, Булатниковский проезд 10Б, стр.2</span>
          </div>
          <img
            src="@/assets/images/production/pr1.png"
            width="416"
            height="462"
            alt=""
            srcset="@/assets/images/production/pr1@2x.png 2x"
          />
          <img
            src="@/assets/images/production/pr2.png"
            width="416"
            height="496"
            alt=""
            srcset="@/assets/images/production/pr2@2x.png 2x"
          />
        </div>
        <div class="production__item">
          <div class="production__text-card" v-if="!isMobile">
            <p>Наше производство находится по адресу:</p>
            <div></div>
            <span>г. Москва, Булатниковский проезд 10Б, стр.2</span>
          </div>
          <img
            src="@/assets/images/production/pr3.png"
            width="416"
            height="323"
            alt=""
            srcset="@/assets/images/production/pr3@2x.png 2x"
          />
          <img
            src="@/assets/images/production/pr4.png"
            width="416"
            height="554"
            alt=""
            srcset="@/assets/images/production/pr4@2x.png 2x"
          />
        </div>
        <div class="production__item">
          <img
            src="@/assets/images/production/pr5.png"
            width="416"
            height="545"
            alt=""
            srcset="@/assets/images/production/pr5@2x.png 2x"
          />
          <img
            src="@/assets/images/production/pr6.png"
            width="416"
            height="606"
            alt=""
            srcset="@/assets/images/production/pr6@2x.png 2x"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rain {
  top: -65px;
  right: -215px;
  width: 339px;
  height: 639px;
  transform: rotate(75deg);

  @media (max-width: 1000px) {
    display: none;
  }
}

.rain2 {
  bottom: -288px;
  left: -67px;
  width: 302px;
  height: 570px;

  @media (max-width: 1000px) {
    display: none;
  }
}

.base-title {
  @media (max-width: 1000px) {
    text-align: center;
    margin-bottom: 30px;
  }
}

.production {
  padding: 40px 0 82px;
  background: var(--block-gradient);
  backdrop-filter: blur(10px);

  &__main {
    display: flex;
    gap: 28px;

    @media (max-width: 1000px) {
      flex-direction: column;
      max-width: 312px;
      margin: 0 auto;
      gap: 0;
    }
  }

  &__item {
    width: calc((100% - 56px) / 3);

    @media (max-width: 1000px) {
      width: 100%;
    }

    &:first-child {
      margin-top: 80px;

      @media (max-width: 1000px) {
        margin-top: 0;
      }
    }

    &:nth-child(2) {
      margin-top: 170px;

      @media (max-width: 1000px) {
        margin-top: 0;
      }
    }

    img {
      object-fit: contain;
      width: 100%;
      margin-bottom: 18px;
      filter: grayscale(1);
      height: auto;

      &:hover {
        filter: drop-shadow(0px 0px 60px rgba(255, 98, 79, 0.25));
        border: 1px solid rgba(var(--mainColor), 0.3);
      }

      @media (max-width: 1000px) {
        height: 346px;
        max-width: 312px;
        object-fit: cover;
      }
    }
  }

  &__text-card {
    background: rgba(236, 45, 36, 0.5);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 20px 44px;
    margin-bottom: 20px;
    color: #ffffff;

    @media (max-width: 1000px) {
      padding: 34px 20px;
    }

    p {
      font-size: 24px;
      line-height: 30px;
      margin: 0 0 20px;
      max-width: 347px;
      font-family: "Halvar Breitschrift", sans-serif;

      @media (max-width: 1000px) {
        font-size: 18.047px;
        line-height: 23px;
      }
    }

    div {
      height: 1px;
      width: 100%;
      max-width: 311px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        #ffffff 52.72%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    span {
      margin: 20px 0 0;
      display: inline-block;
      font-size: 20px;
      line-height: 25px;
      max-width: 291px;

      @media (max-width: 1000px) {
        font-size: 18px;
        line-height: 23px;
      }
    }
  }
}
</style>
<script setup>
import RainImg from "@/components/common/RainImg.vue";
import { isMobile } from "mobile-device-detect";
</script>
