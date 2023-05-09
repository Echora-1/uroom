<template>
  <div class="layout">
    <BaseHeader @open-menu="showMenu = true" />
    <base-menu
      :class="['layout__menu', { 'layout__menu--open': showMenu }]"
      @close-menu="closeMenu"
      @doc="showDoc = true"
    />
    <main class="layout__main" @click="closeMenu">
      <slot />
    </main>
    <a :href="whatLink" target="_blank" class="what">
      <icon-what />
    </a>
    <a href="https://t.me/Uroom_bot/" target="_blank" class="telegram">
      <icon-telegram />
    </a>
    <base-modal :is-open="showDoc" @close="showDoc = false">
      <img
        @click="show = false"
        class="image-doc"
        src="@/assets/images/doc/doc@2x.png"
        width="519"
        height="745"
        alt="doc"
      />
    </base-modal>
    <BaseFooter @doc="showDoc = true" />
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader.vue";
import BaseMenu from "@/components/base/BaseMenu.vue";
import BaseFooter from "@/components/base/BaseFooter.vue";
import IconWhat from "@/components/icon/IconWhat.vue";
import BaseModal from "@/components/base/BaseModal.vue";
import IconTelegram from "@/components/icon/IconTelegram.vue";

export default {
  components: {
    IconTelegram,
    BaseModal,
    IconWhat,
    BaseFooter,
    BaseMenu,
    BaseHeader,
  },
  data() {
    return {
      showMenu: false,
      url: "",
      showDoc: false,
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

    currentPath() {
      this.setUrl();
    },
  },

  methods: {
    closeMenu() {
      if (this.showMenu) {
        this.showMenu = false;
      }
    },

    setUrl() {
      const path = this.$route.fullPath;
      const isMoscow = path.indexOf("moscow") !== -1;
      if (isMoscow) {
        this.url = "moscow";
      } else {
        this.url = "volgograd";
      }
    },
  },

  created() {
    this.setUrl();
  },

  computed: {
    currentPath() {
      return this.$route.fullPath;
    },

    whatLink() {
      return this.url === "moscow"
        ? "https://wa.me/79777973623?text=Хочу%20забронировать%20номер!"
        : "https://wa.me/79616583202?text=Хочу%20забронировать%20номер!";
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  background: rgb(var(--bg));
  width: calc(100% - 86px);
  margin: 43px;
  box-shadow: 0 15px 28px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;

  @media (max-width: 1000px) {
    margin: 0;
    width: 100%;
    box-shadow: none;
  }

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

.what {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #23d366;
  position: fixed;
  right: 130px;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  z-index: 1000;

  @media (max-width: 1000px) {
    width: 40px;
    height: 40px;
    right: 65px;
    bottom: 30px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
}

.telegram {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #3290ec;
  position: fixed;
  right: 60px;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  z-index: 1000;
  color: white;

  @media (max-width: 1000px) {
    width: 40px;
    height: 40px;
    right: 20px;
    bottom: 30px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
}

.image-doc {
  object-fit: contain;
  max-width: 519px;
  max-height: 745px;
  width: 100%;
  height: calc(100vh - 80px);

  @media (max-width: 1000px) {
    height: calc(100vh - 40px);
    width: calc(100vw - 60px);
  }
}
</style>
