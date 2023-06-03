<template>
  <div class="main-block">
    <rain-img class="rain" />
    <rain-img class="rain2" />
    <rain-img class="rain3" />
    <loft-text-content
      class="main-block__text"
      :content="content.textContent"
    />
    <loft-keys class="main-block__keys" :content="content.keys" />
    <loft-text-content class="main-block__text2" :content="content.text" />
    <loft-text-content-check
      class="main-block__text3"
      :content="content.textContentCheck"
    />
  </div>
</template>
<script>
import LoftTextContent from "@/components/lofts/LoftTextContent.vue";
import LoftKeys from "@/components/lofts/LoftKeys.vue";
import LoftTextContentCheck from "@/components/lofts/LoftTextContentCheck.vue";
import RainImg from "@/components/common/RainImg.vue";

export default {
  components: { LoftTextContent, LoftKeys, LoftTextContentCheck, RainImg },

  props: {
    content: {
      type: Object,
      default: () => {
        return {
          text: [
            "Перегородки из стекла стали неотъемлемым атрибутом в повсеместном использовании в квартирах и домах. Возможность получения личного\n" +
              "пространства является неотъемлемым звеном для потребителя. Стеклянные конструкции станут идеальным вариантом в маленьком,\n" +
              "ограниченном пространстве. Помогут сформировать определенные виды помещений нужных размеров, сохранят общих декор, стилистику.",
            "Стеклянные перегородки позволяют создать определенную видимость уединения, превосходно решают вопрос с качественным\n" +
              "разграничением имеющегося пространства, без потери естественного освещения и ухудшения вентиляции площади.",
          ],
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.rain {
  left: -72px;
  top: 640px;
  width: 234px;
  height: 442px;
  z-index: -1;

  @media (max-width: 1000px) {
    width: 118px;
    height: 223px;
    left: unset;
    right: -52px;
    top: 218px;
  }
}

.rain2 {
  right: -206px;
  top: 1175px;
  width: 322px;
  height: 608px;
  transform: rotate(9.26deg);
  z-index: -1;

  @media (max-width: 1000px) {
    width: 118px;
    height: 223px;
    right: unset;
    transform: rotate(-41.54deg);
    left: -86px;
    top: 1126px;
  }
}

.rain3 {
  left: -243px;
  bottom: -371px;
  width: 356px;
  height: 673px;
  transform: rotate(50.67deg);
  z-index: -1;
  @media (max-width: 1000px) {
    width: 118px;
    height: 223px;
    left: -80px;
    bottom: 637px;
    transform: rotate(13.34deg);
  }
}

.main-block {
  padding: 70px 0 110px;
  background: var(--block-gradient);
  backdrop-filter: blur(10px);
  position: relative;

  @media (max-width: 1000px) {
    padding: 45px 0;
  }

  &__text {
    margin-bottom: 90px;

    @media (max-width: 1000px) {
      text-align: center;
      margin-bottom: 50px;
    }
  }

  &__keys {
    margin-bottom: 30px;

    @media (max-width: 1000px) {
      margin-bottom: 0;
    }
  }

  &__text2 {
    margin-bottom: 45px;

    @media (max-width: 1000px) {
      max-width: 323px;
    }
  }

  &__text3 {
    @media (max-width: 1000px) {
      max-width: 323px;
    }
  }
}
</style>
