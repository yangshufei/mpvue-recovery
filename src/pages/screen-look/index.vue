<template lang="pug">
.swiper-help(:class="helpColor+'-text'")
  .help-box
    .help-top
      .help-left
        img.icon(:class="needFilter ? 'black' : ''" src="https://m.shanhs.com/newoffline/static/images/hand-swiper.png")
      .help-right(v-if="!lastSlider")
        .help-text 向上滑动或点击
        .help-text 切换背景色
      .help-right(v-else)
        .help-text 点击即可
        .help-text 跳转页面
    .help-tips 观察屏幕是否有亮点
    .help-tips 色差、断线等异常情况
  swiper.screen-look(
    :current="current" 
    indicator-dots
    :indicator-color="needFilter ? 'rgba(0,0,0,.3)' : '#fff'" 
    indicator-active-color='#1ab499'
    @change="swiperChange"
    vertical)
    swiper-item.screen-look-item(v-for="(item, index) in swiperLength" :key="index" @click="tapHandle")
</template>

<script>
export default {
  data () {
    return {
      lastSlider: false,
      optionList: [],
      helpColor: 'white',
      needFilter: false,
      touchStartY: 0,
      screenPoint: '',
      current: 0,
      swiperLength: 3
    }
  },
  methods: {
    swiperChange (e) {
      let currentPage = e.mp.detail.current
      if (currentPage === 0) {
        this.helpColor = 'white'
        this.needFilter = false
        this.lastSlider = false
      } else if (currentPage === 1) {
        this.helpColor = 'grey'
        this.needFilter = true
        this.lastSlider = false
      } else if (currentPage === 2) {
        this.helpColor = 'white'
        this.needFilter = false
        this.lastSlider = true
      }
    },
    tapHandle () {
      if (this.lastSlider) {
        wx.navigateTo({
          url: '/pages/call-test/main'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-help{
  position: relative;
  width: 100%;
  height: 100%;
  .help-box{
    position: absolute;
    top: 80rpx;
    left: 60rpx;
    z-index: 99;
  }
  .help-top{
    display: flex;
    flex-direction: row;
    .help-left{
      display: flex;
      align-items: center;
      img{
        height: 60rpx;
        width: 60rpx;
      }
    }
    .help-right{
      padding-left: 10rpx;
      font-size: 28rpx;
    }
    .help-tips{
      font-size: 28rpx;
      line-height: 40rpx;
    }
  }
  .screen-look{
    width: 100%;
    height: 100%;
    .screen-look-item{
      background-color: blue;
      &:nth-child(2){
        background-color: white;
      }
      &:nth-child(3){
        background-color: #000;
      }
    }
  }
}
.white-text {
  color: #fff;
}
.grey-text {
  color: #333;
}
.help-left img.black{
  filter: invert(100%)
}
</style>

