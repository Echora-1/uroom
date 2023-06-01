<template>
  <header :class="['header', { 'header--scroll': scroll }]">
    <div class="container header__container">
      <nav class="header__nav-list">
        <router-link to="">О компании</router-link>
        <router-link to="/production">Производство</router-link>
        <router-link to="/delivery">Доставка и оплата</router-link>
        <router-link to="/news">Новости</router-link>
        <router-link to="">Магазин</router-link>
        <router-link to="/contacts">Контакты</router-link>
      </nav>
    </div>
    <div class="header__main-wrap">
      <div class="header__main container header__container">
        <div class="header__info-list">
          <a href="tel:+79254377300" class="header__info-item">
            <span>Звоните нам!</span><br />
            +7 (925) 43-77-300
          </a>
          <p class="header__info-item">
            <span>понедельник - суббота</span><br />
            с 8.00 до 21.00
          </p>
        </div>
        <router-link to="/" class="header__logo">
          <base-logo v-if="!store.themeLight" class="header__logo" />
          <base-light-logo v-else class="header__logo" />
        </router-link>
        <div class="header__connect-list">
          <theme-switcher class="header__theme-switcher header__connect-item" />
          <a
            target="_blank"
            href="https://wa.me/%2B79254377300?text=%D0%97%D0%B4%D1%80%D0%B0%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A3%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81..."
            class="header__connect-item"
          >
            <icon-phone />
          </a>
          <a
            href="https://t.me/kamura_ru/"
            target="_blank"
            class="header__connect-item header__connect-item--telega"
          >
            <icon-telega />
          </a>
          <base-button class="header__btn">
            <icon-call />
            <span
              >Вызвать <br />
              замерщика</span
            ></base-button
          >
          <btn-menu @click="openMenu" class="header__menu-btn" />
        </div>
      </div>
      <div class="header__footer container header__container">
        <router-link :to="`/lofts/1`">Перегородки в квартиру Лофт</router-link>
        <span>|</span>
        <router-link :to="`/lofts/2`">Перегородки Лофт для бизнеса</router-link>
        <span>|</span>
        <router-link :to="`/lofts/3`">Лофт перегородки для душевых</router-link>
        <span>|</span>
        <router-link :to="`/lofts/4`">Остекленение лестниц</router-link>
        <span>|</span>
        <router-link :to="`/lofts/5`">Цельностеклянные конструкции</router-link>
      </div>
    </div>
  </header>
</template>
<script>
import BaseLogo from "@/components/base/BaseLogo.vue";
import IconPhone from "@/components/icon/IconPhone.vue";
import IconTelega from "@/components/icon/IconTelega.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import IconCall from "@/components/icon/IconCall.vue";
import ThemeSwitcher from "@/components/common/ThemeSwitcher.vue";
import BaseLightLogo from "@/components/base/BaseLightLogo.vue";
import { useThemeStore } from "@/store/theme";
import BtnMenu from "@/components/common/BtnMenu.vue";

export default {
  components: {
    BtnMenu,
    BaseLightLogo,
    ThemeSwitcher,
    IconCall,
    BaseButton,
    IconTelega,
    IconPhone,
    BaseLogo,
  },

  data() {
    return {
      scroll: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.scrollHeader);
  },

  methods: {
    scrollHeader() {
      if (window.scrollY >= 65) {
        this.scroll = true;
      } else {
        this.scroll = false;
      }
    },

    openMenu() {
      this.$emit("open-menu");
    },
  },

  setup() {
    const store = useThemeStore();

    return { store };
  },
};
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  width: 100%;
  background: rgb(var(--bg));
  z-index: 2;
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
  transition: all 0.3s;

  @media (max-width: 1000px) {
    top: 0;
    padding: 22px 0 0;
  }

  &--scroll {
    top: -40px;

    @media (max-width: 1000px) {
      top: -22px;
    }

    img {
      width: 140px;
      height: 44px;

      @media (max-width: 1000px) {
        width: 100%;
        max-width: 164px;
        height: 56px;
      }
    }

    .header__info-item {
      font-size: 16px;

      span {
        font-size: 10px;
      }
    }

    .header__btn {
      font-size: 9px;
      line-height: 12px;

      svg {
        width: 20px;
        height: 20px;
      }

      @media (max-width: 1000px) {
        font-size: 6px;
        line-height: 8px;
        padding: 4px 6px;

        svg {
          width: 11px;
          height: 11px;
        }
      }
    }

    .header__footer {
      padding: 8px 0;
      a {
        font-size: 12px;
      }
    }
  }

  &__container {
    align-items: center;
    max-width: 1300px;
    padding: 0;

    @media (max-width: 1000px) {
      max-width: 430px;
      padding: 0 20px;
    }
  }

  &__nav-list {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;

    a {
      font-weight: 500;
      font-size: 13px;
      line-height: 40px;
    }

    @media (max-width: 1000px) {
      display: none;
    }
  }

  &__main-wrap {
    background: rgb(var(--header));
    @media (max-width: 1000px) {
      background: rgb(var(--body));
    }
  }

  &__main {
    display: flex;
    align-items: center;
    padding: 8px 0;
    border-bottom: 0.5px solid rgb(var(--header-border));

    @media (max-width: 1000px) {
      border-bottom: unset;
    }
  }

  &__logo {
    margin: 0 auto;
    transition: all 0.3s;
    display: flex;

    @media (max-width: 1000px) {
      margin: 0;
      position: relative;
      left: -14px;
      height: 56px;
      width: 100%;
      max-width: 164px;
    }
  }

  &__info-list {
    display: flex;
    width: calc(50% - 140px);

    @media (max-width: 1000px) {
      display: none;
    }
  }

  &__info-item {
    margin: 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    &:first-child {
      margin-right: 35px;
    }

    span {
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: 0.6px;
      text-transform: uppercase;
    }
  }

  &__connect-list {
    display: flex;
    align-items: center;
    width: calc(50% - 140px);
    justify-content: flex-end;

    @media (max-width: 1000px) {
      width: auto;
      margin-right: 12px;
      margin-left: auto;
    }
  }

  &__connect-item {
    display: flex;
    margin-right: 20px;

    @media (max-width: 1000px) {
      margin-right: 12px;
    }

    &--telega {
      margin-right: 0;
    }
  }

  &__theme-switcher {
    @media (max-width: 1000px) {
      display: none;
    }
  }

  &__btn {
    padding: 11px 15px;
    text-align: start;
    margin-left: 27px;
    color: #ffffff;

    @media (max-width: 1000px) {
      font-size: 6px;
      line-height: 8px;
      padding: 4px 6px;
      margin-left: 15px;
      margin-right: 12px;

      svg {
        width: 11px;
        height: 11px;
      }
    }

    svg {
      margin-right: 12px;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    padding: 17px 0;
    transition: all 0.3s;

    @media (max-width: 1000px) {
      display: none;
    }

    a {
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;
    }

    span {
      display: inline-block;
      margin: 0 auto;
      font-weight: 100;
      text-align: center;
      line-height: 19px;
    }
  }

  &__menu-btn {
    @media (min-width: 1001px) {
      display: none;
    }
  }
}
</style>
