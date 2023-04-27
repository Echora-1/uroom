<template>
  <section class="container services">
    <div class="services__header">
      <div class="services__line"></div>
      <h2 class="base-title">Our <span>Services</span></h2>
      <div class="services__line"></div>
    </div>
    <div class="services__cards">
      <div class="card card1">
        <img
          src="../../assets/images/services/s1@2x.png"
          width="593"
          height="190"
          alt="services"
          class="card__img"
        />
        <div class="card__text">
          <p class="card__title">Dental Emergency</p>
        </div>
      </div>
      <div class="card card2">
        <img
          src="../../assets/images/services/s2@2x.png"
          width="593"
          height="190"
          alt="services"
          class="card__img"
        />
        <div class="card__text">
          <p class="card__title">Orthodontic Treatment</p>
        </div>
      </div>
      <div class="card card3">
        <img
          src="../../assets/images/services/s3@2x.png"
          width="593"
          height="190"
          alt="services"
          class="card__img"
          style="object-fit: cover"
        />
        <div class="card__text">
          <p class="card__title">Dental Crown</p>
        </div>
      </div>
      <div class="card card4">
        <img
          src="../../assets/images/services/s4@2x.png"
          width="593"
          height="190"
          alt="services"
          class="card__img"
        />
        <div class="card__text">
          <p class="card__title">Dental Cleaning</p>
        </div>
      </div>
      <div class="card card5">
        <img
          src="../../assets/images/services/s5@2x.png"
          width="593"
          height="190"
          alt="services"
          class="card__img"
          style="object-fit: cover"
        />
        <div class="card__text">
          <p class="card__title">Dental Extraction and Implants</p>
        </div>
      </div>
      <div class="card card6">
        <img
          src="../../assets/images/services/s6@2x.png"
          width="593"
          height="190"
          alt="services"
          class="card__img"
          style="object-fit: cover"
        />
        <div class="card__text">
          <p class="card__title">Air-flow cleaning</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.base-title {
  display: block;
  margin: 0 100px;

  @media (max-width: 1000px) {
    margin: 0 auto;
  }
}

.services {
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 55px;

    @media (max-width: 1000px) {
      margin-bottom: 35px;
    }
  }

  &__line {
    height: 1px;
    background: rgba(82, 82, 91, 0.45);
    flex-grow: 1;

    @media (max-width: 1000px) {
      display: none;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 55px;
    grid-row-gap: 55px;

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      grid-column-gap: unset;
      grid-row-gap: unset;
    }
  }
}

.card {
  background: #f8fafc;
  border: 1px solid rgba(82, 82, 91, 0.1);
  border-radius: 16px;
  overflow: hidden;
  max-width: 593px;
  width: 100%;

  @media (max-width: 1000px) {
    margin-bottom: 14px;
  }

  &__img {
    object-fit: contain;
    object-position: center;

    @media (max-width: 1000px) {
      max-width: 380px;
      max-height: 88px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__text {
    text-align: center;
    padding: 24px 15px 27px;

    @media (max-width: 1000px) {
      padding: 15px 15px 14px;
    }
  }

  &__title {
    margin: 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color: #282828;

    @media (max-width: 1000px) {
      font-size: 15px;
      line-height: 19px;
      margin-bottom: 4px;
    }
  }

  &__subtitle {
    margin: 0;
    font-size: 16px;
    line-height: 26px;
    color: #777777;

    @media (max-width: 1000px) {
      font-size: 13px;
      line-height: 16px;
      max-width: 250px;
      margin: 0 auto;
    }
  }
}

.card1 {
  grid-area: 1 / 1 / 2 / 2;
}
.card2 {
  grid-area: 1 / 2 / 2 / 3;
  justify-self: end;
}
.card3 {
  grid-area: 2 / 1 / 3 / 2;
}
.card4 {
  grid-area: 2 / 2 / 3 / 3;
  justify-self: end;
}

.card5 {
  grid-area: 3 / 1 /4 / 2;
}
.card6 {
  grid-area: 3 / 2 / 4 / 3;
  justify-self: end;
}
</style>
