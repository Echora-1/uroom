<template>
  <div class="social">
    <a href="" target="_blank">
      <icon-face />
    </a>
    <a href="https://t.me/Uroom_bot/" target="_blank">
      <icon-telegram />
    </a>
    <a href="https://www.instagram.com/urooms.ru/" target="_blank">
      <icon-inst />
    </a>
  </div>
</template>
<script setup>
import IconFace from "@/components/icon/IconFace.vue";
import IconInst from "@/components/icon/IconInst.vue";
import IconTelegram from "@/components/icon/IconTelegram.vue";
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  color: rgb(var(--mainColor));
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 43px;
    transition: all 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
