<template>
  <button :class="['btn-menu', { 'btn-menu--open': open }]">
    <span></span>
  </button>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-menu {
  width: 24px;
  height: 18px;
  background: transparent;
  position: relative;
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
  }

  &::before,
  &::after {
    content: "";
    width: 24px;
    height: 2px;
    background: rgb(var(--textColor));
    border-radius: 2px;
    left: 0;
    right: 0;
    position: absolute;
  }

  &::before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }

  span {
    width: 24px;
    height: 2px;
    background: rgb(var(--textColor));
    position: absolute;
    top: 50%;
    left: calc(100% - 24px);
    transform: translateY(-50%);
    transition: all 0.3s;
    border-radius: 2px;
  }

  &--open {
    span {
      display: none;
    }

    &::before,
    &::after {
      top: 8px;
      bottom: unset;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
}
</style>
