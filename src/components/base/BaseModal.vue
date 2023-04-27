<template>
  <transition name="fade" appear>
    <div v-if="isOpen" class="modal-wrap" @click="close">
      <div class="modal" @click.stop>
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  unmounted() {
    document.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    handleKeydown(e) {
      if (this.isOpen && e.key === "Escape") {
        this.close();
      }
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(222, 238, 251, 0.4);
  display: flex;
  z-index: 100;
}
.modal {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 101;
  display: flex;
  flex-direction: column;
}

.modal-content {
  background: transparent;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
