<template>
  <section class="container doctors">
    <div class="doctors__header">
      <h2 class="base-title">Meet Our <span>Doctors</span></h2>
    </div>
    <div class="doctors__list">
      <doctor-card
        class="doctors__item"
        v-for="(item, index) in list"
        :key="index"
        :content="item"
        @modal="() => openModal(index)"
      />
    </div>
    <base-modal :is-open="showModal" @close="showModal = false">
      <doctors-modal @close="showModal = false" />
    </base-modal>
    <base-modal :is-open="showModal1" @close="showModal1 = false">
      <doctors-modal1 @close="showModal1 = false" />
    </base-modal>
  </section>
</template>

<script>
import DoctorCard from "@/components/index/DoctorCard.vue";
import BaseModal from "@/components/base/BaseModal.vue";
import DoctorsModal from "@/components/index/DoctorsModal.vue";
import DoctorsModal1 from "@/components/index/DoctorsModal1.vue";

export default {
  components: { DoctorsModal1, DoctorsModal, BaseModal, DoctorCard },

  data() {
    return {
      showModal: false,
      showModal1: false,
      list: [
        {
          name: "Dr. Kateryna Yuryk",
          position: "General Orthodontist",
          text: "Kateryna Yuryk, CRDH is a 2007 graduate of the dental hygiene program at the University of Illinois Chicago College of Dentistry. Every year Kateryna takes continued education classes to implement the newest technologies in patient care.",
          img: "d1@2x.png",
        },
        {
          name: "Dк. Gary Beyer",
          position: "General Dentist / Owner",
          text: "Dr. Gary Beyer is the owner of NextGen Dental & Orthodontics and has been providing excellent dental care to his patients for over 24 years. Dr. Beyer practices general dentistry and specializes in full mouth reconstruction and cosmetic dentistry.",
          img: "d2@2x.png",
          reverse: true,
        },
      ],
    };
  },

  methods: {
    openModal(key) {
      if (key === 0) {
        this.showModal = true;
      }
      if (key === 1) {
        this.showModal1 = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.base-title {
  @media (min-width: 1001px) {
    line-height: 74px;
  }
}

.doctors {
  &__header {
    text-align: end;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(82, 82, 91, 0.3);

    @media (max-width: 1000px) {
      border-bottom: none;
      text-align: center;
    }
  }

  &__list {
    padding-top: 78px;

    @media (max-width: 1000px) {
      padding-top: 36px;
    }
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
}
</style>
