<template>
  <YandexMap
    class="block-map"
    :settings="settings"
    :controls="[]"
    :coordinates="coordinates"
    :zoom="13"
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
      default: () => [32, 50],
    },
  },

  data() {
    return {
      settings: {
        apiKey: "3ee54b3d-347e-4701-ae97-c309d0b8a0d6", // Индивидуальный ключ API
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
      mapOptions: {
        mapType: "yandex#satellite",
        style: "dark",
        styles: [
          {
            stylers: [{ hue: "#000000" }, { saturation: -100 }],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.block-map {
  width: 100%;
  height: 300px;
}
</style>
<style>
.yandex-container {
  backdrop-filter: blur(5px);
}
</style>
