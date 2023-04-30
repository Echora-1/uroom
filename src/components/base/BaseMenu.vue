<template>
  <div class="menu">
    <div class="menu__header">
      <a href="tel:89777973623" class="menu__phone">
        <icon-phone />
        <span> +7 (977) 797 36 23 </span>
      </a>
      <btn-menu open @click="closeMenu" />
    </div>
    <nav class="menu__nav">
      <a href="">Об отеле</a>
      <a href="">Бронирование</a>
      <a href="">Документы</a>
      <a href="">Контакты</a>
      <a href="">Обратная связь</a>
      <city-switcher class="menu__switcher" />
    </nav>
    <div class="menu__social">
      <a href="" target="_blank">
        <icon-face />
      </a>
      <a href="" target="_blank">
        <icon-telegram />
      </a>
      <a href="" target="_blank">
        <icon-inst />
      </a>
    </div>
  </div>
</template>

<script>
import BtnMenu from "@/components/common/BtnMenu.vue";
import IconTelegram from "@/components/icon/IconTelegram.vue";
import IconFace from "@/components/icon/IconFace.vue";
import IconInst from "@/components/icon/IconInst.vue";
import CitySwitcher from "@/components/common/CitySwitcher.vue";
import IconPhone from "@/components/icon/IconPhone.vue";

export default {
  components: {
    IconPhone,
    CitySwitcher,
    IconInst,
    IconFace,
    IconTelegram,
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
  padding: 54px;
  z-index: 999;
  width: 365px;
  min-height: calc(200vh - 43px);
  background: #2b2b2bf2;
  @media (max-width: 1000px) {
    padding: 35px 10px 35px 35px;
    width: 300px;
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 98px;

    @media (max-width: 1000px) {
      margin-bottom: 40px;
      padding-right: 10px;
    }
  }

  &__switcher {
    display: none;
    @media (max-width: 1000px) {
      display: block;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    margin-bottom: 92px;
    align-items: flex-start;

    @media (max-width: 1000px) {
      margin-bottom: 40px;
    }

    a {
      font-weight: 700;
      font-size: 16px;
      line-height: 38px;
      letter-spacing: 0.05em;
      color: #ffffff;
      position: relative;
      transition: all 0.3s;

      &:hover {
        opacity: 0.7;
      }

      &:first-child {
        &::before {
          content: "";
          bottom: 0;
          left: 0;
          position: absolute;
          height: 3px;
          width: 30px;
          background: rgb(var(--mainColor));
        }
      }

      &:not(:last-child) {
        margin-bottom: 35px;
      }
    }
  }

  &__social {
    display: flex;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 43px;
      transition: all 0.3s;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  &__phone {
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    align-items: center;
    color: #ffffff;
    transition: all 0.3s;
    margin-right: auto;
    display: none;

    @media (max-width: 1000px) {
      display: flex;
    }

    &:hover {
      opacity: 0.7;
    }
    svg {
      margin-right: 8px;
    }
  }
}
</style>
