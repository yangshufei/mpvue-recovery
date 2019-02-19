<template lang="pug">
  .full-height
    ScreenPointDiv(@point="point")
</template>

<script>
  import ScreenPointDiv from '@/components/screen-point-div'

  export default {
    components: {ScreenPointDiv},
    methods: {
      point (e) {
        if (e.pointNumber === e.countPoint) {
          wx.showModal({
            title: '触屏正常',
            cancel: false,
            success (res) {
              wx.navigateTo({
                url: '/pages/screen-look/main'
              })
            }
          })
        }
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
.full-height{
  height: 99.6vh;
}
</style>
