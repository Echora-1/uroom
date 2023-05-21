<template>
  <div class="about-company">
    <rain-img class="rain" />
    <div class="container about-company__wrap">
      <rain-img class="rain2" />
      <div class="about-company__header">
        <p>Информация <br />о компании</p>
        <h2 class="base-title">
          Dark Loft - Стеклянные перегородки <br />
          в стиле Лофт, от производителя,<br />
          в Москве и Московской области
        </h2>
      </div>
      <div class="about-company__main">
        <div class="about-company__left">
          <img
            src="@/assets/images/about/about.png"
            width="525"
            height="636"
            alt=""
            srcset="@/assets/images/about/about@2x.png 2x"
            class="about-company__img"
          />
        </div>
        <div class="about-company__right">
          <p>
            Решили сменить планировку в квартире или офисе? Стеклянные исправят
            перегородки от производителя DarkLoft по цене от 7500 р/м2 вашу
            проблему.
          </p>
          <p>
            Перегородки из стекла гармонично впишутся в любой стиль интерьера и
            станут ультрасовременным акцентом в дизайнерских проектах.
          </p>
          <p>
            Вы можете купить стеклянную перегородку в Москве, с бесплатной
            доставкой и монтажом, в нашей компании
          </p>
          <p>
            Хотите рационально разделить помещение на необходимые зоны? Теперь
            нет необходимости в перепланировке и длительном ремонте.
          </p>
          <p>
            Закажите стеклянные перегородки для любого вида помещений в компании
            Dark Loft, у нас вы получите широкий ассортимент, приемлемые цены и
            европейский сервис.
          </p>
          <span>
            <icon-check />
            Для всех клиентов мы предоставляем 3D-визуализацию проекта
          </span>
          <base-button class="about-company__btn"
            >Рассчитать стоимость</base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rain {
  right: -193px;
  top: 0;
  width: 332px;
  height: 608px;
}

.rain2 {
  left: -62px;
  bottom: -216px;
  width: 332px;
  height: 608px;
  transform: rotate(50.67deg);
  z-index: -1;
}

.about-company {
  width: 100%;
  background: rgba(32, 32, 33, 0.9);
  backdrop-filter: blur(10px);
  padding: 100px 0 144px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__wrap {
    position: relative;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 94px;

    p {
      margin: 10px 0 0;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }
  }

  &__main {
    display: flex;
  }

  &__left,
  &__right {
    max-width: 50%;
    width: 100%;
  }

  &__img {
    object-fit: contain;
  }

  &__right {
    p {
      max-width: 600px;
      margin: 0 0 29px;
    }

    span {
      display: flex;
      align-items: center;
    }

    svg {
      margin-right: 16px;
    }
  }

  &__btn {
    margin-top: 35px;
  }
}
</style>
<script setup>
import BaseButton from "@/components/base/BaseButton.vue";
import IconCheck from "@/components/icon/IconCheck.vue";
import RainImg from "@/components/common/RainImg.vue";
</script>
