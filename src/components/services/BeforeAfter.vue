<template>
  <div class="before-after" ref="resultWrap">
    <div class="before-after__prev">
      <icon-next-arrow @click="prev" />
    </div>
    <div class="before-after__next"><icon-next-arrow @click="next" /></div>
    <div
      class="before-after__img-after"
      :style="`width: ${currentPercent}%`"
    ></div>
    <div
      class="before-after__toggle toggle"
      :style="`left: ${currentPercent}%`"
    >
      <div class="toggle__wrap">
        <div class="toggle__circle" ref="sliderBtn"></div>
      </div>
    </div>
  </div>
</template>

<script>
import IconNextArrow from "@/components/icon/IconNextArrow.vue";

export default {
  components: { IconNextArrow },
  data() {
    return {
      lineState: null,
      lineWidth: 0,
      lineStart: 0,
      lineEnd: 0,
      onePercentInPixels: 0,
      currentPercent: 50,
      btnPressed: false,
    };
  },

  watch: {
    lineState() {
      this.initSettings();
    },
  },

  mounted() {
    this.setLineState();
    this.initSettings();
    this.$refs.sliderBtn.addEventListener("mousedown", this.onBtnPressed);
    this.$refs.resultWrap.addEventListener("click", this.setCurrentPercent);
    window.addEventListener("resize", this.setLineState);
    document.addEventListener("mouseup", this.offBtnPressed);
    document.addEventListener("mousemove", this.setPercentOnMousemove);
  },

  beforeUnmount() {
    this.$refs.sliderBtn.removeEventListener("mousedown", this.onBtnPressed);
    this.$refs.resultWrap.removeEventListener("click", this.setCurrentPercent);
    window.removeEventListener("resize", this.setLineState);
    document.removeEventListener("mouseup", this.offBtnPressed);
    document.removeEventListener("mousemove", this.setPercentOnMousemove);
  },

  methods: {
    initSettings() {
      this.lineWidth = this.lineState.width;
      this.lineStart = this.lineState.x;
      this.lineEnd = this.lineStart + this.lineWidth;
      this.onePercentInPixels = this.lineWidth / 100;
    },

    setCurrentPercent(e) {
      this.currentPercent = Math.round(
        (e.pageX - this.lineStart) / this.onePercentInPixels
      );
      this.emitPercentChange();
    },

    setLineState() {
      this.lineState = this.$refs.resultWrap.getBoundingClientRect();
    },

    onBtnPressed() {
      this.btnPressed = true;
    },

    offBtnPressed() {
      this.btnPressed = false;
    },

    emitPercentChange() {
      this.$emit("percent-change", this.currentPercent);
    },

    setPercentOnMousemove(e) {
      if (
        this.btnPressed &&
        this.lineStart <= e.pageX &&
        e.pageX <= this.lineEnd
      ) {
        this.setCurrentPercent(e);
      }
    },

    next() {
      if (this.currentPercent <= 95) {
        this.currentPercent += 5;
      }
    },

    prev() {
      if (this.currentPercent >= 5) {
        this.currentPercent -= 5;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.before-after {
  width: 540px;
  height: 324px;
  position: relative;
  background-image: url("@/assets/images/result/after.jpg");
  background-size: 540px 324px;
  background-repeat: no-repeat;
  border-radius: 16px;
  overflow: hidden;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
    background-image: url("@/assets/images/result/after@2x.jpg");
  }

  &__img-after {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    background-image: url("@/assets/images/result/before.jpg");
    background-size: 540px 324px;
    background-repeat: no-repeat;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
      background-image: url("@/assets/images/result/before@2x.jpg");
    }
  }

  &__toggle {
    position: absolute;
    top: 0;
    bottom: 0;
    transform: translateX(-50%);
  }

  &__prev,
  &__next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &__prev {
    left: 10px;
    transform: translateY(-50%) scaleX(-1);
  }

  &__next {
    right: 10px;
  }
}

.toggle {
  width: 5px;
  border-left: 2px solid white;
  border-right: 2px solid white;
  background: white;
  height: 100%;

  &__wrap {
    position: relative;
    height: 100%;
    width: 100%;
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 53%;
    transform: translate(-50%, -50%);
  }
}
</style>
