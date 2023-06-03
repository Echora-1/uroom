<template>
  <div>
    <loft-main-screen :content="data?.mainScreen" />
    <bread-crumbs :links="data?.breadCrumbs" />
    <main-content-wrap>
      <loft-main-block :content="data?.mainBlock" />
      <loft-options :content="data?.options" />
      <loft-faq :content="data?.faq" />
    </main-content-wrap>
  </div>
</template>
<script>
import LoftMainScreen from "@/components/lofts/LoftMainScreen.vue";
import BreadCrumbs from "@/components/common/BreadCrumbs.vue";
import MainContentWrap from "@/components/index/MainContentWrap.vue";
import LoftMainBlock from "@/components/lofts/LoftMainBlock.vue";
import LoftOptions from "@/components/lofts/LoftOptions.vue";
import LoftFaq from "@/components/lofts/LoftFaq.vue";
import { loftsData } from "@/assets/data/loftsData.js";
export default {
  components: {
    LoftMainScreen,
    BreadCrumbs,
    MainContentWrap,
    LoftMainBlock,
    LoftOptions,
    LoftFaq,
  },

  data() {
    return {
      data: null,
    };
  },

  computed: {
    url() {
      return this.$route.params.id;
    },
  },

  watch: {
    url() {
      this.data = loftsData[this.$route.params.id];
      window.document.title = this.data.title;
    },
  },

  created() {
    this.data = loftsData[this.$route.params.id];
    window.document.title = this.data.title;
  },
};
</script>
