<template>
  <div :class="['card', { 'card--reverse': content.reverse }]">
    <img
      :src="require('../../assets/images/doctors/' + content.img)"
      width="540"
      height="540"
      alt="doctors"
      class="card__img"
    />
    <div class="card__content">
      <p class="card__name">{{ content.name }}</p>
      <p class="card__position">{{ content.position }}</p>
      <p class="text">
        {{ content.text }}
      </p>
      <div class="card__btns">
        <base-button>Book Appointment</base-button>
        <base-button black @click="$emit('modal')">Read More</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  components: { BaseButton },
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          name: "Dr. Ann May",
          position: "General Orthodontist",
          text: "Personable dentist with 12 years of experience improving oral health so that patients can smile confidently. Skills include ICON Aesthetic Infiltration, Restorative Procedures, Crowns, Bridges & Veneers, and ICON Aesthetic Infiltration.",
          img: "d1@2x",
          reverse: false,
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  max-width: 660px;

  @media (max-width: 1000px) {
    max-width: 300px;
  }
}

.card {
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
  }

  &__img {
    object-fit: contain;
    border-radius: 50%;
    border: 4px solid #ffffff;
    background: #606e8a;

    @media (max-width: 1000px) {
      flex-direction: column;
      max-width: 226px;
      max-height: 226px;
      margin-bottom: 28px;
    }
  }

  &__content {
    padding-left: 30px;
    margin-left: auto;

    @media (max-width: 1000px) {
      padding-left: 0;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__name {
    font-weight: 700;
    font-size: 48px;
    line-height: 34px;
    margin: 0 0 20px;

    @media (max-width: 1000px) {
      font-size: 24px;
      line-height: 19px;
      margin-bottom: 11px;
    }
  }

  &__position {
    font-style: italic;
    font-size: 27px;
    line-height: 110%;
    color: rgba(38, 38, 38, 0.7);
    display: inline-block;
    margin: 0 0 30px;
    padding-bottom: 27px;
    border-bottom: 1px solid rgba(82, 82, 91, 0.3);

    @media (max-width: 1000px) {
      font-size: 14px;
      line-height: 15px;
      padding-bottom: 12px;
      margin: 0 0 20px;
    }
  }

  &__btns {
    margin-top: 30px;
    display: flex;

    button:first-child {
      margin-right: 28px;
    }

    @media (max-width: 1000px) {
      justify-content: center;

      button:first-child {
        margin-right: 14px;
      }

      button {
        min-width: 139px;
      }
    }
  }

  &--reverse {
    @media (min-width: 1001px) {
      .card__content {
        order: -1;
        padding-right: 30px;
        margin-right: auto;
      }
    }
  }
}
</style>
