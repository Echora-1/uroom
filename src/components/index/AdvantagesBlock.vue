<template>
  <div class="advantage">
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
.advantage {
  padding: 80px 0;
  background: var(--block-bg2);

  &__wrap {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  &__item {
    display: flex;
    justify-content: center;

    img {
      object-fit: contain;
      margin-right: 20px;
    }

    p {
      margin: 0;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.8px;
    }
  }
}
</style>
<script setup></script>
