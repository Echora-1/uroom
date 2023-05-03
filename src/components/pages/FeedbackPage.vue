<template>
  <div class="container">
    <div class="feedback">
      <h1>Отправить сообщение</h1>
      <p class="feedback__text">
        {{ content?.text }}
      </p>
      <p class="feedback__text">
        {{ content?.engText }}
      </p>
      <feedback-form :city="content?.city" class="feedback__form" />
    </div>
  </div>
</template>
<script>
import FeedbackForm from "@/components/feedback/FeedbackForm.vue";
import feedback from "@/assets/data/feedback.json";

export default {
  components: { FeedbackForm },

  data() {
    return {
      content: {},
    };
  },

  created() {
    this.setContetn();
  },

  computed: {
    currentPath() {
      return this.$route.fullPath;
    },
  },

  watch: {
    currentPath() {
      this.setContetn();
    },
  },

  methods: {
    setContetn() {
      const path = this.$route.fullPath;
      const isMoscow = path.indexOf("moscow") !== -1;
      if (isMoscow) {
        this.content = feedback["moscow"];
      } else {
        this.content = feedback["volgograd"];
      }
    },
  },
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

    @media (max-width: 1000px) {
      margin-bottom: 90px;
    }
  }
}
</style>
