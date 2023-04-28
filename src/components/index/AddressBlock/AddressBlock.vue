<template>
  <section class="address container">
    <h2 class="base-title">Наши адреса</h2>
    <address-card
      v-for="(item, index) in address"
      :key="index"
      class="address__item"
      :content="item"
    />
  </section>
</template>

<script>
import AddressCard from "@/components/index/AddressBlock/AddressCard.vue";

export default {
  components: { AddressCard },
  data() {
    return {
      address: [
        {
          title: "URoom ApartHotel по адресу",
          address: "ул. Первомайская д. 117",
          list: [
            "Удобное месторасположение",
            "Парковка для авто",
            "Вблизи МКАД, знаковые достопримечательности",
            "Зеленый район",
            "  Стиральная машина, утюг, камера хранения, аппараты по продаже кофе снеков",
            "до 40 человек",
          ],
          map: "address1",
          reverse: false,
        },
        {
          title: "URoom ApartHotel по адресу",
          address: "Севастопольский д.3 корп 2",
          list: [
            "Удобное месторасположение",
            "Парковка для авто",
            "Рядом ТРЦ, продуктовые магазины",
            "Тихое место",
            "  Стиральная машина, утюг, кофемашина, питьевая вода.",
            "до 20 человек",
          ],
          map: "address2",
          reverse: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.base-title {
  margin-bottom: 30px;
}

.address {
  padding-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__item {
    margin-bottom: 100px;
  }
}
</style>
