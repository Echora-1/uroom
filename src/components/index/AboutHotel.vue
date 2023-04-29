<template>
  <section class="about container">
    <div class="about__left" v-if="city === 'moscow'">
      <img
        src="../../assets/images/about/about1@2x.png"
        alt="hotel"
        width="268"
        height="188"
      />
      <img
        src="../../assets/images/about/about2@2x.png"
        alt="hotel"
        width="335"
        height="236"
      />
      <img
        src="../../assets/images/about/about3@2x.png"
        alt="hotel"
        width="253"
        height="178"
      />
    </div>
    <div class="about__left" v-else>
      <img
        src="../../assets/images/about/about4@2x.png"
        alt="hotel"
        width="268"
        height="188"
      />
      <img
        src="../../assets/images/about/about5@2x.png"
        alt="hotel"
        width="335"
        height="236"
      />
      <img
        src="../../assets/images/about/about6@2x.png"
        alt="hotel"
        width="253"
        height="178"
      />
    </div>
    <div class="about__right">
      <h2 class="base-title">Об отеле</h2>
      <p v-for="(item, index) in text" :key="index">
        {{ item }}
      </p>
      <a href="">Посмотреть лицензию</a>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    text: { type: Array, default: () => [] },
    city: { type: String, default: "moscow" },
  },
};
</script>

<style lang="scss" scoped>
.base-title {
  margin-bottom: 25px;
}

.about {
  display: flex;
  justify-content: space-between;

  &__left {
    display: flex;
    flex-direction: column;
    max-width: 432px;
    width: 100%;

    img {
      object-fit: contain;

      &:nth-child(1) {
        position: relative;
        z-index: 2;
      }

      &:nth-child(2) {
        margin-left: auto;
        position: relative;
        top: -55px;
        z-index: 1;
      }

      &:nth-child(3) {
        position: relative;
        top: -100px;
        margin-left: 60px;
      }
    }
  }

  &__right {
    width: fit-content;
    margin-left: 48px;

    p {
      font-size: 14px;
      line-height: 22px;
      margin: 0 0 30px;
      max-width: 440px;
    }

    a {
      color: rgb(var(--mainColor));
      font-size: 16px;
      line-height: 30px;
      position: relative;
      display: flex;
      width: fit-content;
      transition: all 0.3s;

      &:hover {
        opacity: 0.7;
      }

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 4px;
        left: 0;
        background: rgb(var(--mainColor));
      }
    }
  }
}
</style>
