<template>
  <div class="mainscreen-wrap">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.mainscreen-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  background: linear-gradient(
      0deg,
      #212324 3.18%,
      rgba(27, 28, 29, 0.816544) 29.84%,
      rgba(17, 17, 17, 0.66) 50.91%,
      rgba(27, 27, 27, 0.879068) 73.98%,
      #202021 96.51%
    ),
    url("@/assets/images/mainscreen/msBg.png") center/cover;

  @media (min-resolution: 2dppx) {
    background: linear-gradient(
        0deg,
        #212324 3.18%,
        rgba(27, 28, 29, 0.816544) 29.84%,
        rgba(17, 17, 17, 0.66) 50.91%,
        rgba(27, 27, 27, 0.879068) 73.98%,
        #202021 96.51%
      ),
      url("@/assets/images/mainscreen/msBg@2x.png") center/cover;
  }
}
</style>
