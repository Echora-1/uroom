<template>
  <footer class="footer">
    <div class="footer__wrap container">
      <div class="footer__advantages">
        <h2 class="base-title">Ключевые преимущества Dark Loft</h2>
        <div class="footer__advantages-list">
          <div class="footer__advantages-item">
            <div class="footer__advantages-img">
              <img
                src="@/assets/images/footer/warranty.png"
                width="44"
                height="44"
                alt="warranty"
                loading="lazy"
              />
            </div>
            <p>Гарантия по договору</p>
          </div>
          <div class="footer__advantages-item">
            <div class="footer__advantages-img">
              <img
                src="@/assets/images/footer/fast.png"
                width="44"
                height="44"
                alt="warranty"
                loading="lazy"
              />
            </div>
            <p>Быстрая реализация</p>
          </div>
          <div class="footer__advantages-item">
            <div class="footer__advantages-img">
              <img
                src="@/assets/images/footer/dev.png"
                width="44"
                height="44"
                alt="warranty"
                loading="lazy"
              />
            </div>
            <p>Собственное производство</p>
          </div>
          <div class="footer__advantages-item">
            <div class="footer__advantages-img">
              <img
                src="@/assets/images/footer/ruble.png"
                width="44"
                height="44"
                alt="warranty"
                loading="lazy"
              />
            </div>
            <p>Конкурентоспособные цены</p>
          </div>
        </div>
      </div>
      <div class="footer__nav">
        <router-link to="/">О компании</router-link>
        <span>|</span>
        <router-link to="/production">Производство</router-link>
        <span>|</span>
        <router-link to="/delivery">Доставка и оплата</router-link>
        <span>|</span>
        <router-link to="/news">Новости</router-link>
        <span>|</span>
        <router-link to="/">Магазин</router-link>
        <span>|</span>
        <router-link to="/contacts">Контакты</router-link>
      </div>
      <div class="footer__main">
        <div class="footer__info">
          <p class="footer__city">
            <img
              src="@/assets/images/footer/pin.png"
              alt="pin"
              width="16"
              height="16"
              loading="lazy"
            />
            г. Москва
          </p>
          <p class="footer__info-key">Офис:</p>
          <p class="footer__info-value">ул. Волоколамское шоссе 142</p>
          <p class="footer__info-key">Производство:</p>
          <p class="footer__info-value">Булатниковский проезд 10Б, стр.2</p>
        </div>
        <router-link class="footer__logo" to="/">
          <base-logo />
        </router-link>
        <div class="footer__connect">
          <a href="tel:+79254377300">+7 (925) 43-77-300</a>
          <p>понедельник - суббота <br />с 8.00 до 21.00</p>
        </div>
      </div>
      <div class="footer__coopir">
        <p>© DarkLoft - Стеклянные перегородки в стиле Лофт, 2022</p>
        <a
          href="https://www.instagram.com/darkloft.ru/"
          target="_blank"
          class="footer__inst"
        >
          <icon-inst
        /></a>
        <a class="footer__dev" href=""
          >Разработка и продвижение: <span>dinvex.ru</span></a
        >
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding-top: 86px;
  padding-bottom: 43px;
  background: rgb(var(--footer));
  color: #ffffff;
  position: relative;
  z-index: 1;
  &__advantages {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  &__advantages-list {
    display: flex;
    align-items: center;
    max-width: 1240px;
    width: 100%;
    justify-content: space-between;
    gap: 25px;
    margin-top: 74px;
    margin-bottom: 109px;
  }

  &__advantages-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      margin: 0;
      letter-spacing: 0.7px;
      text-transform: uppercase;
      text-align: center;
    }
  }

  &__advantages-img {
    width: 104px;
    height: 104px;
    background: rgb(var(--mainColor));
    box-shadow: 0 0 0 10px rgba(var(--mainColor), 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

    img {
      object-fit: contain;
    }
  }

  &__nav {
    padding: 30px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    a {
      font-size: 15px;
      line-height: 27px;
    }

    span {
      font-weight: 100;
      color: rgba(255, 255, 255, 0.2);
    }
  }

  &__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 54px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 30px;
  }

  &__city {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.7px;
    text-transform: uppercase;
    margin-bottom: 34px;
    img {
      object-fit: contain;
      margin-right: 10px;
    }
  }

  &__info-key {
    font-weight: 700;
  }

  &__logo {
    display: flex;
  }

  &__info-key,
  &__info-value {
    margin: 0 0 1px;
    font-size: 14px;
    line-height: 25px;
  }

  &__connect {
    a {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      text-align: right;
    }
    p {
      font-size: 14px;
      line-height: 23px;
      text-align: right;
      margin: 0;
    }
  }

  &__coopir {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
      font-size: 13px;
      line-height: 23px;
      width: calc(50% - 20px);
    }
  }

  &__dev {
    text-align: right;
    font-size: 13px;
    line-height: 23px;
    width: calc(50% - 20px);
    span {
      color: rgb(var(--mainColor));
    }
  }

  &__inst {
    display: flex;
  }
}
</style>
<script setup>
import BaseLogo from "@/components/base/BaseLogo.vue";
import IconInst from "@/components/icon/IconInst.vue";
</script>
