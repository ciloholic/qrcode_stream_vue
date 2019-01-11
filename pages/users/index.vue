<template>
  <div>
    <qrcode-reader/>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import QrcodeReader from '~/components/QrcodeReader'

export default {
  components: {
    QrcodeReader
  },
  async asyncData({}) {
    let { data } = await axios.get('/')
    return { data }
  }
}
</script>

<style lang="scss" scoped>
</style>
