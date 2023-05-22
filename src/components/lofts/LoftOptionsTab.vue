<template>
  <div class="options-tab">
    <div class="options-tab__main">
      <img
        :src="`${require('@/assets/images/lofts/' +
          content[activeTab].img +
          '.jpg')}`"
        alt="options"
        width="471"
        height="352"
        class="options-tab__img"
      />
      <div class="options-tab__toggles">
        <div
          v-for="(item, index) in content"
          :key="index"
          :class="[
            'options-tab__toggle-item',
            { 'options-tab__toggle-item--active': index === activeTab },
          ]"
        >
          <button @click="activeTab = index">
            {{ item?.name }}
          </button>
          <p v-show="index === activeTab">{{ item?.text }}</p>
        </div>
      </div>
    </div>
    <p class="options-tab__text">
      Чтобы придать изделию прочность, надежность, долговечность, применяется
      специальное закаленное или триплекс-стекло.
    </p>
    <p class="options-tab__text2">
      При разрушении - стеклянная тонкая перегородка разлетается на кусочки с
      округлыми краями, что сводит к минимуму риск получения травмы. При
      производстве изделий используем сертифицированные материалы. Замеры перед
      зонированием, монтажом стеклянной стандартной перегородки проводим
      бесплатно, на выезд берем с собой образцы материалов, демонстрируем
      сертификаты. Окрашиваем профили в любые цвета:от белого до черного в
      собственной покрасочной камере. После окончания монтажа вывезем мусор из
      комнаты бесплатно.
    </p>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Array,
      default: () => [
        {
          name: "Стационарные стеклянные перегородки в квартиру или дом",
          text: "Установленные стеклянные перегородки помогают зрительно сохранить общее пространство помещения и одновременно разделить площадь на функциональные зоны. Ещё одна особенность – экономия на освещении.",
          img: "1/options/options1",
        },
        {
          name: "Стеклянные распашные перегородки",
          text: "Распашные стеклянные перегородки используются в квартирах со свободной планировкой, частных домах для зонирования пространства и рационального распределения полезной площади. За счёт прозрачности материала конструкции обеспечивают визуальный простор и не утяжеляют интерьер.",
          img: "1/options/options2",
        },
        {
          name: "Стеклянные раздвижные перегородки",
          text: "Раздвижные стеклянные перегородки и двери – это современный способ зонирования межкомнатного и интерьерного пространства с помощью возведения вертикальных перекрытий из травмобезопасного и прочного стекла.",
          img: "1/options/options3",
        },
        {
          name: "Складные стеклянные перегородки",
          text: "Складные стеклянные перегородки гораздо тоньше чем гипсокартонные или деревянные, они пропускают свет, делят комнату на зоны, не загромождают пространство и занимают мало места в сложенном состоянии.",
          img: "1/options/options4",
        },
      ],
    },
  },

  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.options-tab {
  &__main {
    display: flex;
    margin-bottom: 82px;
    gap: 100px;
  }

  &__img {
    object-fit: contain;
    max-width: 471px;
    max-height: 352px;
    width: 100%;
    height: 100%;
  }

  &__toggle-item {
    &:first-child {
      button {
        padding-top: 0;
      }
    }

    button {
      font-weight: 600;
      font-size: 17px;
      line-height: 18px;
      text-transform: uppercase;
      background: transparent;
      padding: 20px 0;
      text-align: start;
      color: inherit;
      border-bottom: 1px solid #e1e1e1;
      position: relative;
      min-width: 430px;

      &::after {
        position: absolute;
        content: "";
        height: 3px;
        width: 0;
        background: rgb(var(--mainColor));
        bottom: -1px;
        left: 0;
        transition: all 0.3s;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }

    &--active {
      button {
        &::after {
          width: 50px;
        }

        &:hover {
          &::after {
            width: 50px;
          }
        }
      }
    }

    p {
      margin: 16px 0 13px;
      font-size: 17px;
      line-height: 28px;
    }
  }

  &__text {
    font-weight: 600;
    font-size: 16px;
    line-height: 29px;
    margin: 0 0 18px;
  }

  &__text2 {
    font-size: 16px;
    line-height: 27px;
    margin: 0;
  }
}
</style>
