<template>
  <div>
    <contact-info :content="content?.info" class="container contact" />
    <maps-block class="container maps" :content="content?.maps" />
    <connect-block />
  </div>
</template>
<script>
import ContactInfo from "@/components/contacts/ContactInfo.vue";
import MapsBlock from "@/components/contacts/MapsBlock.vue";
import ConnectBlock from "@/components/index/ConnectBlock.vue";
import contacts from "@/assets/data/contacts.json";
export default {
  components: {
    ConnectBlock,
    MapsBlock,
    ContactInfo,
  },

  data() {
    return {
      content: {},
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
</style>
