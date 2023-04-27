<template>
  <div
    v-click-outside="hideDropdown"
    :class="['wrapper', { 'input-focused': focused }]"
  >
    <label :for="id" class="base-label">
      {{ label }}
    </label>
    <div
      :class="[
        'base-input-wrapper',
        {
          'base-input-wrapper--open': isDropdownOpen,
        },
      ]"
    >
      <input
        :id="id"
        class="base-input"
        v-bind="$attrs"
        :placeholder="$attrs.placeholder"
        readonly
        @focus="focusHandler"
        @input="inputHandler"
        :value="valueText"
        @blur="blurHandler"
      />
    </div>
    <div v-if="isDropdownOpen" class="list-selector___dropdown">
      <ul>
        <li
          v-for="item in list"
          :key="item.id"
          tabIndex="0"
          :class="[
            { 'selected-item': item?.value === selectedListItem?.value },
          ]"
          @click="onItemClick(item)"
          @keyup.enter="onItemClick(item)"
        >
          {{ item[itemKey] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import vClickOutside from "click-outside-vue3";
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },

    label: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    itemKey: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      focused: false,
      isDropdownOpen: false,
      selectedListItem: null,
      valueText: "",
    };
  },

  watch: {
    selectedListItem() {
      this.$emit("selected", this.selectedListItem);
    },
  },

  methods: {
    inputHandler(event) {
      this.$emit("input", event.target.value);
      this.isDropdownOpen = true;
    },

    focusHandler() {
      this.focused = true;
      this.isDropdownOpen = true;
    },

    blurHandler() {
      this.focused = false;
    },

    hideDropdown() {
      this.isDropdownOpen = false;
    },

    onItemClick(item) {
      this.selectedListItem = item;
      this.valueText = item[this.itemKey];
      this.isDropdownOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}

.base-input-wrapper {
  border: 1px solid rgba(82, 82, 91, 0.25);
  border-radius: 8px;
  width: 100%;
  transition: all 0.5s;
  background: rgb(255, 255, 255);
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 7px;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 17px;
    transform: translateY(-50%);
    width: 12px;
    height: 8px;
    background-repeat: no-repeat;
    background-image: url("@/assets/images/inputVector.svg");
    background-position: center;
    transition: all 0.3s;
  }

  &--open {
    &::after {
      transform: translateY(-50%) rotate(180deg);
    }
  }
}

.base-input {
  width: 100%;
  margin: 0;
  border: none;
  outline: none;
  padding: 12px 32px 12px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgb(0, 0, 0);
  background-color: transparent;
  position: relative;

  @media (max-width: 1000px) {
    font-size: 14px;
    line-height: 15px;
  }
}

.base-input::placeholder {
  color: rgba(0, 0, 0, 0.6);
}

.base-label {
  font-size: 14px;
  line-height: 20px;
}

.list-selector___dropdown {
  max-height: 200px;
  width: -webkit-fill-available;
  overflow-y: auto;
  position: absolute;
  margin-top: 11px;
  z-index: 2;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(47, 56, 94, 0.2);
  border-radius: 6px;
}

.list-selector___dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;

  .item-disabled {
    cursor: not-allowed;

    &:hover {
      background: rgb(255, 255, 255);
    }

    &::after {
      display: none;
    }
  }

  .empty-text {
    color: rgba(0, 0, 0, 0.6);
    justify-content: center;

    &:hover {
      background: rgb(255, 255, 255);
    }
  }
}

.list-selector___dropdown li {
  padding: 15px;
  cursor: pointer;
  color: rgb(0, 0, 0);
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;

  .crypto-name {
    margin-right: 7px;
  }
}

.list-selector___dropdown li:hover {
  background-color: #0066ff1a;
}

.empty {
  text-align: center;
  font-size: 16px;
  color: white;
}

li.empty:hover {
  background-color: transparent;
}

.selected-item {
  padding-right: 32px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 17px;
    transform: translateY(-50%);
    width: 14px;
    height: 10px;
    background-repeat: no-repeat;
    background-image: url("@/assets/images/inputCheck.svg");
    background-position: center;
    transition: all 0.3s;
  }
}

.input-focused {
}

.invalid {
  .invalid-text {
    color: #fa5d2c;
    position: absolute;
    bottom: 48px;
    left: 0;
    font-size: 14px;
  }
}

.crypto-name {
  font-size: 16px;
  line-height: 20px;
  color: rgb(0, 0, 0);
  display: inline-block;
  margin-left: 7px;
}

.network-img {
  margin-right: 6px;
}

.not-active {
  color: #db0d00;
  display: inline-block;
  margin-left: auto;
}
</style>
