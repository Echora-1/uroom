<template>
  <div class="wrap-form">
    <form
      class="form"
      ref="formFeedback"
      @submit.prevent="submit"
      v-if="!loading && !success"
    >
      <div class="form__item">
        <p class="form__label">Контактное лицо / Name *</p>
        <base-input
          class="form__input"
          placeholder="например, Иван Иванович Иванов / ex. John Smith"
          type="text"
          id="name"
          name="name"
          v-model="form.name"
        />
      </div>
      <div class="form__item">
        <p class="form__label">Телефон / Phone *</p>

        <base-input
          class="form__input"
          placeholder="например, 89023123456 / ex. +34905123456"
          v-model="form.phone"
          type="text"
          id="phone"
          name="phone"
        />
      </div>
      <div class="form__item">
        <p class="form__label">Эл. почта / E-mail *</p>

        <base-input
          class="form__input"
          type="email"
          placeholder="например, ivanov@yandex.ru / ex. jsmith@gmail.com"
          v-model="form.email"
          id="email"
          name="email"
        />
      </div>
      <div class="form__item">
        <p class="form__label">Прикрепить файл / Attach file:</p>
        <div class="form__file">
          <base-file @file-updated="captureFile($event)" />
          <p>{{ this.form.file ? this.form.file.name : "Файл не выбран" }}</p>
        </div>
      </div>
      <div class="form__item">
        <p class="form__label">Сообщение / Message:</p>

        <base-input
          textarea
          class="form__input"
          placeholder="Сообщение / Message"
          ё
          rows="5"
          v-model="form.message"
          type="text"
          id="message"
          name="message"
        />
      </div>
      <div class="form__footer">
        <base-checkbox
          label='Нажимая на кнопку "Отправить", я даю согласие на обработку персональных данных. (By clicking on the "Submit" button, I consent to the processing of personal data)'
          :checked="false"
          name="privacy"
          class="form__checkbox"
        />
        <base-button type="submit" class="form__btn" :loading="loading"
          >отправить / send</base-button
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
/*
import emailjs from "@emailjs/browser";
*/
import emailjs from "emailjs-com";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseFile from "@/components/base/BaseFile.vue";
import BaseCheckbox from "@/components/base/BaseCheckbox.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseLoader from "@/components/base/BaseLoader.vue";
import IconFormSuccess from "@/components/icon/IconFormSuccess.vue";

export default {
  components: {
    IconFormSuccess,
    BaseLoader,
    BaseButton,
    BaseCheckbox,
    BaseFile,
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
    captureFile($event) {
      console.log($event);
      this.form.file = $event;
    },

    submit() {
      this.loading = true;
      emailjs
        .sendForm(
          "service_zbs4hxe",
          "template_bv9q4y1",
          this.$refs.formFeedback,
          "LrROcGdRYRSBecA74"
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
    },

    /*async sendEmailWithAttachment() {
      // Создаем объект сообщения
      const message = {
        name: this.form.name,
        phone: this.form.phone,
        email: this.form.email,
        message: this.form.message,

        // создаем объект вложения файла
        attachment: {
          // имя файла, которое будет отображаться у получателя
          name: this.form.file.name,
          // сам файл, который мы отправляем
          data: await this.getFile(),
        },
      };
      // Отправляем сообщение через EmailJS
      emailjs.send(
        "service_zbs4hxe",
        "template_bv9q4y1",
        message,
        "LrROcGdRYRSBecA74"
      );
    },

    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });
    },

    async getFile() {
      const file = this.form.file;
      try {
        const result = await this.toBase64(file);
        return result;
      } catch (error) {
        console.error(error);
        return;
      }
    },*/
  },
};
</script>

<style lang="scss" scoped>
.wrap-form {
  min-height: 619px;
  width: 100%;
  display: flex;
}
.form {
  width: 100%;

  &__item {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 20px;

    @media (max-width: 1000px) {
      flex-direction: column;
      justify-content: flex-start;
    }

    p {
      font-size: 18px;
      line-height: 30px;
      color: #000000;
      opacity: 0.6;
      margin: 10px 0 0 0;
      max-width: 290px;
      width: 100%;

      @media (max-width: 1000px) {
        margin: 0 0 7px;
      }
    }
  }

  &__input {
    max-width: 507px;
    width: 100%;
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
    max-width: 507px;
    margin-left: auto;
  }

  &__btn {
    margin-top: 25px;
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
