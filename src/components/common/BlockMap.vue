<template>
  <YandexMap
    class="block-map"
    :settings="settings"
    :controls="[]"
    :coordinates="coordinates"
    :zoom="13"
    :style="mapOptions"
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
      mapStyle: {
        // Указываем стиль отображения карты
        style: "dark#gray",
        // Задаем опции стиля
        options: {
          // Устанавливаем яркость карты
          brightness: -20,
          // Устанавливаем насыщенность карты
          saturation: -100,
        },
      },
    };
  },
};
</script>

<!--<template>
  <div ref="map-container" class="block-map"></div>
</template>

<script>
import IconMarker from "@/assets/images/marker.svg";

export default {
  props: {
    coordinates: {
      type: Array,
      default: () => [55.793804, 37.818741],
    },
  },

  data() {
    return {
      map: null,
    };
  },

  mounted() {
    const container = this.$refs["map-container"];
    const coord = [this.coordinates[0], this.coordinates[1]];
    window.ymaps.ready(init);
    function init() {
      const ymaps = window.ymaps;

      const map = new ymaps.Map(
        container,
        {
          center: coord,
          zoom: 13,
          controls: [],
        },
        {
          searchControlProvider: "yandex#search",
        }
      );

      /*      const customStyle = new window.ymaps.MapType("CustomStyle", [
        {
          stylers: [
            { saturation: -100 }, // Насыщенность цвета (-100 = черно-белый)
            { lightness: 20 }, // Яркость (0 = полная яркость)
          ],
        },
      ]);

      // Добавление созданного набора стилей в хранилище
      window.ymaps.mapType.storage.add("customStyle", customStyle);

      // Установка созданного набора стилей как активного
      map.setType("customStyle");*/

      const myPlacemark = new ymaps.Placemark(
        map.getCenter(),
        {
          hintContent: "Собственный значок метки",
          balloonContent: "Это красивая метка",
        },
        {
          iconLayout: "default#image",
          iconImageHref: IconMarker,
          iconImageSize: [58, 58],
          iconImageOffset: [-29, -29],
        }
      );

      map.geoObjects.add(myPlacemark);
    }
  },
};
</script>-->

<style lang="scss" scoped>
.block-map {
  width: 100%;
  height: 300px;
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
  backdrop-filter: grayscale(1) !important;
}
</style>
