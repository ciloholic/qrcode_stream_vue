<template>
  <div>
    <p class="error">{{ error }}</p>
    <qrcode-reader
      :paused="paused"
      @init="onInit"
      @decode="onDecode"/>
    <p class="decode-result">{{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paused: false,
      result: '',
      error: ''
    }
  },
  methods: {
    onDecode(content) {
      this.paused = true
      this.result = content
    },
    async onInit(promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permisson'
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device'
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)'
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?'
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable'
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>
