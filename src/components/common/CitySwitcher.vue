<template>
  <div :class="['switcher', { 'switcher--active2': activeCity === 2 }]">
    <button class="switcher__btn1" @click="setCity1">москва</button>
    <button class="switcher__btn2" @click="setCity2">волгоград</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCity: 1,
    };
  },

  created() {
    this.activeCity = this.$route.fullPath.split("/")[1] === "moscow" ? 1 : 2;
  },

  methods: {
    setCity1() {
      this.activeCity = 1;
      this.$router.push("/moscow");
    },

    setCity2() {
      this.activeCity = 2;
      this.$router.push("/volgograd");
    },
  },
};
</script>

<style lang="scss" scoped>
.switcher {
  background: #f7f9fc;
  border-radius: 30px;
  position: relative;
  z-index: 1;
  transition: all 0.2s;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 40px;
    width: 108px;
    background: rgb(var(--mainColor));
    border-radius: 30px;
    z-index: -1;
    transition: all 0.2s;
  }

  &--active2 {
    &::before {
      transform: translateX(105px);
      width: 124px;
    }
  }

  button {
    min-width: 108px;
    min-height: 40px;
    background: transparent;
    font-weight: 700;
    font-size: 11px;
    line-height: 18px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__btn1 {
    padding: 0;
    border-radius: 30px 0 30px 0;
  }

  &__btn2 {
    padding: 0 20px;
    border-radius: 30px 0 30px 0;
  }
}
</style>
