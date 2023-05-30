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
          <button
            :class="[
              'pec__toggle-item',
              { 'pec__toggle-item--active': index === activeToggle },
            ]"
            v-for="(t, index) in toggles"
            :key="index"
            @click="activeToggle = index"
          >
            {{ t }}
          </button>
        </div>
        <div class="pec__content-list">
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
                {{ i }}
              </p>
            </div>
            <router-link class="pec__content-link" to="/"
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

const toggles = [
  "Перегородки из закаленного стекла",
  "Перегородки со стеклопакетом",
  "Перегородки из оргстекла",
  "Перегородки из триплекса",
  "Перегородки из тонированного стекла",
  "Перегородки из стекла с рисунком",
];

const togglesContent = [
  "Стеклянная перегородка в комнату из закаленного стекла толщиной\n" +
    "                1-1,2 см благодаря термической закалке является прочной и\n" +
    "                безопасной при эксплуатации.",
  "Стеклянные прочные перегородки со стеклопакетами обладают высоким уровнем звукоизоляции, теплосбережения и ударостойкости - купите у нас по доступной цене.",
  "Акриловые стеклянные полотна толщиной до 2,5 см с декоративными элементами украшают перегородки в галереях, музеях, арт-центрах и выставочных холлах.",
  "Предлагаем заказать стеклянные перегородки противоударного типа. Многослойное ламинированное стекло толщиной до 4 см выдерживает нагрузку до 300 кг/м².",
  "Популярный вид цветного прозрачного флоат-стекла для наполнения конструкций для зонирования. Купите недорого стеклянные тонированные в массе перегородки.",
  "Предлагаем купить по приемлемой стоимости перегородки с художественным оформлением стеклянной поверхности. Выполним дизайнерский проект за 1-2 дня.",
];

const activeToggle = ref(0);
</script>

<style lang="scss" scoped>
.pec {
  background: var(--block-bg);
  backdrop-filter: blur(10px);
  padding: 112px 0 100px;

  &__header {
    display: flex;
    margin-bottom: 20px;

    p {
      margin: 10px 0 0;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }

    h2 {
      display: inline-block;
      margin-left: 142px;
    }
  }

  &__main {
    display: flex;
  }

  &__toggle-list {
    max-width: 383px;
    width: 100%;
    margin-right: 60px;
  }

  &__toggle-item {
    background: transparent;
    color: rgb(var(--textColor));
    padding: 21px 0;
    border-bottom: 1px solid rgb(var(--textColor));
    width: 100%;
    text-align: start;
    display: block;

    &:last-child {
      border: none;
    }

    &--active {
      border-color: rgb(var(--mainColor));
    }
  }

  &__content-item {
    display: none;

    &--active {
      display: block;
    }
  }
  &__content-text {
    margin-bottom: 34px;
    display: flex;
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

    svg {
      margin-left: 10px;
    }
  }
}
</style>
