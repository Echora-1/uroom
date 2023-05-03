<template>
  <button
    :class="[
      'common-button',
      {
        'common-button--transparent': transparent,
        'common-button--disabled': disabled,
        'common-button--loading': loading,
      },
    ]"
    :disabled="disabled"
    @click="click"
  >
    <slot></slot>
    <span class="loader-wrap">
      <span v-if="loading" class="loader"></span>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    transparent: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    black: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.common-button {
  background: rgb(var(--mainColor));
  cursor: pointer;
  color: rgb(var(--textColor));
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 18px 20px;
  justify-content: center;
  border: 1px solid rgb(var(--mainColor));
  position: relative;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transition: all 0s;
    opacity: 0.85;
    transform: translateY(1px);
  }

  &--transparent {
    border-color: rgb(var(--textColor));
    background: #ffffff;
  }

  &--disabled {
    background: rgba(0, 0, 0, 0.3);
    border-color: transparent;
    cursor: not-allowed;
  }

  &--loading {
    color: transparent;
    pointer-events: none;
  }
}

.loader-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader {
  width: 4px;
  height: 25px;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
  position: relative;
  background: currentColor;
  color: rgb(var(--textColor));
  box-sizing: border-box;
  animation: animloader 0.45s 0.3s linear infinite alternate;
}

.loader::after,
.loader::before {
  content: "";
  width: 4px;
  height: 25px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 11px;
  box-sizing: border-box;
  animation: animloader 0.45s 0.45s linear infinite alternate;
}

.loader::before {
  left: -11px;
  animation-delay: 0s;
}

@keyframes animloader {
  0% {
    height: 28px;
  }
  100% {
    height: 3px;
  }
}
</style>
