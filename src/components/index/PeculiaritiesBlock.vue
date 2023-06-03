<template>
  <div class="pec">
    <div class="container pec__wrap">
      <div class="pec__header">
        <p>
          Особенности разных типов<br />
          перегородок из стекла
        </p>
        <h2 class="base-title">Особенности</h2>
      </div>
      <div class="pec__main">
        <div class="pec__toggle-list">
          <div
            v-for="(t, index) in toggles"
            :key="index"
            :class="[
              'pec__toggle-item',
              { 'pec__toggle-item--active': index === activeToggle },
            ]"
          >
            <button @click="activeToggle = index">
              {{ t }}
            </button>
            <div v-if="activeToggle === index">
              <div :class="['pec__content-item']">
                <span>Особенности</span>
                <div class="pec__content-text">
                  <icon-check />
                  <p>
                    {{ togglesContent[index].text }}
                  </p>
                </div>
                <router-link
                  class="pec__content-link"
                  :to="togglesContent[index].url"
                  >Подробнее <icon-arrow
                /></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="pec__content-list" v-if="!isMobile">
          <div
            :class="[
              'pec__content-item',
              { 'pec__content-item--active': index === activeToggle },
            ]"
            v-for="(i, index) in togglesContent"
            :key="index"
          >
            <div class="pec__content-text">
              <icon-check />
              <p>
                {{ i.text }}
              </p>
            </div>
            <router-link class="pec__content-link" :to="i.url"
              >Подробнее <icon-arrow
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import IconCheck from "@/components/icon/IconCheck.vue";
import IconArrow from "@/components/icon/IconArrow.vue";
import { isMobile } from "mobile-device-detect";

const toggles = [
  "Перегородки из закаленного стекла",
  "Перегородки со стеклопакетом",
  "Перегородки из оргстекла",
  "Перегородки из триплекса",
  "Перегородки из тонированного стекла",
  "Перегородки из стекла с рисунком",
];

const togglesContent = [
  {
    text:
      "Стеклянная перегородка в комнату из закаленного стекла толщиной\n" +
      "                1-1,2 см благодаря термической закалке является прочной и\n" +
      "                безопасной при эксплуатации.",
    url: "/lofts/1",
  },
  {
    url: "/lofts/1",
    text: "Стеклянные прочные перегородки со стеклопакетами обладают высоким уровнем звукоизоляции, теплосбережения и ударостойкости - купите у нас по доступной цене.",
  },
  {
    url: "/lofts/1",
    text: "Акриловые стеклянные полотна толщиной до 2,5 см с декоративными элементами украшают перегородки в галереях, музеях, арт-центрах и выставочных холлах.",
  },
  {
    url: "/lofts/1",
    text: "Популярный вид цветного прозрачного флоат-стекла для наполнения конструкций для зонирования. Купите недорого стеклянные тонированные в массе перегородки.",
  },
  {
    url: "/lofts/1",
    text: "Предлагаем купить по приемлемой стоимости перегородки с художественным оформлением стеклянной поверхности. Выполним дизайнерский проект за 1-2 дня.",
  },
];

const activeToggle = ref(0);
</script>

<style lang="scss" scoped>
.pec {
  background: var(--block-bg);
  backdrop-filter: blur(10px);
  padding: 112px 0 100px;

  @media (max-width: 1000px) {
    padding: 60px 0;
    background: rgba(32, 32, 33, 0.4);
  }

  &__header {
    display: flex;
    margin-bottom: 20px;

    @media (max-width: 1000px) {
      flex-direction: column;
    }

    p {
      margin: 10px 0 0;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      letter-spacing: 0.8px;

      @media (max-width: 1000px) {
        margin: 0;
      }
    }

    h2 {
      display: inline-block;
      margin-left: 142px;

      @media (max-width: 1000px) {
        display: none;
      }
    }
  }

  &__main {
    display: flex;

    @media (max-width: 1000px) {
      flex-direction: column-reverse;
    }
  }

  &__toggle-list {
    max-width: 383px;
    width: 100%;
    margin-right: 60px;

    @media (max-width: 1000px) {
      max-width: 100%;
      position: relative;
      right: -8px;
    }
  }

  &__toggle-item {
    button {
      background: transparent;
      color: rgb(var(--textColor));
      padding: 21px 0;
      border-bottom: 1px solid rgb(var(--textColor));
      width: 100%;
      text-align: start;
      display: block;

      @media (max-width: 1000px) {
        font-size: 14px;
        line-height: 27px;
        border-color: rgb(var(--mainColor));
      }
    }

    &:last-child {
      button {
        border: none;
      }
    }

    &--active {
      button {
        border-color: rgb(var(--mainColor));

        @media (max-width: 1000px) {
          color: rgb(var(--mainColor));
          border-color: rgb(var(--textColor));
        }
      }
    }
  }

  &__content-item {
    display: none;

    @media (max-width: 1000px) {
      display: block;

      span {
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.9px;
        display: inline-block;
        margin: 30px 0;
      }
    }

    &--active {
      display: block;
    }
  }
  &__content-text {
    margin-bottom: 34px;
    display: flex;

    @media (max-width: 1000px) {
      margin-bottom: 30px;
    }

    svg {
      margin-top: 4px;
      margin-right: 16px;
      display: block;
    }
    p {
      margin: 0;
      font-size: 17px;
      line-height: 31px;
      max-width: 780px;

      @media (max-width: 1000px) {
        font-size: 12px;
        line-height: 20px;
        max-width: 267px;
      }
    }
  }

  &__content-link {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.7px;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    @media (max-width: 1000px) {
      font-size: 12px;
      line-height: 20px;
    }

    svg {
      margin-left: 10px;
    }
  }
}
</style>
