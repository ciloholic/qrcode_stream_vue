<template>
  <div>
    <self2-qrcode-reader :pause="isUserQr"/>
    <p>UserQr</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Self2QrcodeReader from '~/components/QrcodeReader'

export default {
  components: {
    Self2QrcodeReader
  },
  validate({ params }) {
    return /^T\d+$/.test(params.userQr)
  },
  computed: {
    ...mapGetters(['getUserQr', 'isUserQr', 'searchUserQr'])
  },
  methods: {
    ...mapActions(['resetQr'])
  }
}
</script>

<style lang="scss" scoped>
</style>
