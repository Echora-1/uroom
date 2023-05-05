<template>
  <div id="rc-bookings-widget-root"></div>
</template>
<script>
export default {
  mounted() {
    window.RC_BOOKINGS_WIDGET.init("bd13394a7af04379f3fb92b106fafa50", {
      apartment_ids: [28570, 24411, 28571, 28573, 28575],
    });
  },
};
</script>
