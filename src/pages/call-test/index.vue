<template lang="pug">
  .main-container
    .offline-speak-test-section(v-if="!android")
      span.speak-test-text 点击拨号按钮
      span.speak-test-text 听到语音提示即可判定通话正常
      button.gradient.speak-test-click(@click="callTestTap") 点击拨号
    .offline-speak-test-section(v-else)
      .speak-text 机器通话情况是否完好？
      button.gradient.speak-good(@click="confirmTap") 通话完好
      button.speak-bad(@click="cancelTap") 通话异常
</template>

<script>
export default {
  data () {
    return {
      android: false
    }
  },
  onLoad () {
    let platform = wx.getSystemInfoSync().platform
    if (platform === 'android' || platform === 'devtools') {
      this.android = true
    }
  },
  methods: {
    callTestTap () {

    },
    confirmTap () {

    },
    cancelTap () {

    }
  }
}
</script>

<style lang="less" scoped>
.offline-speak-test-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(https://m.shanhs.com/ued/mobile/images/v2/channel/base/offline/speak-test-tel-icon-new.png) no-repeat center 210rpx;
    background-size: 432rpx 240rpx;
    padding-top:450rpx;
    background-color:#fff;
    height:100%;
    box-sizing:border-box;
}
.speak-test-text{
    text-align: center;
    color: #666;
    margin-top: 20rpx;
    line-height: 44rpx;
    display:block;
    font-size: 32rpx;
}
.speak-test-click {
    margin: 100rpx;
    width: 560rpx;
    height: 88rpx;
    line-height: 88rpx;
    text-align: center;
    font-size: 32rpx;
    color: #fff;
}
.main-container {
  height: 100%;
}
.speak-text {
  width: 100%;
  margin-top: 20rpx;
  text-align: center;
  color: #bbb;
}
.speak-good {
  margin-top: 60rpx;
  width: 560rpx;
  height: 88rpx;
  border-radius: 8rpx;
  line-height: 88rpx;
  text-align: center;
  color: #fff;
}
.speak-bad {
  margin-top: 60rpx;
  width: 560rpx;
  height: 88rpx;
  border-radius: 8rpx;
   border: 1rpx solid #bbb; 
  line-height: 88rpx;
  text-align: center;
  background: transparent;
  color: #FC455A;
  box-sizing: border-box;
}
</style>

