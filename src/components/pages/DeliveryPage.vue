<template>
  <main-content-wrap class="wrap-page">
    <bread-crumbs
      :start="!isMobile()"
      :links="[{ name: 'Доставка и оплата', url: '/delivery' }]"
    />
    <delivery-block />
  </main-content-wrap>
</template>
<script>
import MainContentWrap from "@/components/index/MainContentWrap.vue";
import BreadCrumbs from "@/components/common/BreadCrumbs.vue";
import DeliveryBlock from "@/components/delivery/DeliveryBlock.vue";
import { isMobile } from "mobile-device-detect";

export default {
  methods: {
    isMobile() {
      return isMobile;
    },
  },
  components: { MainContentWrap, BreadCrumbs, DeliveryBlock },
};
</script>
