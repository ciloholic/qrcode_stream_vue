<template>
  <section class="container">
    <qrcode-reader/>
  </section>
</template>

<script>
import QrcodeReader from '~/components/QrcodeReader'

export default {
  components: {
    QrcodeReader
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vmin;
  min-width: 100vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
