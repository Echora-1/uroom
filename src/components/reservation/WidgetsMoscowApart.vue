<template>
  <div id="rc-bookings-widget-root"></div>
</template>
<script>
export default {
  mounted() {
    window.RC_BOOKINGS_WIDGET.init("bd13394a7af04379f3fb92b106fafa50", {
      apartment_ids: [
        47621, 52558, 52570, 47632, 47622, 47625, 47629, 52639, 52640, 52646,
        52647, 52648, 47623, 47626, 47627, 47628, 47630, 47631,
      ],
    });
  },
};
</script>
