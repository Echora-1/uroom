<template>
  <div class="reservation container">
    <widgets-moscow v-if="isMoscow" />
    <widgets-volgograd v-else />
    <connect-block class="reservation__connect" />
  </div>
</template>

<script>
import ConnectBlock from "@/components/index/ConnectBlock.vue";
import WidgetsMoscow from "@/components/reservation/WidgetsMoscow.vue";
import WidgetsVolgograd from "@/components/reservation/WidgetsVolgograd.vue";

export default {
  components: { WidgetsVolgograd, WidgetsMoscow, ConnectBlock },
  data() {
    return {
      isMoscow: true,
    };
  },

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
      this.isMoscow = path.indexOf("moscow") !== -1;
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
