<template>
  <div class="layout">
    <BaseHeader @open-menu="showMenu = true" />
    <base-menu
      @click.prevent
      :class="['layout__menu', { 'layout__menu--open': showMenu }]"
      @close-menu="closeMenu"
    />
    <main class="layout__main" @click="closeMenu">
      <slot />
    </main>
    <!--    <BaseFooter />-->
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader.vue";
import BaseMenu from "@/components/base/BaseMenu.vue";

export default {
  components: { BaseMenu, BaseHeader },
  data() {
    return {
      showMenu: false,
    };
  },

  watch: {
    showMenu() {
      if (this.showMenu) {
        document.body.classList.add("openMenu");
      } else {
        document.body.classList.remove("openMenu");
      }
    },
  },

  methods: {
    closeMenu() {
      if (this.showMenu) {
        this.showMenu = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  background: rgb(var(--bg));
  width: calc(100% - 86px);
  height: 100vh;
  margin: 43px;
  box-shadow: 0 15px 28px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;

  &__menu {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(150%);
    transition: all 0.3s;

    &--open {
      transform: translateX(0);
    }
  }
}
</style>
