<template>
  <div>
    <qrcode-reader/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import QrcodeReader from '~/components/QrcodeReader'

export default {
  components: {
    QrcodeReader
  },
  computed: {
    ...mapGetters(['getRecords'])
  },
  created() {
    // this.$store.getters.getRecords
    this.fetchRecords()
  },
  methods: {
    ...mapActions(['fetchRecords'])
  }
}
</script>

<style lang="scss" scoped>
</style>
