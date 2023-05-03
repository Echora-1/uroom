<template>
  <div>
    <input
      id="file-input"
      class="hide-file-input"
      type="file"
      accept="image/*"
      @change="onFileChange($event)"
    />
    <label class="file-label" for="file-input"> Выбрать файлы </label>
  </div>
</template>
<script>
export default {
  methods: {
    onFileChange($event) {
      const file = $event.target.files[0];
      if (file) {
        this.$emit("file-updated", file);
      }
    },
  },
};
</script>
<style scoped>
.hide-file-input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.file-label {
  color: #000000;
  background: #eff4fb;
  border: 1px solid #000000;
  padding: 0.5rem 1rem;
  cursor: pointer;
  min-height: 36px;
  min-width: 168px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  line-height: 30px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
}
</style>
