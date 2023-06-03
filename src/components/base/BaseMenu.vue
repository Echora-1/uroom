<template>
  <div class="menu" @click="closeMenu">
    <div class="menu__wrap" @click.stop>
      <div class="menu__header">
        <btn-menu class="menu__btn" open @click="closeMenu" />
        <base-logo class="menu__logo" />
      </div>
      <div class="menu__info">
        <p class="menu__info-item">
          понедельник - суббота <br />
          <span> с 8.00 до 21.00</span>
        </p>
        <a href="tel:+79254377300" class="menu__info-item">
          Звоните нам!<br />
          <span>+7 (925) 43-77-300</span></a
        >
      </div>
      <nav class="menu__nav">
        <router-link
          active-class="active-link"
          :to="`/lofts/1`"
          @click="closeMenu"
        >
          Перегородки в квартиру Лофт
        </router-link>
        <router-link
          active-class="active-link"
          @click="closeMenu"
          :to="`/lofts/2`"
          >Бронирование</router-link
        >
        <a @click="$emit('doc')">Перегородки Лофт для бизнеса</a>
        <router-link
          active-class="active-link"
          @click="closeMenu"
          :to="`/lofts/3`"
          >Лофт перегородки для душевых</router-link
        >
        <router-link
          active-class="active-link"
          @click="closeMenu"
          :to="`/lofts/4`"
          >Остекленение лестниц</router-link
        >
        <router-link
          active-class="active-link"
          @click="closeMenu"
          :to="`/lofts/5`"
          >Цельностеклянные конструкции</router-link
        >
      </nav>
      <div class="menu__footer">
        <router-link active-class="active-link" @click="closeMenu" to="/">
          <IconMenu1 />
          <span> О компании</span></router-link
        >
        <router-link
          active-class="active-link"
          @click="closeMenu"
          to="/production"
        >
          <IconMenu2 />
          <span>Производство</span></router-link
        >
        <router-link
          active-class="active-link"
          @click="closeMenu"
          to="/delivery"
        >
          <IconMenu3 />
          <span>Доставка и оплата</span></router-link
        >
        <router-link active-class="active-link" @click="closeMenu" to="/news">
          <IconMenu4 />
          <span>Новости</span></router-link
        >
        <router-link
          active-class="active-link"
          @click="closeMenu"
          to="/contacts"
        >
          <IconMenu5 />
          <span>Контакты</span></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import BtnMenu from "@/components/common/BtnMenu.vue";
import BaseLogo from "@/components/base/BaseLogo.vue";
import IconMenu1 from "@/components/icon/IconMenu1.vue";
import IconMenu2 from "@/components/icon/IconMenu2.vue";
import IconMenu3 from "@/components/icon/IconMenu3.vue";
import IconMenu4 from "@/components/icon/IconMenu4.vue";
import IconMenu5 from "@/components/icon/IconMenu5.vue";
export default {
  components: {
    IconMenu5,
    IconMenu4,
    IconMenu3,
    IconMenu2,
    IconMenu1,
    BaseLogo,
    BtnMenu,
  },

  methods: {
    closeMenu() {
      this.$emit("close-menu");
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  z-index: 999;
  background: rgba(15, 15, 15, 0.8);
  width: 100vw;
  overflow-y: auto;

  &__wrap {
    height: 100vh;
    overflow-y: auto;
    margin-left: auto;
    background: #2b2b2bf2;
    width: 314px;
  }

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 25px 35px 30px;
  }

  &__btn {
    position: absolute;
    top: 48%;
    transform: translateY(-50%);
    left: 35px;
  }

  &__logo {
    width: 136px;
    height: 42px;
    transform: translateX(-5px);
  }

  &__switcher {
    display: block;
  }

  &__info {
    background: rgb(var(--mainColor));
    padding: 18px 35px 20px;
  }

  &__info-item {
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0;
    display: inline-block;

    span {
      font-weight: 700;
    }

    &:first-child {
      margin-bottom: 20px;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    align-items: flex-start;

    a {
      font-weight: 500;
      font-size: 13px;
      line-height: 53px;
      padding: 0 0 0 35px;
      display: inline-block;
      width: 100%;
      letter-spacing: 0.05em;
      color: #ffffff;
      position: relative;
      transition: all 0.3s;
      border-bottom: 0.5px solid #464646;

      &:hover {
        opacity: 0.7;
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }

  .active-link {
    color: rgb(var(--mainColor));
  }

  &__footer {
    padding: 0 0 0 35px;
    a {
      display: flex;
      align-items: center;
      color: #595959;
      margin-bottom: 20px;

      span {
        color: rgb(var(--textColor));
      }
      svg {
        margin-right: 14px;
      }
    }
  }
}
</style>
