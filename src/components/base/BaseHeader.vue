<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__logo-wrap">
        <router-link :to="`/${url}`" class="header__logo">
          <icon-logo class="header__logo-desc" />
          <icon-mb-logo class="header__logo-mb" />
        </router-link>
        <city-switcher class="header__switcher" />
      </div>
      <nav class="header__nav">
        <router-link :to="`/${url}/reservation`">
          <icon-reserve />
          <span> Бронирование </span>
        </router-link>
        <a :href="phoneLink">
          <icon-phone />
          <span>{{ phoneView }}</span>
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
import IconMbLogo from "@/components/icon/IconMbLogo.vue";

export default {
  components: {
    IconMbLogo,
    BtnMenu,
    IconReserve,
    CitySwitcher,
    IconLogo,
    IconPhone,
  },

  data() {
    return {
      showMenu: false,
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

    phoneLink() {
      return this.url === "moscow" ? "tel:89777973623" : "tel:89616583202";
    },

    phoneView() {
      return this.url === "moscow"
        ? "+7 (977) 797 36 23"
        : "+7 (961) 658 32 02";
    },
  },

  watch: {
    currentPath() {
      this.setUrl();
    },
  },

  methods: {
    openMenu() {
      this.$emit("open-menu");
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
.header {
  display: flex;
  align-items: center;
  min-height: 55px;
  width: 100%;
  padding: 44px 0;

  @media (max-width: 1000px) {
    padding: 30px 0;
  }

  &__container {
    display: flex;
    align-items: center;
    max-width: 1060px;
    padding: 0 10px;

    @media (max-width: 1000px) {
      max-width: 430px;
      padding: 0 20px;
    }
  }

  &__logo-wrap {
    display: flex;
    align-items: center;

    svg {
      margin-right: 55px;
    }

    @media (max-width: 1000px) {
      margin-right: auto;
    }
  }

  &__logo-mb {
    display: none;

    @media (max-width: 1000px) {
      display: block;
    }
  }
  &__logo-desc {
    @media (max-width: 1000px) {
      display: none;
    }
  }

  &__switcher {
    @media (max-width: 1000px) {
      display: none;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 43px;

    @media (max-width: 1000px) {
      display: none;
    }

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
