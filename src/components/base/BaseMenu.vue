<template>
  <div class="menu">
    <div class="menu__header">
      <btn-menu open @click="closeMenu" />
    </div>
    <nav class="menu__nav">
      <a href="">Об отеле</a>
      <a href="">Бронирование</a>
      <a href="">Документы</a>
      <a href="">Контакты</a>
      <a href="">Обратная связь</a>
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

export default {
  components: { IconInst, IconFace, IconTelegram, BtnMenu },
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
  background: #2b2b2b;
  opacity: 0.95;

  &__header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 98px;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    margin-bottom: 92px;

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
}
</style>
