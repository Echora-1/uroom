<template>
  <div class="main-block">
    <rain-img class="rain" />
    <rain-img class="rain2" />
    <rain-img class="rain3" />
    <loft-text-content class="main-block__text" />
    <loft-keys class="main-block__keys" />
    <loft-text-content class="main-block__text2" :content="text2" />
    <loft-text-content-check />
  </div>
</template>
<script setup>
import LoftTextContent from "@/components/lofts/LoftTextContent.vue";
import LoftKeys from "@/components/lofts/LoftKeys.vue";
import LoftTextContentCheck from "@/components/lofts/LoftTextContentCheck.vue";
import RainImg from "@/components/common/RainImg.vue";

const text2 = [
  "Перегородки из стекла стали неотъемлемым атрибутом в повсеместном использовании в квартирах и домах. Возможность получения личного\n" +
    "пространства является неотъемлемым звеном для потребителя. Стеклянные конструкции станут идеальным вариантом в маленьком,\n" +
    "ограниченном пространстве. Помогут сформировать определенные виды помещений нужных размеров, сохранят общих декор, стилистику.",
  "Стеклянные перегородки позволяют создать определенную видимость уединения, превосходно решают вопрос с качественным\n" +
    "разграничением имеющегося пространства, без потери естественного освещения и ухудшения вентиляции площади.",
];
</script>

<style lang="scss" scoped>
.rain {
  left: -72px;
  top: 640px;
  width: 234px;
  height: 442px;
  z-index: -1;
}

.rain2 {
  right: -206px;
  top: 1175px;
  width: 322px;
  height: 608px;
  transform: rotate(9.26deg);
  z-index: -1;
}

.rain3 {
  left: -243px;
  bottom: -371px;
  width: 356px;
  height: 673px;
  transform: rotate(50.67deg);
  z-index: -1;
}

.main-block {
  padding: 70px 0 110px;
  background: linear-gradient(
    0deg,
    #212324 3.18%,
    rgba(27, 28, 29, 0.816544) 29.84%,
    rgba(17, 17, 17, 0.66) 50.91%,
    rgba(27, 27, 27, 0.879068) 73.98%,
    rgba(32, 32, 33, 0.9) 96.51%
  );
  backdrop-filter: blur(10px);
  position: relative;

  &__text {
    margin-bottom: 90px;
  }

  &__keys {
    margin-bottom: 30px;
  }

  &__text2 {
    margin-bottom: 45px;
  }
}
</style>
