<template>
  <div>
    <main-screen />
  </div>
</template>

<script>
import MainScreen from "@/components/index/MainScreen.vue";

export default {
  components: { MainScreen },
};
</script>

<style lang="scss" scoped>
.section-services {
  margin-top: 82px;
  margin-bottom: 62px;

  @media (max-width: 1000px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
}

.section-doctors {
  margin-top: 85px;
  margin-bottom: 102px;

  @media (max-width: 1000px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
}
</style>
