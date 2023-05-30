<template>
  <div class="icon-theme">
    <svg
      v-show="!isLight"
      width="43"
      height="42"
      viewBox="0 0 43 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="21.3047"
        cy="21.0025"
        r="20.7177"
        fill="rgb(var(--mainColor))"
      />
      <path
        d="M21.4047 31C20.0047 31 18.6924 30.7333 17.4677 30.2C16.243 29.6667 15.1764 28.9457 14.2677 28.037C13.359 27.129 12.638 26.0623 12.1047 24.837C11.5714 23.6117 11.3047 22.2993 11.3047 20.9C11.3047 18.4667 12.0797 16.3207 13.6297 14.462C15.1797 12.6033 17.1547 11.4493 19.5547 11C19.2547 12.65 19.3464 14.2627 19.8297 15.838C20.313 17.4133 21.1464 18.7923 22.3297 19.975C23.513 21.1583 24.8924 21.9917 26.4677 22.475C28.043 22.9583 29.6554 23.05 31.3047 22.75C30.8714 25.15 29.7214 27.125 27.8547 28.675C25.988 30.225 23.838 31 21.4047 31Z"
        fill="white"
      />
    </svg>
    <icon-light v-show="isLight" />
  </div>
</template>

<style lang="scss" scoped>
.icon-theme {
  width: 57px;
  height: 57px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 10px solid rgba(255, 146, 132, 0.2);
  position: relative;

  &::before {
    content: "";
    width: 25px;
    height: 25px;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
<script>
import IconLight from "@/components/icon/IconLight.vue";

export default {
  components: { IconLight },
  props: {
    isLight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
