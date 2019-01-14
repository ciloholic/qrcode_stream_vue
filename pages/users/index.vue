<template>
  <div>
    <qrcode-reader set-column-name="setUserQr"/>
    <el-button @click="reload()">再撮影</el-button>
    <el-button
      :disabled="!(isUserQr && searchUserQr)" 
      @click="$router.push({ name: 'users-userQr', params: { userQr: getUserQr }})">登録
    </el-button>
    <p v-if="isUserQr">QRcode: {{ getUserQr }}</p>
    <p v-if="isUserQr">{{ searchText() }}</p>
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
    ...mapGetters(['getUserQr', 'isUserQr', 'searchUserQr'])
  },
  created() {
    this.fetchRecords()
  },
  methods: {
    ...mapActions(['fetchRecords']),
    searchText() {
      return this.searchUserQr ? 'Hit' : 'Miss'
    },
    reload() {
      location.reload(true)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
