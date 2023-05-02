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
      <a @click="closeMenu" href="">Об отеле</a>
      <router-link @click="closeMenu" :to="`/${url}/reservation`"
        >Бронирование</router-link
      >
      <a @click="closeMenu" href="">Документы</a>
      <router-link @click="closeMenu" :to="`/${url}/contacts`"
        >Контакты</router-link
      >
      <a @click="closeMenu" href="">Обратная связь</a>
      <city-switcher class="menu__switcher" />
    </nav>
    <base-social class="menu__social" />
  </div>
</template>

<script>
import BtnMenu from "@/components/common/BtnMenu.vue";
import CitySwitcher from "@/components/common/CitySwitcher.vue";
import IconPhone from "@/components/icon/IconPhone.vue";
import BaseSocial from "@/components/base/BaseSocial.vue";
export default {
  components: {
    BaseSocial,
    IconPhone,
    CitySwitcher,
    BtnMenu,
  },

  data() {
    return {
      url: "",
    };
  },

  created() {
    this.setUrl();
  },

  computed: {
    currentPath() {
      return this.$route.fullPath;
    },
  },

  watch: {
    currentPath() {
      this.setUrl();
    },
  },

  methods: {
    closeMenu() {
      this.$emit("close-menu");
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
