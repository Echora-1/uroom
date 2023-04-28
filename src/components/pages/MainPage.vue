<template>
  <div>
    <main-screen />
    <about-hotel />
  </div>
</template>

<script>
import MainScreen from "@/components/index/MainScreen.vue";
import AboutHotel from "@/components/index/AboutHotel.vue";

export default {
  components: { AboutHotel, MainScreen },
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
