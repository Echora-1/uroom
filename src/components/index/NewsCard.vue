<template>
  <div class="card">
    <img
      :src="`${require('@/assets/images/news/' + content?.img + '.png')}`"
      alt="news"
      width="354"
      height="188"
      loading="lazy"
    />
    <router-link :to="content?.url">
      <span>{{ content?.name }}</span
      ><icon-arrow-link
    /></router-link>
    <p>
      {{ content?.text }}
    </p>
  </div>
</template>
<script>
import IconArrowLink from "@/components/icon/IconArrowLink.vue";
export default {
  components: { IconArrowLink },
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
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    max-width: 240px;
  }

  img {
    object-fit: contain;

    @media (max-width: 1000px) {
      height: 146px;
      object-fit: cover;
      width: 100%;
    }
  }

  a {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    max-width: 354px;
    border-bottom: 1px solid rgba(var(--mainColor), 0.4);
    padding: 20px 0;
    font-weight: 700;
    margin-bottom: 13px;
    font-size: 18px;
    line-height: 29px;
    position: relative;

    @media (max-width: 1000px) {
      font-size: 14px;
      line-height: 22px;
      border: none;
      margin-bottom: 0;
      padding: 10px 0;
    }

    span {
      max-width: calc(100% - 25px);
    }

    svg {
      display: block;
      min-height: 18px;
      height: 18px;
      position: absolute;
      top: 50%;
      right: 0;
      color: rgb(var(--arrow));
      transform: translateY(-50%);

      @media (max-width: 1000px) {
        display: none;
      }
    }
  }

  p {
    margin: 0;
    max-width: 354px;
    font-size: 16px;
    line-height: 29px;

    @media (max-width: 1000px) {
      font-size: 12px;
      line-height: 22px;
    }
  }
}
</style>
