<template>
  <GMapMap
    :center="center"
    :zoom="14"
    class="map-wrapper"
    style="width: 100%; height: 100%"
    :options="{
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: false,
    }"
  >
    <GMapCluster>
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>
<script>
export default {
  data() {
    return {
      center: { lat: 25.92723, lng: -80.141643 },
      markers: [
        {
          position: { lat: 25.92723, lng: -80.141643 },
        }, // Along list of clusters
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.map-wrapper {
  width: 100%;
  height: 517px !important;

  @media (max-width: 767px) {
    height: 317px !important;
  }
}
</style>
