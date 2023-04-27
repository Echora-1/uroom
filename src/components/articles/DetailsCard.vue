<template>
  <div class="card">
    <p class="card__title" v-if="content?.title">{{ content?.title }}</p>
    <div v-for="(item, index) in content?.list" :key="index">
      <p v-if="item.type === 'paragraph'" class="card__paragraph">
        {{ item.text }}
      </p>
      <ol v-if="item.type === 'ol'" class="card__list">
        <li v-for="i in item.items" :key="i">{{ i }}</li>
      </ol>
      <ul v-if="item.type === 'ul'" class="card__list-ul">
        <li v-for="i in item.items" :key="i">{{ i }}</li>
      </ul>
      <div class="card__quotes" v-if="item.type === 'quotes'">
        <div class="card__quotes-icon">
          <IconQuotes />
        </div>

        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 133.2%;
    margin: 0 0 20px;

    @media (max-width: 1000px) {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      margin: 0 0 14px;
    }
  }

  &__paragraph,
  &__list,
  &__list-ul {
    font-size: 20px;
    line-height: 32px;
    margin: 0 0 30px;

    @media (max-width: 1000px) {
      font-size: 12px;
      line-height: 18px;
      margin: 0 0 20px;
    }
  }

  &__list {
    padding-left: 25px;

    @media (max-width: 1000px) {
      padding-left: 15px;
    }
  }

  &__list-ul {
    padding-left: 25px;
    list-style: unset;

    @media (max-width: 1000px) {
      padding-left: 15px;
    }
  }

  &__quotes {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #0c74b5;
    border-radius: 16px;
    padding: 65px;
    margin-bottom: 30px;

    @media (max-width: 1000px) {
      padding: 20px;
      border-radius: 7px;
    }

    p {
      margin: 20px 0 0;
      font-size: 20px;
      line-height: 160%;
      text-align: center;
      color: #ffffff;

      @media (max-width: 1000px) {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }

  &__quotes-icon {
    background: #ffffff;
    width: 93px;
    height: 93px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    @media (max-width: 1000px) {
      width: 38px;
      height: 38px;

      svg {
        width: 15px;
        height: 9px;
      }
    }
  }
}
</style>
<script setup>
import IconQuotes from "@/components/icon/IconQuotes.vue";
</script>
