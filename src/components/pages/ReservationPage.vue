<template>
  <div class="reservation container">
    <h1 class="reservation__title">
      Бронирование <br />
      (г. {{ isMoscow ? "Москва" : "Волгоград" }})
    </h1>
    <p class="reservation__time">
      Время заезда - 14.00,<br />
      время выезда - 12.00
    </p>
    <widgets-moscow class="wg" v-if="isMoscow" />
    <widgets-volgograd class="wg" v-else />
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
  overflow: hidden;

  @media (max-width: 1000px) {
    overflow: visible;
  }

  &__title {
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    align-self: flex-start;
    margin: 30px 0 17px;

    br {
      display: none;
    }

    @media (max-width: 1000px) {
      text-align: start;

      br {
        display: block;
      }
    }
  }

  &__connect {
    margin-top: 65px;
  }

  &__time {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    align-self: flex-start;

    br {
      display: none;
    }

    @media (max-width: 1000px) {
      br {
        display: block;
      }
    }
  }
}

.wg {
  min-height: 600px;

  @media (max-width: 1000px) {
    width: 100%;
  }
}
</style>

<style>
#rc-bookings-widget-root *,
#rc-demo-bookings-widget-root *,
#rc-small-bookings-widget-root * {
  @media (max-width: 1000px) {
    max-width: 430px !important;
  }
}
</style>
