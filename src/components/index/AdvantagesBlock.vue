<template>
  <div class="advantage">
    <rain-img class="rain1" />
    <rain-img class="rain2" />
    <div class="container advantage__wrap">
      <div class="advantage__item">
        <img
          src="@/assets/images/advantages/adv1.png"
          width="56"
          height="56"
          alt="advantages"
          loading="lazy"
        />
        <p>
          От эконом до элитных вариантов <br />
          стеклянных перегородок
        </p>
      </div>
      <div class="advantage__item">
        <img
          src="@/assets/images/advantages/adv2.png"
          width="56"
          height="56"
          alt="advantages"
          loading="lazy"
        />
        <p>
          Выезд мастера на замер <br />
          в день обращения
        </p>
      </div>
      <div class="advantage__item">
        <img
          src="../../assets/images/advantages/adv44.png"
          width="56"
          height="56"
          alt="advantages"
          loading="lazy"
        />
        <p>
          Бесплатная парковка для <br />
          гостей нашего офиса
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rain1 {
  display: none;

  @media (max-width: 1000px) {
    display: block;
    width: 184px;
    height: 348px;
    transform: rotate(50.67deg);
    top: -130px;
    right: -176px;
  }
}
.rain2 {
  display: none;

  @media (max-width: 1000px) {
    display: block;
    width: 223px;
    height: 421px;
    left: -222px;
    bottom: -125px;
    transform: rotate(50.67deg);
  }
}

.advantage {
  padding: 80px 0;
  background: var(--block-bg2);
  position: relative;

  @media (max-width: 1000px) {
    padding: 48px 0;
    background: rgba(27, 27, 27, 0.9);
  }

  &__wrap {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }

  &__item {
    display: flex;
    justify-content: center;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }

    img {
      object-fit: contain;
      margin-right: 20px;

      @media (max-width: 1000px) {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }

    p {
      margin: 0;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.8px;

      @media (max-width: 1000px) {
        text-align: center;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
</style>
<script setup>
import RainImg from "@/components/common/RainImg.vue";
</script>
