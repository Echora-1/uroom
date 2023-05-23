<template>
  <div class="wrap-form">
    <form
      class="form"
      ref="formFeedback"
      @submit.prevent="submit"
      v-if="!loading && !success"
    >
      <base-input
        class="form__input"
        placeholder="Ваше имя"
        type="text"
        id="name"
        name="name"
        v-model="form.name"
      />
      <base-input
        class="form__input"
        placeholder="Телефон"
        v-model="form.phone"
        type="text"
        id="phone"
        name="phone"
      />
      <base-input
        class="form__input"
        type="email"
        placeholder="Email"
        v-model="form.email"
        id="email"
        name="email"
      />

      <base-input
        textarea
        class="form__input"
        placeholder="Сообщение"
        ё
        rows="3"
        v-model="form.message"
        type="text"
        id="message"
        name="message"
      />
      <div class="form__footer">
        <base-button type="submit" class="form__btn" :loading="loading"
          >отправить</base-button
        >
      </div>
    </form>
    <base-loader v-if="loading && !success" class="form__loader" />
    <icon-form-success
      v-if="success"
      width="250"
      height="250"
      class="form__success"
    />
  </div>
</template>
<script>
import emailjs from "emailjs-com";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseLoader from "@/components/base/BaseLoader.vue";
import IconFormSuccess from "@/components/icon/IconFormSuccess.vue";

export default {
  components: {
    IconFormSuccess,
    BaseLoader,
    BaseButton,
    BaseInput,
  },
  props: {
    city: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      loading: false,
      success: false,
      form: {
        name: "",
        phone: "",
        email: "",
        message: "",
        file: "",
      },
    };
  },

  methods: {
    /*    captureFile($event) {
      console.log($event);
      this.form.file = $event;
    },*/

    submit() {
      if (this.form.email.length && this.form.name.length) {
        this.loading = true;
        emailjs
          .sendForm(
            "service_zbs4hxe",
            "template_bv9q4y1",
            this.$refs.formFeedback,
            "LrROcGdRYRSBecA"
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.text);
              this.loading = false;
              this.success = true;
            },
            (error) => {
              console.log("FAILED...", error.text);
              this.loading = false;
            }
          );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap-form {
  width: 100%;
  display: flex;
  margin: auto;
}

.form {
  width: 100%;

  &__input {
    width: 100%;
    margin-bottom: 37px;
  }

  &__file {
    max-width: 507px;
    width: 100%;
    align-items: center;
    display: flex;

    p {
      margin: 0 0 0 17px;
      font-size: 16px;
      line-height: 30px;
      opacity: 0.6;
    }
  }

  &__checkbox {
    max-width: 450px;
  }

  &__footer {
  }

  &__btn {
    margin-top: 69px;
    min-width: 196px;
  }

  &__loader {
    margin: auto;
  }

  &__success {
    margin: auto;
  }
}
</style>
