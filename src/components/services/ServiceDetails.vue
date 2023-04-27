<template>
  <div class="details">
    <div class="details__header header">
      <div class="header__wrap container">
        <img
          src="../../assets/images/services/details1.png"
          width="648"
          height="537"
        />
        <div class="header__text">
          <span>
            This process uses the natural movement of the wind to remove stains
            and debris from the surface of the teeth. The procedure is painless
            and quite comfortable.
          </span>

          <p>
            There are many methods of teeth whitening, some of which are
            affordable and effective, while others are expensive and
            ineffective. Airflow cleaning is one of the least expensive methods
            of teeth whitening available. Airflow cleaning is also one of the
            most effective methods of teeth whitening available. This process
            involves using light suction to draw the stains from your teeth.
            Dentists use a tool called an airflow syringe to do this.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="details__advantage">
        <div class="details__advantage-item">
          <div>
            <icon-adv1 />
          </div>
          <p>Advantage 1</p>
          <span
            >Veniam quae. Nostrum facere repellendus minus quod aut aliquam
            neque reiciendis.</span
          >
        </div>
        <div class="details__advantage-item">
          <div>
            <icon-adv2 />
          </div>
          <p>Advantage 2</p>
          <span
            >Veniam quae. Nostrum facere repellendus minus quod aut aliquam
            neque reiciendis.</span
          >
        </div>
        <div class="details__advantage-item">
          <div>
            <icon-adv3 />
          </div>
          <p>Advantage 3</p>
          <span
            >Veniam quae. Nostrum facere repellendus minus quod aut aliquam
            neque reiciendis.</span
          >
        </div>
      </div>
      <div class="details__before">
        <BeforeAfter class="details__before-main" />
        <div class="details__before-text">
          <p>Clients` <span>Feedback</span></p>
          <span>
            Love my smile after getting the Air-flow cleaning at this clinic!
            Totally recommend the service.
          </span>
          <base-rating class="details__rating" :rating="5" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: #ffffff;

  &__wrap {
    display: flex;
  }

  &__text {
    font-weight: 500;
    font-size: 20px;
    line-height: 34px;
    padding: 20px 0 20px 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      font-style: italic;
      max-width: 700px;
    }

    p {
      max-width: 700px;
      color: #777777;
    }
  }
}

.details {
  &__advantage {
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
    padding-bottom: 100px;
    gap: 20px;
  }

  &__advantage-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    div {
      width: 143px;
      height: 143px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0c74b5;
      border-radius: 50%;
    }

    p {
      font-weight: 700;
      font-size: 32px;
      line-height: 133.2%;
      margin: 40px 0 12px;
    }

    span {
      font-size: 20px;
      line-height: 32px;
      max-width: 370px;
    }
  }

  &__before {
    padding-bottom: 100px;
    display: flex;
    align-items: center;
  }

  &__before-main {
    min-width: 540px;
  }

  &__before-text {
    flex-grow: 1;
    padding-left: 70px;
    p {
      font-weight: 700;
      font-size: 56px;
      line-height: 60px;
      margin: 0 0 40px;
      display: block;
      padding-bottom: 16px;
      border-bottom: 1px solid #bcbcbc;

      span {
        color: #0c74b5;
      }
    }

    & > span {
      font-size: 20px;
      line-height: 30px;
      color: #777777;
    }
  }

  &__rating {
    margin-top: 10px;
  }
}
</style>
<script setup>
import IconAdv1 from "@/components/icon/IconAdv1.vue";
import IconAdv2 from "@/components/icon/IconAdv2.vue";
import IconAdv3 from "@/components/icon/IconAdv3.vue";
import BeforeAfter from "@/components/services/BeforeAfter.vue";
import BaseRating from "@/components/base/BaseRating.vue";
</script>
