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
            loading="lazy"
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

.base-title {
  @media (max-width: 1000px) {
    font-size: 18px;
    line-height: 26px;
    max-width: 338px;
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.93px;
  }
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
  background: var(--block-bg);
  backdrop-filter: blur(10px);
  padding: 100px 0 144px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    padding-top: 0;
    padding-bottom: 65px;
  }

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

      @media (max-width: 1000px) {
        margin-top: 0;
        margin-bottom: 30px;
        font-size: 15px;
        line-height: 24px;
        color: rgb(var(--mainColor));
        display: inline-block;
        padding-bottom: 5px;
        border-bottom: 0.5px solid #646464;
      }
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      text-align: center;
      align-items: center;
      margin-bottom: 43px;
    }

    br {
      @media (max-width: 1000px) {
        display: none;
      }
    }
  }

  &__main {
    display: flex;

    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }

  &__left,
  &__right {
    max-width: 50%;
    width: 100%;

    @media (max-width: 1000px) {
      max-width: 100%;
    }
  }

  &__img {
    object-fit: contain;

    @media (max-width: 1000px) {
      height: 343px;
      width: calc(100% + 16px);
      object-fit: cover;
      left: -8px;
      position: relative;
      margin-bottom: 35px;
    }
  }

  &__right {
    p {
      max-width: 600px;
      margin: 0 0 29px;

      @media (max-width: 1000px) {
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        margin: 0 0 20px;
      }
    }

    span {
      display: flex;
      align-items: center;

      @media (max-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 12px;
        line-height: 18px;
        border: 0.5px solid #646464;
        background: #212223;
        position: relative;
        padding: 22px;
        margin-top: 30px;
      }
    }

    svg {
      margin-right: 16px;

      @media (max-width: 1000px) {
        position: absolute;
        top: -13px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  &__btn {
    margin-top: 35px;

    @media (max-width: 1000px) {
      margin: 35px auto 0;
    }
  }
}
</style>
<script setup>
import BaseButton from "@/components/base/BaseButton.vue";
import IconCheck from "@/components/icon/IconCheck.vue";
import RainImg from "@/components/common/RainImg.vue";
</script>
