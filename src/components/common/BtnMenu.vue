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
  height: 20px;
  border-bottom: 2px solid rgb(var(--textColor));
  border-top: 2px solid rgb(var(--textColor));
  background: transparent;
  position: relative;
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
  }

  span {
    width: 19px;
    height: 2px;
    background: rgb(var(--textColor));
    position: absolute;
    top: 50%;
    left: calc(100% - 19px);
    transform: translateY(-50%);
    transition: all 0.3s;
  }

  &--open {
    border-color: #ffffff;

    span {
      left: 0;
      right: unset;
      background: #ffffff;
    }
  }
}
</style>
