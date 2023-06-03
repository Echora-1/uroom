<template>
  <div class="text">
    <p v-if="content?.title" class="text__title">{{ content.title }}</p>
    <p class="text__text" v-if="content?.text">
      {{ content.text }}
    </p>
    <div class="text__list" v-if="content?.list">
      <div class="text__list-img" v-if="content?.list?.img">
        <img
          :src="`${require('@/assets/images/newsDetail/' +
            content?.list?.img)}`"
          alt="img"
          width="440"
          height="180"
        />
      </div>
      <div class="text__list-ul">
        <ul>
          <li v-for="(item, index) in content?.list?.list" :key="index">
            {{ item }}
          </li>
        </ul>
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
.text {
  &__title {
    font-weight: 700;
    font-size: 27px;
    line-height: 27px;
    margin: 0 0 34px;
  }

  &__text {
    font-size: 16px;
    line-height: 27px;
    margin: 0 0 34px;
  }

  &__list {
    display: flex;
    margin: 0 0 34px;
    ul {
      font-size: 16px;
      line-height: 27px;
      list-style: unset;
      margin: 0;
    }
  }

  &__list-img {
    margin-right: 55px;

    img {
      object-fit: cover;
      margin-top: 5px;
      filter: grayscale(1);
    }
  }

  &__list-ul {
    margin-left: 15px;
  }
}
</style>
