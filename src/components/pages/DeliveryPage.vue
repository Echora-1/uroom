<template>
  <main-content-wrap class="wrap-page">
    <bread-crumbs
      start
      :links="[{ name: 'Доставка и оплата', url: '/delivery' }]"
    />
    <delivery-block />
  </main-content-wrap>
</template>
<script setup>
import MainContentWrap from "@/components/index/MainContentWrap.vue";
import BreadCrumbs from "@/components/common/BreadCrumbs.vue";
import DeliveryBlock from "@/components/delivery/DeliveryBlock.vue";
</script>
