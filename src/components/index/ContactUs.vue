<template>
  <section class="contact">
    <div class="container">
      <div class="contact__header">
        <h2 class="base-title">Book An <span>Appointment</span></h2>
      </div>
      <div class="contact__main">
        <div class="contact__left">
          <contact-map />
        </div>
        <div class="contact__right">
          <contact-form />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  background: rgba(255, 255, 255, 1);
  padding-top: 87px;
  padding-bottom: 107px;

  @media (max-width: 1000px) {
    padding-top: 40px;
    padding-bottom: 0;
  }

  &__header {
    padding-bottom: 20px;
    border-bottom: 1px solid #bcbcbc;
    margin-bottom: 100px;

    @media (max-width: 1000px) {
      margin-bottom: 30px;
      padding-bottom: 0;
      border-bottom: none;
      text-align: center;
    }
  }

  &__main {
    display: flex;
    align-items: center;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }

  &__left {
    width: 100%;
    max-width: 55%;
    @media (max-width: 1000px) {
      position: relative;
      max-width: 100%;
    }
  }

  &__right {
    flex-grow: 1;
  }

  &__img {
    object-fit: contain;
    border-radius: 15px;

    @media (max-width: 1000px) {
      position: absolute;
      max-width: 440px;
      max-height: 240px;
      left: 50%;
      top: 0;
      object-fit: cover;
      object-position: bottom;
      transform: translateX(-50%);
      width: calc(100% + 40px);
      border-radius: 0;
    }
  }
}
</style>
<script setup>
import ContactForm from "@/components/index/ContactForm.vue";
import ContactMap from "@/components/index/ContactMap.vue";
</script>
