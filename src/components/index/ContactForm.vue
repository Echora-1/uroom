<template>
  <div class="form">
    <form class="form__form" v-if="!loading && !success" @submit.prevent="send">
      <base-input
        v-model="form.name"
        type="text"
        id="name"
        name="name"
        class="form__input"
        label="Name"
        placeholder="Name"
        :error-list="nameErrors"
      />
      <base-input
        v-model="form.phone"
        type="text"
        id="phone"
        name="phone"
        class="form__input"
        label="Phone"
        placeholder="(555) 000-0000"
        :error-list="phoneErrors"
      />
      <base-input
        textarea
        rows="5"
        v-model="form.message"
        type="text"
        id="message"
        name="message"
        class="textarea"
        label="Message"
        placeholder="Include a message..."
      />
      <base-checkbox
        label="You agree to our friendly privacy policy."
        :checked="false"
        name="privacy"
        class="form__checkbox"
      />
      <base-button class="form__btn" type="submit" :disabled="!formIsValid">
        Send message
      </base-button>
    </form>
    <base-loader v-if="loading && !success" class="form__loader" />
    <icon-form-success v-if="success" width="250" height="250" />
  </div>
</template>

<script>
import BaseInput from "@/components/base/BaseInput";
import BaseButton from "@/components/base/BaseButton";
import BaseLoader from "@/components/base/BaseLoader";
import IconFormSuccess from "@/components/icon/IconFormSuccess";
import BaseCheckbox from "@/components/base/BaseCheckbox.vue";
import "vue-datepicker-next/index.css";

export default {
  components: {
    BaseCheckbox,
    IconFormSuccess,
    BaseLoader,
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      loading: false,
      success: false,
      time: null,
      form: {
        name: "",
        phone: "",
        message: "",
        date: "",
        doctor: "",
      },
      doctorList: [
        {
          name: "Dr. Ann May",
          value: "d1",
        },
        { name: "Dr. Jack Jhones", value: "d2" },
      ],
    };
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.form.name.length > 0) errors.push("Required field");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.form.phone.length > 0) errors.push("Required field");
      return errors;
    },

    formIsValid() {
      return this.nameErrors.length === 0 && this.phoneErrors.length === 0;
    },
  },

  methods: {
    send() {
      if (this.formIsValid) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.success = true;
        }, 1500);
      }
    },

    setDoctor(value) {
      this.form.doctor = value.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 666px;
  padding-left: 30px;
  margin-left: auto;

  @media (max-width: 1000px) {
    padding-left: 0;
    min-height: 478px;
  }

  &__form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  &__input {
    margin-bottom: 12px;
    width: 100%;

    @media (max-width: 1000px) {
      width: calc(50% - 10px);

      &:nth-child(odd) {
        margin-right: 10px;
      }

      &:nth-child(even) {
        margin-left: 10px;
      }
    }
  }

  &__btn {
    margin-top: auto;
    width: 100%;

    @media (max-width: 1000px) {
      font-size: 14px !important;
      line-height: 16px !important;
      padding: 12px 40px !important;
    }
  }

  &__checkbox {
    margin-bottom: 20px;
  }

  &__loader {
    margin: auto;
  }
}

.date-label {
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 8px;
}

.textarea {
  width: 100%;
  margin-bottom: 5px;
}
</style>
