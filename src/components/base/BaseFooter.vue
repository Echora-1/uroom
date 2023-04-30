<template>
  <footer class="container footer">
    <div class="footer__wrap">
      <div class="footer__list">
        <a href="">Об отеле </a>
        <a href="">Бронирование</a>
        <a href="">Документы</a>
        <a href="">Контакты</a>
        <a href="">Обратная связь</a>
      </div>
    </div>
    <div class="footer__copir">
      <p>
        ИП Трухменева С.В. ОГРИП 307345905700016 <br />
        свидетельство от 26.02.2007 года серия 34 № 003020722
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &__wrap {
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 29px;
    @media (max-width: 1000px) {
      max-width: 305px;
      margin: 0 auto 29px;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    justify-content: space-between;
    width: fit-content;
    gap: 44px;

    @media (max-width: 1000px) {
      flex-direction: column;
    }

    a {
      font-size: 13px;
      line-height: 18px;
      text-align: center;
      letter-spacing: 0.12em;
    }
  }

  &__copir {
    p {
      font-size: 12px;
      line-height: 22px;
      text-align: center;
      opacity: 0.5;
      margin: 0 0 26px;

      @media (max-width: 1000px) {
        margin: 37px 0 47px;
      }
    }
  }
}
</style>
<script setup></script>
