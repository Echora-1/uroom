<template>
  <YandexMap
    class="block-map"
    :settings="settings"
    :controls="[]"
    :coordinates="coordinates"
    :zoom="16"
  >
    <YandexMarker
      markerId="123"
      :coordinates="coordinates"
      :options="markerProps"
    />
  </YandexMap>
</template>

<script>
import { YandexMap, YandexMarker } from "vue-yandex-maps";
import IconMarker from "@/assets/images/marker.svg";
export default {
  components: { YandexMap, YandexMarker },
  props: {
    coordinates: {
      type: Array,
      default: () => [50, 32],
    },
  },

  data() {
    return {
      settings: {
        apiKey: "6f879fe0-1553-4ee5-b939-bab25e63875a", // Индивидуальный ключ API
        lang: "ru_RU", // Используемый язык
        coordorder: "latlong", // Порядок задания географических координат
        debug: false, // Режим отладки
        version: "2.1", // Версия Я.Карт
      },
      markerProps: {
        iconLayout: "default#image",
        iconImageHref: IconMarker,
        iconImageSize: [58, 58],
        iconImageOffset: [-29, -29],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.block-map {
  width: 100%;
  height: 300px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(27, 28, 29, 0) 0%,
      rgba(27, 27, 27, 0.39) 52.49%,
      #202021 100%
    );
  }
}
</style>

<style>
.ymaps-2-1-79-places-pane,
.ymaps-2-1-80-places-pane,
.ymaps-2-1-81-places-pane,
.ymaps-2-1-82-places-pane,
.ymaps-2-1-83-places-pane {
  z-index: 3000 !important;
  pointer-events: none;
}

.ymaps-2-1-79-events-pane,
.ymaps-2-1-80-events-pane,
.ymaps-2-1-81-events-pane,
.ymaps-2-1-82-events-pane,
.ymaps-2-1-83-events-pane {
  backdrop-filter: grayscale(5) !important;
}
</style>
