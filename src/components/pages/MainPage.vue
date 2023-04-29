<template>
  <div>
    <main-screen :title="content?.mainScreen.title" :city="currentPath" />
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
