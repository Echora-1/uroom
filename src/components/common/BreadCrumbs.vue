<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__wrap container">
      <router-link class="breadcrumbs__main-link" to="/">
        Главная <icon-duble-arrow
      /></router-link>
      <router-link :to="link.url" v-for="(link, index) in links" :key="index">
        {{ link.name }}
      </router-link>
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
}
</style>
