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
    <span class="checkmark"> </span>
  </label>
</template>

<script>
export default {
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
  font-size: 16px;
  line-height: 130%;
  color: rgb(var(--textColor));
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
  background: #545454;
  border: 0.5px solid #ec2d24;
  transition: all 0.5s;
}

.wrapper:hover input ~ .checkmark {
  background: rgba(var(--mainColor), 0.5);
}
.checkmark > svg {
  position: absolute;
  fill: transparent;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
}
.wrapper input:checked ~ .checkmark {
  background: rgb(var(--mainColor));
}
</style>
