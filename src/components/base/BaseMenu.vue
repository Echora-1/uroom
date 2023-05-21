<template>
  <div class="menu">
    <div class="menu__header">
      <a :href="phoneLink" class="menu__phone">
        <span>{{ phoneView }}</span>
      </a>
      <btn-menu open @click="closeMenu" />
    </div>
    <nav class="menu__nav">
      <router-link
        active-class="active-link"
        :to="`/${url}#about`"
        @click="closeMenu"
      >
        Об отеле
      </router-link>
      <router-link
        active-class="active-link"
        @click="closeMenu"
        :to="`/${url}/reservation`"
        >Бронирование</router-link
      >
      <a @click="$emit('doc')">Документы</a>
      <router-link
        active-class="active-link"
        @click="closeMenu"
        :to="`/${url}/contacts`"
        >Контакты</router-link
      >
      <router-link
        active-class="active-link"
        @click="closeMenu"
        :to="`/${url}/feedback`"
        >Обратная связь</router-link
      >
    </nav>
    <base-social class="menu__social" />
  </div>
</template>

<script>
import BtnMenu from "@/components/common/BtnMenu.vue";
import BaseSocial from "@/components/base/BaseSocial.vue";
export default {
  components: {
    BaseSocial,
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

      &:not(:last-child) {
        margin-bottom: 35px;
      }
    }
  }

  .active-link {
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
