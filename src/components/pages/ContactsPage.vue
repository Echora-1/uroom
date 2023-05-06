<template>
  <div>
    <contact-info
      @doc="show = true"
      :content="content?.info"
      class="container contact"
    />
    <maps-block class="container maps" :content="content?.maps" />
    <connect-block />
  </div>
  <base-modal :is-open="show" @close="show = false">
    <img
      @click="show = false"
      class="image-doc"
      src="@/assets/images/doc/doc@2x.png"
      width="519"
      height="745"
      alt="doc"
    />
  </base-modal>
</template>
<script>
import ContactInfo from "@/components/contacts/ContactInfo.vue";
import MapsBlock from "@/components/contacts/MapsBlock.vue";
import ConnectBlock from "@/components/index/ConnectBlock.vue";
import contacts from "@/assets/data/contacts.json";
import BaseModal from "@/components/base/BaseModal.vue";
export default {
  components: {
    BaseModal,
    ConnectBlock,
    MapsBlock,
    ContactInfo,
  },

  data() {
    return {
      content: {},
      show: false,
    };
  },

  created() {
    this.setContetn();
  },

  computed: {
    currentPath() {
      return this.$route.fullPath;
    },
  },

  watch: {
    currentPath() {
      this.setContetn();
    },
  },

  methods: {
    setContetn() {
      const path = this.$route.fullPath;
      const isMoscow = path.indexOf("moscow") !== -1;
      if (isMoscow) {
        this.content = contacts["moscow"];
      } else {
        this.content = contacts["volgograd"];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    left: -483px;
    bottom: -782px;
    width: 874px;
    height: 876px;
    z-index: -1;
    background: url("../../assets/images/decorMain.svg") no-repeat center;

    @media (max-width: 1000px) {
      left: -442px;
      bottom: -790px;
    }
  }
}

.maps {
  position: relative;
  z-index: 1;
}

.image-doc {
  object-fit: contain;
  max-width: 519px;
  max-height: 745px;
  width: 100%;
  height: calc(100vh - 80px);

  @media (max-width: 1000px) {
    height: calc(100vh - 40px);
    width: calc(100vw - 60px);
  }
}
</style>
