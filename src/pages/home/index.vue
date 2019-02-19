<template lang="pug">
  .home-container
    img.footer-bg(src="https://m.shanhs.com/ued/mini/old-touch/footer-bg.png" style="width: 100%;" mode="widthFix")
    .footer
      .index-tab
        img(src="https://m.shanhs.com/ued/mini/old-touch/index-green.png" style="width: 48rpx;height:74rpx;" mode="widthFix")
      .recovery-tab(@click="goCalssify")
        img(src="https://m.shanhs.com/ued/mini/old-touch/recovery-btn.png" style="width: 120rpx;height:120rpx;" mode="widthFix")
      .index-tab(@click="goUserCenter")
        img(src='https://m.shanhs.com/ued/mini/old-touch/mine-black.png' style="width: 39rpx;height:74rpx;margin-right: 9rpx;" mode="widthFix")
</template>

<script>
export default {
  methods: {
    goCalssify () {
      wx.navigateTo({
        url: `/pages/options/main`
      })
    },
    goUserCenter () {
      wx.redirectTo({
        url: `/pages/user-center/main`
      })
    }
  }
}
</script>

<style scoped>
.footer-bg{
  width: 100%;
  height: 140rpx;
  position: fixed;
  bottom:0;
}
.footer{
  width: 100%;
  height: 140rpx;
  position: fixed;
  bottom:0;
  display: flex;
  justify-content: space-around;
  align-items:flex-end;
}
</style>


