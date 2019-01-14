<template>
  <div>
    <p>登録完了</p>
    <el-button
      @click="$router.push({ name: 'users'})">トップへ</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created() {
    this.resetQr()
  },
  methods: {
    ...mapActions(['resetQr'])
  }
}
</script>

<style lang="scss" scoped>
</style>
