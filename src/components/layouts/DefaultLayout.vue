<template>
  <div class="layout">
    <BaseHeader />
    <main class="layout__main">
      <slot />
    </main>
    <a target="_blank" class="what"> </a>
    <base-button @click="up" class="telegram"> <icon-up /></base-button>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader.vue";
import BaseFooter from "@/components/base/BaseFooter.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import IconUp from "@/components/icon/IconUp.vue";

export default {
  components: {
    IconUp,
    BaseButton,
    BaseFooter,
    BaseHeader,
  },

  methods: {
    up() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  overflow: hidden;
  width: 100%;

  &__main {
    position: relative;
    margin-top: 177px;

    z-index: 1;
  }
}

.line {
  height: 100%;
  width: 0.5px;
  background: gray;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background: linear-gradient(
    270deg,
    rgba(201, 201, 201, 0.134974) 24.2%,
    rgba(201, 201, 201, 0.0441321) 42.35%,
    rgba(201, 201, 201, 0.2) 78.09%,
    rgba(201, 201, 201, 0) 100%
  );
}

.what {
  width: 83px;
  height: 83px;
  background: #ffffff;
  border-radius: 83.19px;
  position: fixed;
  right: 25px;
  bottom: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  z-index: 1000;
  animation: 1s cubic-bezier(0.6, 0, 0, 1) 0s infinite normal none running pulse;
  border: 0 solid rgb(255, 255, 255);
  box-shadow: rgba(var(--mainColor), 0.7) 0 0 0 0,
    rgb(var(--mainColor)) 0 1px 0 inset;
  &:hover {
    transform: scale(1.05);
  }
}

@keyframes pulse {
  100% {
    box-shadow: 0 0 0 15px rgba(var(--mainColor), 0), inset 0 1px 0 #abcbe9;
  }
}

.telegram {
  width: 60px;
  height: 60px;
  position: fixed;
  right: 36px;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  z-index: 1000;
  padding: 0;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
