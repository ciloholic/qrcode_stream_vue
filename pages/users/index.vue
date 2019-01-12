<template>
  <div>
    <self-qrcode-reader :pause="isUserQr"/>
    <p v-if="isUserQr">{{ getUserQr }}</p>
    <p v-if="isUserQr">{{ searchUserQr }}</p>
    <el-button @click="reload()">再撮影</el-button>
    <el-button 
      :disabled="!(isUserQr && searchUserQr)" 
      @click="$router.push({ name: 'users-userQr', params: { userQr: getUserQr }})">登録</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SelfQrcodeReader from '~/components/QrcodeReader'

export default {
  components: {
    SelfQrcodeReader
  },
  computed: {
    ...mapGetters(['getUserQr', 'isUserQr', 'searchUserQr'])
  },
  created() {
    this.fetchRecords()
  },
  destroyed() {
    console.log('destroyed')
  },
  methods: {
    ...mapActions(['fetchRecords']),
    reload() {
      location.reload(true)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
