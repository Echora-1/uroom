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
  padding-left: 30px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 15px;
  line-height: 22px;
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
  top: 4px;
  left: 0;
  height: 16px;
  width: 16px;
  background: #ffffff;
  border: 1px solid #000000;
  transition: all 0.5s;
}

.wrapper:hover input ~ .checkmark > svg {
  fill: rgba(var(--mainColor), 0.5);
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
  fill: rgb(var(--mainColor));
}
</style>
