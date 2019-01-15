<template>
  <div>
    <video
      ref="video"
      autoplay
      muted
      playsinline
      class="video"/>
    <canvas
      v-show="false"
      ref="canvas"
      class="canvas"/>
  </div>
</template>

<script>
import jsQR from 'jsqr'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    setColumnName: {
      type: String,
      default: '',
      validator: v => {
        return ['setUserQr', 'setAvailableQr'].indexOf(v) !== -1
      }
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    }
  },
  data() {
    return {
      intervalId: null
    }
  },
  computed: {
    ...mapGetters(['getUserQr'])
  },
  mounted() {
    this.setQrcodeReader()
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  },
  methods: {
    ...mapActions(['setUserQr', 'setAvailableQr']),
    setQrcodeReader() {
      const video = this.$refs.video
      const canvas = this.$refs.canvas
      const resolutionWidth = video.videoWidth
      const resolutionHeight = video.videoHeight
      // web camera
      const media = navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      })
      media.then(mediaStream => (video.srcObject = mediaStream))
      // qrcode canvas
      canvas.width = this.width
      canvas.height = this.height
      const context = canvas.getContext('2d')
      this.intervalId = setInterval(() => {
        context.drawImage(video, 0, 0, this.width, this.height)
        const imageData = context.getImageData(0, 0, this.width, this.height)
        const code = jsQR(imageData.data, imageData.width, imageData.height)
        if (code) {
          const setQr = {
            setUserQr: d => this.setUserQr(d),
            setAvailableQr: d => this.setAvailableQr(d)
          }
          setQr[this.setColumnName](code.data)
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.video {
  transform: scale(-1, 1);
}
</style>
