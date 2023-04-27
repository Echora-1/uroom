<template>
  <label class="wrapper" tabindex="0">
    {{ label }}
    <input
      v-model="model"
      class="checkbox"
      type="checkbox"
      :name="name"
      :value="value"
    />
    <span class="checkmark">
      <icon-check />
    </span>
  </label>
</template>

<script>
import IconCheck from "@/components/icon/IconCheck";
export default {
  components: { IconCheck },
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    label: { type: String, default: "", required: true },
    checked: { default: "" },
    value: { default: undefined },
    name: { type: String, default: "" },
  },
  computed: {
    model: {
      get() {
        return this.checked;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #52525b;
}
.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  border-radius: 6px;
  transition: all 0.5s;
}

.wrapper:hover input ~ .checkmark > svg {
  fill: transparent;
}
.checkmark > svg {
  position: absolute;
  fill: transparent;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
}
.wrapper input:checked ~ .checkmark > svg {
  fill: #0c74b5;
}
</style>
