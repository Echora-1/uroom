<template>
  <div class="text-content container">
    <p v-for="(item, index) in content" :key="index">
      <icon-check /> {{ item }}
    </p>
  </div>
</template>

<script>
import IconCheck from "@/components/icon/IconCheck.vue";

export default {
  components: { IconCheck },
  props: {
    content: {
      type: Array,
      default: () => [
        " Разграничение помещения для создания индивидуального пространства, Воздушные стены в квартире не затемняют рабочие зоны, поглощают мешающий шум и создают комфортные условия.",
        "Дизайн. Перегородки со стеклом нередко декорируются согласно замыслам оформителя. На поверхность наносится фотопечать, пескоструйные рисунки, используются матовые и цветные полотна. Прозрачные конструкции помогают создать иллюзию простора даже на небольшой площади, сделать помещение светлым и современным.",
      ],
    },
  },
};
</script>

<style lang="scss" scoped>
.text-content {
  p {
    font-size: 17px;
    line-height: 27px;
    margin: 0 0 25px;
    display: flex;

    @media (max-width: 1000px) {
      font-size: 12px;
      line-height: 20px;
    }

    svg {
      display: block;
      min-width: 24px;
      min-height: 24px;
      margin-top: 3px;
      margin-right: 16px;

      @media (max-width: 1000px) {
        min-width: 17px;
        min-height: 17px;
        margin-right: 10px;
        margin-top: 0;
      }
    }
  }
}
</style>
