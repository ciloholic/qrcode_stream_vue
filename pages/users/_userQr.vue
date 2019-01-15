<template>
  <div>
    <qrcode-reader set-column-name="setAvailableQr"/>
    <el-button
      :disabled="!(isAvailableQr)" 
      @click="post()">登録</el-button>
    <p v-if="isAvailableQr">QRcode: {{ getAvailableQr }}</p>
  </div>
</template>

<script>
import axios from 'axios'
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
    ...mapGetters(['getUserQr', 'getAvailableQr', 'isAvailableQr'])
  },
  methods: {
    post() {
      const data = JSON.stringify({
        user_qr: this.getUserQr,
        text: 'HITHIT'
      })
      const headers = {
        'Content-Type': 'application/json'
      }
      axios
        .post(process.env.API_URL, data, { headers: headers })
        .then(res => {
          console.log(res.status)
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      // $router.push({ name: 'users-completed'})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
