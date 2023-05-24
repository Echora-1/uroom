<template>
  <div :class="['breadcrumbs', { 'breadcrumbs--start': start }]">
    <div class="breadcrumbs__wrap container">
      <router-link class="breadcrumbs__main-link" to="/">
        Главная <icon-duble-arrow
      /></router-link>
      <template v-if="links.length === 1">
        <router-link :to="link.url" v-for="(link, index) in links" :key="index">
          {{ link.name }}
        </router-link>
      </template>
      <template v-else>
        <router-link
          class="breadcrumbs__main-link"
          :to="link.url"
          v-for="link in links.slice(0, links.length - 1)"
          :key="link.name"
        >
          {{ link.name }} <icon-duble-arrow
        /></router-link>
        <router-link
          :to="links[links.length - 1].url"
          :key="links[links.length - 1].name"
        >
          {{ links[links.length - 1].name }}
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import IconDubleArrow from "@/components/icon/IconDubleArrow.vue";
export default {
  components: { IconDubleArrow },
  props: {
    links: {
      type: Array,
      default: () => [
        {
          name: "Перегородки в квартиру Лофт",
          url: "/lofts/1",
        },
      ],
    },
    start: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  background: rgba(var(--bg), 0.8);
  padding: 14px 0;

  &__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    font-weight: 500;
    font-size: 17px;
    line-height: 25px;
  }

  &__main-link {
    color: rgb(var(--mainColor));
    display: flex;
    align-items: center;
    margin-right: 34px;

    svg {
      margin-top: 1px;
      margin-left: 10px;
    }
  }

  &--start {
    .breadcrumbs__wrap {
      justify-content: start;
    }
  }
}
</style>
