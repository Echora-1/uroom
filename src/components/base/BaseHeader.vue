<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__logo-wrap">
        <router-link to="/" class="header__logo">
          <icon-logo />
        </router-link>
        <city-switcher />
      </div>
      <nav class="header__nav">
        <a href="">
          <icon-reserve />
          <span> резервация </span>
        </a>
        <a href="tel:89777973623">
          <icon-phone />
          <span> +7 (977) 797 36 23 </span>
        </a>
      </nav>
      <btn-menu @click="openMenu" />
    </div>
  </header>
</template>
<script>
import IconPhone from "@/components/icon/IconPhone.vue";
import IconLogo from "@/components/icon/IconLogo.vue";
import CitySwitcher from "@/components/common/CitySwitcher.vue";
import IconReserve from "@/components/icon/IconReserve.vue";
import BtnMenu from "@/components/common/BtnMenu.vue";

export default {
  components: {
    BtnMenu,
    IconReserve,
    CitySwitcher,
    IconLogo,
    IconPhone,
  },

  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    openMenu() {
      this.$emit("open-menu");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  min-height: 55px;
  width: 100%;
  padding: 44px 0;

  &__container {
    display: flex;
    align-items: center;
    max-width: 1060px;
    padding: 0 10px;
  }

  &__logo-wrap {
    display: flex;
    align-items: center;

    svg {
      margin-right: 55px;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 43px;

    a {
      font-weight: 700;
      font-size: 13px;
      line-height: 18px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      color: #000000;
      transition: all 0.3s;
      &:hover {
        opacity: 0.7;
      }

      &:first-child {
        margin-right: 57px;
      }

      &:last-child {
        font-size: 15px;
      }

      svg {
        margin-right: 8px;
      }
    }
  }
}
</style>
