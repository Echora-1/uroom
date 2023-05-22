<template>
  <div class="container keys">
    <div class="keys__header">
      <h2 class="base-title">{{ content?.title }}</h2>
      <p class="keys__subtitle">{{ content?.subtitle }}</p>
    </div>
    <div class="keys__list">
      <loft-keys-card
        v-for="(item, index) in content?.keys"
        :content="item"
        :key="index"
        class="keys__item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-title {
  max-width: 1200px;
  margin-bottom: 28px;
}

.keys {
  &__header {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__subtitle {
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    margin: 0 0 79px;
    max-width: 820px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 80px;
    justify-content: space-between;
  }

  &__item {
    width: calc((100% / 3) - (160px / 3));
  }
}
</style>

<script>
import LoftKeysCard from "@/components/lofts/LoftKeysCard.vue";

export default {
  components: { LoftKeysCard },
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          title:
            "     Стеклянные лофт перегородки на заказ: варианты стекломатериалов для\n" +
            "        полотен",
          subtitle:
            "Стеклянные перегородки лофт изготавливаются на заказ, что позволяет\n" +
            "удачно вписать их в готовый интерьер квартиры или частного дома",
          keys: [
            {
              img: "1/keys/keys1",
              name: "Лофт перегородки на кухню",
              text: "Компания Dark Loft предлагает изготовить и установить лофт перегородки между кухней и гостиной, такие перегородки впишутся в любой интерьер",
              price: "XXX",
            },
            {
              img: "1/keys/keys2",
              name: "Лофт перегородки в гостиную",
              text: "При помощи лофт перегородок в гостиной от компании Dark Loft, вы сможете увеличить пространство комнаты, а также, они подходят к любому стилю интерьера.",
              price: "XXX",
            },
            {
              img: "1/keys/keys3",
              name: "Лофт перегородки в гардеробную",
              text: "Компания Dark Loft предлагает оформить гардеробную в стиле лофт, у нас большой выбор перегородок: раздвижные, распашные или складные.",
              price: "XXX",
            },
            {
              img: "1/keys/keys4",
              name: "Лофт перегородки в спальню",
              text: "Компания Dark Loft предлагает купить перегородки лофт в спальню, они могут не только создать четкие границы, но и растворить их в жилом пространстве.",
              price: "XXX",
            },
            {
              img: "1/keys/keys5",
              name: "Душевые лофт перегородки\n",
              text: "Перегородки для душа - лофт – это стиль, в котором и в ванной комнате стоит отказаться от лишних монументальных конструкций.",
              price: "XXX",
            },
            {
              img: "1/keys/keys6",
              name: "Лофт перегородки для частного дома",
              text: "Современное зонирование внутреннего и внешнего пространства в частных домах, с помощью стеклянных лофт перегородок",
              price: "XXX",
            },
          ],
        };
      },
    },
  },
};
</script>
