<template>
  <div>
    <main-screen
      :title="content?.mainScreen.title"
      :city="currentPath"
      class="main-screen"
    />
    <about-hotel :text="content?.about.text" :city="currentPath" />
    <address-block :address="content?.address" />
    <connect-block />
  </div>
</template>

<script>
import MainScreen from "@/components/index/MainScreen.vue";
import AboutHotel from "@/components/index/AboutHotel.vue";
import AddressBlock from "@/components/index/AddressBlock/AddressBlock.vue";
import ConnectBlock from "@/components/index/ConnectBlock.vue";
import main from "@/assets/data/main.json";

export default {
  components: { ConnectBlock, AddressBlock, AboutHotel, MainScreen },
  data() {
    return {
      content: [],
    };
  },
  created() {
    this.content = main[this.$route.fullPath.split("/")[1]];
  },

  computed: {
    currentPath() {
      return this.$route.fullPath.split("/")[1];
    },
  },

  watch: {
    currentPath() {
      this.content = main[this.$route.fullPath.split("/")[1]];
    },
  },
};
</script>

<style lang="scss" scoped>
.main-screen {
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    left: -483px;
    bottom: -434px;
    width: 874px;
    height: 876px;
    z-index: -1;
    background: url("../../assets/images/decorMain.svg") no-repeat center;
  }
}
</style>
