<template>
  <footer class="footer">
    <div class="container footer__wrap">
      <div class="footer__item">
        <img
          src="../../assets/images/white-logo.png"
          width="153"
          height="63"
          alt="logo"
          class="footer__logo"
        />
        <p class="footer__text">
          NextGen Dental & Orthodontics is your Wheeling dentist. We are
          committed to providing the best dental services for patients
        </p>
        <div class="footer__social">
          <a href=""><IconInst /></a>
          <a href=""><IconWhat /></a>
          <a href=""><IconFace /></a>
        </div>
      </div>
      <div class="footer__item">
        <p class="footer__title">We are welcoming you</p>
        <p class="footer__subtitle">Want to visit our clinic?</p>
        <p class="footer__text">Mon - Fr &nbsp;9 ам - 5 рм</p>
        <p class="footer__text">Saturday&nbsp;9 ам - 15 рм</p>
        <p class="footer__text">Sunday - closed</p>
      </div>
      <div class="footer__item">
        <p class="footer__title">Important link</p>
        <div class="footer__links">
          <div class="footer__links-list">
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Privacy policy</a>
          </div>
        </div>
      </div>
      <div class="footer__item">
        <p class="footer__title">Say hello to us</p>
        <p class="footer__email">
          <a href="tel:8479472651">
            <span> (847) 947-2651 </span>
          </a>
        </p>
        <p class="footer__text">Address:</p>
        <p class="footer__text">
          3363 NE 163rd St <br />
          Unit 807<br />
          North Miami Beach, FL 33160
        </p>
      </div>
    </div>
    <div class="copir">© 2023, All Rights Reserved</div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  min-height: 380px;
  background: #0c7ac2;
  padding: 60px 0 0;

  @media (max-width: 1000px) {
    padding: 45px 0 0;
  }

  &__wrap {
    display: flex;
    color: #ffffff;
    margin-bottom: 60px;

    @media (max-width: 1000px) {
      flex-direction: column;
      text-align: center;
      margin-bottom: 45px;
    }
  }

  &__item {
    @media (min-width: 1001px) {
      width: calc(25%);

      &:not(:last-child) {
        border-right: 1px solid rgba(255, 255, 255, 0.3);
      }

      &:first-child {
        padding-right: 60px;
      }

      &:nth-child(2),
      &:nth-child(3) {
        padding-right: 30px;
        padding-left: 30px;
      }

      &:last-child {
        padding-left: 60px;
      }
    }

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      &:nth-child(2) {
        margin-bottom: 32px;
        .footer__text {
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 1px;
        }
      }

      &:nth-child(3) {
        display: none;
      }

      &:nth-child(4) {
        .footer__title {
          font-size: 20px;
          line-height: 20px;
        }
        .footer__text {
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 1px;
        }
      }
    }
  }

  &__logo {
    margin-bottom: 27px;

    @media (max-width: 1000px) {
      max-width: 129px;
      max-height: 53px;
      object-fit: contain;
    }
  }

  &__text {
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    max-width: 280px;

    @media (max-width: 1000px) {
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      letter-spacing: 0.04em;
      margin-bottom: 28px;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    margin: 0 0 32px;

    @media (max-width: 1000px) {
      font-size: 15px;
      line-height: 20px;
      margin: 0 0 10px;
    }
  }

  &__subtitle {
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
    margin: 0 0 40px;
    max-width: 222px;

    @media (max-width: 1000px) {
      font-size: 24px;
      line-height: 29px;
      margin: 0 0 12px;
      max-width: 200px;
    }
  }

  &__links {
    display: flex;
    margin-top: 40px;
  }

  &__links-list {
    display: flex;
    flex-direction: column;

    &:first-child {
      margin-right: 20px;
    }

    a {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 16px;
      text-decoration-line: underline;
    }
  }

  &__email {
    margin: 40px 0 32px;
    @media (max-width: 1000px) {
      margin: 8px 0 25px;
    }
  }

  &__social {
    display: none;

    @media (max-width: 1000px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;

      a:not(:last-child) {
        margin-right: 24px;
      }
    }
  }
}
.copir {
  font-size: 12px;
  line-height: 24px;
  /* identical to box height, or 200% */

  text-align: center;

  /* White/Primary */
  min-height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  background: #282828;
}
</style>
<script setup>
import IconInst from "@/components/icon/IconInst.vue";
import IconWhat from "@/components/icon/IconWhat.vue";
import IconFace from "@/components/icon/IconFace.vue";
</script>
