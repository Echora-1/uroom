<template>
  <div class="contact-form">
    <div class="container contact-form__wrap">
      <div class="contact-form__form">
        <div class="contact-form__left">
          <p class="base-title" v-if="!isMobile">
            Контактная <br />
            информация
          </p>
          <p class="contact-form__key contact-form__key--address">
            <icon-mini-pin />
            {{ isMobile ? "АДРЕСА" : "АДРЕСА:" }}
          </p>
          <p class="contact-form__value">
            <span> {{ isMobile ? "Офис" : "Офис:" }} </span><br />
            ул. Волоколамское шоссе 142
          </p>
          <p class="contact-form__value contact-form__value--last">
            <span>Производство:</span> <br />
            Булатниковский проезд 10Б, стр.2
          </p>
          <p class="contact-form__key">
            <icon-mini-phone /> {{ isMobile ? "ТЕЛЕФОН" : "ТЕЛЕФОН:" }}
          </p>
          <a
            href="tel:+79254377300"
            class="contact-form__value contact-form__value--last"
          >
            +7 (925) 43-77-300
          </a>
          <p class="contact-form__key">
            <icon-mini-mail /> {{ isMobile ? "EMAIL" : "EMAIL:" }}
          </p>
          <a
            href="mailto:info@darkloft.ru"
            class="contact-form__value contact-form__value--last"
          >
            info@darkloft.ru
          </a>
          <p class="contact-form__key">
            <icon-mini-clok /> НАШИ СПЕЦИАЛИСТЫ РАБОТАЮТ:
          </p>
          <p class="contact-form__value contact-form__value--clock">
            понедельник - суббота <br />
            с 8.00 до 21.00
          </p>
        </div>
        <div class="contact-form__right">
          <p class="base-title">
            Свяжитесь <br />
            с нами
          </p>
          <feedback-form />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-title {
  margin: 0 0 44px;
  font-size: 40px;
  line-height: 49px;

  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.9px;
    text-align: center;

    br {
      display: none;
    }
  }
}

.contact-form {
  background: var(--block-gradient);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 2;

  &__wrap {
    display: flex;
    justify-content: center;
  }

  &__form {
    min-height: 675px;
    width: 100%;
    max-width: 1300px;
    background: rgb(var(--form-bg));
    box-shadow: 0px 0px 158px rgba(255, 146, 132, 0.06);
    position: relative;
    transform: translateY(-190px);
    display: flex;

    @media (max-width: 1000px) {
      flex-direction: column;
      max-width: 340px;
      transform: translateY(-262px);
    }
  }

  &__left {
    padding: 50px 80px 54px;

    @media (max-width: 1000px) {
      padding: 30px 20px 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  &__right {
    padding: 50px 80px 54px;
    background: rgb(var(--form-bg2));
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
      padding: 30px 30px 40px;
    }
  }

  &__key {
    font-weight: 700;
    font-size: 17px;
    line-height: 25px;
    display: flex;
    align-items: center;
    margin: 0 0 4px;

    @media (max-width: 1000px) {
      flex-direction: column;
      font-size: 13px;
      line-height: 18px;
      gap: 4px;
    }

    &--address {
      margin: 0 0 18px;
    }

    svg {
      margin-right: 9px;

      @media (max-width: 1000px) {
        margin-right: 0;
      }
    }
  }

  a {
    margin: 0 0 30px;
    display: inline-block;
    text-decoration: underline;
  }

  &__value {
    font-size: 17px;
    line-height: 25px;
    margin: 0 0 17px;

    @media (max-width: 1000px) {
      font-size: 12px;
      line-height: 25px;
    }

    &--last {
      margin: 0 0 30px;
    }

    &--clock {
      margin: 0;
    }

    span {
      font-weight: 700;
    }
  }
}
</style>
<script setup>
import IconMiniPin from "@/components/icon/IconMiniPin.vue";
import IconMiniPhone from "@/components/icon/IconMiniPhone.vue";
import IconMiniMail from "@/components/icon/IconMiniMail.vue";
import IconMiniClok from "@/components/icon/IconMiniClok.vue";
import FeedbackForm from "@/components/contact/FeedbackForm.vue";
import { isMobile } from "mobile-device-detect";
</script>
