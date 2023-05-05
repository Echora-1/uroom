<template>
  <div>
    <div class="btns">
      <base-button @click="activeWidgets = 3" :transparent="activeWidgets !== 3"
        >Первомайская Apart</base-button
      >
      <base-button @click="activeWidgets = 2" :transparent="activeWidgets !== 2"
        >Первомайская Econom</base-button
      >
      <base-button @click="activeWidgets = 1" :transparent="activeWidgets !== 1"
        >пр-т Севастопальский</base-button
      >
    </div>
    <widgets-moscow-apart v-if="activeWidgets === 3" />
    <widgets-moscow-econom v-if="activeWidgets === 2" />
    <widgets-moscow-sevas v-if="activeWidgets === 1" />
  </div>
</template>
<script>
import BaseButton from "@/components/base/BaseButton.vue";
import WidgetsMoscowSevas from "@/components/reservation/WidgetsMoscowSevas.vue";
import WidgetsMoscowApart from "@/components/reservation/WidgetsMoscowApart.vue";
import WidgetsMoscowEconom from "@/components/reservation/WidgetsMoscowEconom.vue";

export default {
  components: {
    WidgetsMoscowEconom,
    WidgetsMoscowApart,
    WidgetsMoscowSevas,
    BaseButton,
  },

  data() {
    return {
      activeWidgets: 3,
    };
  },
};
</script>

<style lang="scss" scoped>
.btns {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 30px 0;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
}
</style>
