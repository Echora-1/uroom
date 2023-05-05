<template>
  <div class="reservation container">
    <div id="rc-bookings-widget-root"></div>
    <connect-block class="reservation__connect" />
  </div>
</template>

<script>
import ConnectBlock from "@/components/index/ConnectBlock.vue";

export default {
  components: { ConnectBlock },

  computed: {
    currentPath() {
      return this.$route.fullPath;
    },
  },

  watch: {
    currentPath() {
      this.setContetn();
    },
  },

  methods: {
    setContetn() {
      const path = this.$route.fullPath;
      const isMoscow = path.indexOf("moscow") !== -1;
      if (isMoscow) {
        window.RC_BOOKINGS_WIDGET.init("bd13394a7af04379f3fb92b106fafa50", {
          apartment_ids: [28570, 24411, 28571, 28573, 28575],
        });
      } else {
        window.RC_BOOKINGS_WIDGET.init("f3ed9e6371c1429587b9df14c1a637d5");
      }
    },
  },
  mounted() {
    this.setContetn();
  },
};
</script>

<style lang="scss" scoped>
.reservation {
  min-height: 500px;
  text-align: center;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;

  &__connect {
    margin-top: 65px;
  }
}
</style>
