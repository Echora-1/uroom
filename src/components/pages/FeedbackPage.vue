<template>
  <div class="container">
    <div class="feedback">
      <h1>Отправить сообщение</h1>
      <p class="feedback__text">
        Согласно Российского Законодательства иностранные граждане, лица без
        гражданства или Российские граждане находящиеся не в регионе проживания,
        обязаны встать на миграционный учет по месту пребывания. Для наших
        гостей мы делаем постановку на миграционный учет бесплатно, по средствам
        электронного документооборота с ГУ МВД РФ по Волгоградской области. Если
        Вы относитесь к этим категориям гостей, пожалуйста, заполните форму ниже
      </p>
      <p class="feedback__text">
        According to Russian Legislation, foreign citizens, persons without
        citizenship or Russian citizens who are not in the region accommodation,
        must be registered at the place of residence. For our guests we make a
        registration on the migratory account free, by means of electronic
        document flow with the state Ministry of internal Affairs of the
        Volgograd region. If you belong to these categories of guests, please
        fill out the form below.
      </p>
      <feedback-form class="feedback__form" />
    </div>
  </div>
</template>
<script>
import FeedbackForm from "@/components/feedback/FeedbackForm.vue";

export default {
  components: { FeedbackForm },
};
</script>

<style lang="scss" scoped>
.feedback {
  max-width: 870px;

  h1 {
    font-size: 36px;
    line-height: 44px;
    margin: 0 0 22px;
    font-weight: 400;
  }
  &__text {
    font-size: 12px;
    line-height: 17px;
    margin: 0 0 20px;
  }

  &__form {
    margin-top: 37px;
    margin-bottom: 60px;
  }
}
</style>
