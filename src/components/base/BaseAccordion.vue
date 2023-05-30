<template>
  <div class="tab">
    <input :id="content.title" type="checkbox" :checked="active" />
    <label :class="['tab-label']" :for="content.title">
      <slot> </slot>
      {{ content.title }}
    </label>
    <div class="tab-content">
      <p v-for="(item, index) in content.text" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          title: "",
          text: [],
        };
      },
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

input:checked {
  + .tab-label {
    color: rgb(var(--mainColor));
    &::before {
      transform: translateY(-50%) rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 500px;
    padding: 0 0 20px;
  }
}

.tab {
  background: transparent;
  width: 100%;
  color: #414141;
  overflow: hidden;
  &-label {
    display: flex;
    align-items: center;
    padding: 20px 50px 20px 0;
    cursor: pointer;
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
    color: rgb(var(--textColor));
    position: relative;
    transition: color 0.3s;

    &::before,
    &::after {
      content: "";
      background: rgb(var(--mainColor));
      width: 16px;
      height: 2px;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
      position: absolute;
      transition: all 0.3s;
    }

    @media (max-width: 767px) {
      font-size: 16px;
      padding: 18px 60px 18px 48px;
    }
  }
  &-content {
    max-height: 0;
    padding: 0;
    font-size: 16px;
    line-height: 29px;
    position: relative;
    color: rgb(var(--textColor));
    border-bottom: 1px solid #cccccc;

    @media (min-width: 768px) {
      transition: all 0.3s;
    }

    p {
      margin: 0;
    }

    p:not(:last-child) {
      margin-bottom: 30px;
    }
  }
}
</style>
