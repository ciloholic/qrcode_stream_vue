<template>
  <div>
    <qrcode-reader set-column-name="setAvailableQr"/>
    <p v-if="isAvailableQr">{{ getAvailableQr }}</p>
    <p v-if="isAvailableQr">{{ searchUserQr }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import QrcodeReader from '~/components/QrcodeReader'

export default {
  components: {
    QrcodeReader
  },
  validate({ params }) {
    return /^T\d+$/.test(params.userQr)
  },
  computed: {
    ...mapGetters(['getAvailableQr', 'isAvailableQr', 'searchUserQr'])
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
