<template lang="pug">
.main-wrapper
  .frontpage-container
    img.frontpage-img(:src="src")
    .phone-avatar
      //- img.phone-img(v-if="phoneImg" :src="src")
      img.phone-img-blank(:src="blankPhoneImg")
    .phone-name iphone 7
    .wrong-model-text
      .question-icon
      span  如果与实际机型不符，
      text.blue-text 点击切换
    button.gradient(@click="toDetection") 立即检测
  .step-container
    .step-rect ① 检测
    .step-rect ② 审核
    .step-rect ③ 收款
  .bottom-container
    .head-text 
      text 回收保障
    .icon-container(v-for="(step, index) in steps" :key="index")
      text {{step}}
</template>

<script>
export default {
  data () {
    return {
      src: 'https://m.shanhs.com/ued/mini/old-offline/detection/front-page-img.png',
      blankPhoneImg: 'https://m.shanhs.com/ued/mini/old-offline/detection/blank-phone-img.png',
      phoneImg: '',
      steps: ['专业审核', '及时收款', '保障隐私', '环保循环']
    }
  },
  methods: {
    goCalssify () {
      wx.navigateTo({
        url: `/pages/screen-point/main`
      })
    }
  }
}
</script>

<style scoped>
.frontpage-container {
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
}
.frontpage-img {
  width: 100%;
  height: 290rpx;
}
.phone-avatar {
  position: absolute;
  display: flex;
  top: 150rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 240rpx;
  height: 240rpx;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(255,255,255,1);
  box-shadow: 0px 10px 10px 0px rgba(164,164,164,0.2);
  overflow: hidden;
}
.phone-img  {
  width: 176rpx;
  height: 176rpx;
}
.phone-img-blank {
  width: 88rpx;
  height: 176rpx;
}
.phone-name {
  text-align: center;
  margin-top: 140rpx;
  font-size: 48rpx;
  font-weight: 600;
}
.gradient {
  width:560rpx;
  height:88rpx; 
  margin-top: 78rpx;
  margin-bottom: 40rpx;
  background:linear-gradient(129.9deg, #65ecdd, #21b9a9);
  box-shadow:0 8rpx 10rpx 0 rgba(54, 206, 190, 0.2);
  border-radius:8rpx;
  color:#fff;
  font-size:32rpx;
  line-height:88rpx;
}
.wrong-model-text {
  font-family: PingFangSC, sans-serif;
  font-size: 28rpx;
}
.question-icon {
  position: relative;
  top: 4rpx;
  height: 32rpx;
  width: 32rpx;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABL1JREFUWAnFl01oXFUUxzMvM9Fk1EksRbALMR0jUmnEVQyITBZq0WYhOKiFQL4mOxdCqbQKU0GxSLNPhiQkJK1k0UVtsyjaSpUi6MIIUkxrXaQRii2TAROSTD78/V/unb6ZvMy8ASEXzpx77znn/7/vfpx7J1QTsExPTz+Wy+Xe2tzc7AiFQi8R9iwSM+E59F9bW1u/Oo5zNRaLXU4mk/8aW1kVKmvFODQ0dBDCE4Afo9lQyd/Yl4mZIubMwMDAn+Vidh3A2NjYo/l8Pg3IRwBEBALoEuoacgOZo51F1+DThGpB2pEE7ShaJY/PYCQSSXd3d69sdxX/+g5gdHS0GfILuLbKHZDb+pqmpqavK02tliqbzb5HjGYtbuhmGcQ7PT09d0y7oHYMIJPJHCbwCvIUXnnWNM26f8VU5gtRASosXYTY48SmcY8woHvI6/39/b95w4sGoC9fX1+/IXKc/0E6CfjJG1BtnQ9qA+8isl+DCIfD7d6ZKAxAa762tiayVpHX1ta+2tvb+0e1hH7+IyMjz29sbPygQWCfraura7N7ImwDtOGoa821cTp3I2dqdRI+RF7DLw6oPuIW8jPAgwAvUi8qwmImOvG9jqHVcH0sJ3cGdNSo30S0bqeY9i9kLC34vQzpNwA9bWw52hu0nzTtB7R7UqnUxdJYtRnESfbE51S1n17QEXVkIOgEShvltjac+krL+Pj4PuwXRI6+yUBfAaARMvW/iP+PyD7k3PDw8KHSeLUNtvKCuMRZ4+jYAKoko/OsxOG721dXV1PYnyFwCX3UuzkZxO/19fVvAnELWxQ5KbzSImziz6gfn2PidpReaTcIWOe8NMjTPqI6gZc0dZ5+t9rV1bUExnnT31Zqt+3Gxsbz4qLdIG6HaekwxmvlkgynQhkxSfCXFsxHu0tKv9U7XAyHsqmWpEOnwM12aKXXXQs7+ReMEt8yMTERXVlZSRrjFV+nh53iehtpdfiiZtM/99BeXW1ycvIJyC+zPC3gKdmcroDgcolbMxCTM41shSBfM6fjwPLy8gzkh3G4z+k4wmz97etsOsWFv1qxQiIqF7CbjQz3OKfje8Di+MxD/kZfX5/ySeCizaLHhHa3rtSqCvfGZyLni+5C3s7RDEpuE1fOAcBekS1VsW87vysFxieQ3w0aj/9zJu6OZmDWBLYHBZDf1NSUZuyA6nz9d9JVFMs1S6xz1QQmlJmCgrDr65n6SxJ2/f2gcYYjIX9xh/WAXFxcVHqNot+nPxMEzOz0o0F8vT7iEBcDXxK3extyeQzT2Y+jUqxuKd/7wAs0MzPzyMLCwqfqi8fj6UQise61+9X1SqJfG1UP3Qx3SMpNmZDrghDpQablOLpimZ+f7ySVnpLMzc11VAzAwWDr6s8bzu2crcuFEQ0KBMC0nlGqlyuAXSfmW0k0GtVLqmwRprCN01l7oblLoM69epK5S6AB6I2mpzNfdI/p2a83XJCZUGy5Igz7HhS2OOx7UHGFGbAgBOzds9wOYk//mNhB/F9/zcA7y2v5tHfaLYf0jiXwGlXXi5m10wPyA/aG/c9X6lbUxl9PrnM6ana3Fzl4GhUHYH2VQu3fc/r056UZ7b4l0DnIdKkpt1f19/w/U+2AoYXNv8oAAAAASUVORK5CYII=");
  background-size: 32rpx;
  display: inline-block;
}
.blue-text {
  color: #0A60FF;
}
.main-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.android-tip image{
  width: 648rpx;
  height: 1000rpx;
}
/* button[disabled] {
  color: #fff;
  background:rgba(233,233,233,1);
  box-shadow: none;
} */
.step-container {
  width: 100%;
  margin-top: 20rpx;
  height: 80rpx;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0;
  overflow: hidden;
}
.step-rect {
  height: 60rpx;
  width: 240rpx;
  background-color: #E3E3E3;
  position: relative;
  display: inline-block;
  color: #666;
  font-size: 28rpx;
  text-align: center;
  line-height: 60rpx;
}
.step-rect::after {
  content: '';
  display: inline-block;
  position: absolute;
  width: 0;
  height: 0;
  border-top: 30rpx solid transparent;
  border-bottom: 30rpx solid transparent;
  border-left: 30rpx solid #E3E3E3;
  right: -28rpx;
  z-index: 10;
}
.step-rect::before {
  content: '';
  display: inline-block;
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border-top: 30rpx solid transparent;
  border-bottom: 30rpx solid transparent;
  border-left: 30rpx solid #fff;
}
.step-rect:first-child::before {
  border-left: 30rpx solid transparent;
}
.step-rect:last-child::after {
  border-left: 30rpx solid transparent;
}

.bottom-container {
  width: 100%;
  height: 300rpx;
  margin-top: 20rpx;
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.head-text {
  position: absolute;
  top: 0;
  width: 100%;
  color: #333;
  font-weight: 700;
  font-size: 32rpx;
  text-align: center; 
  padding-top: 30rpx;
}
.icon-container {
  height: 140rpx;
  width: 120rpx;
  position: relative;
  top: 20rpx;
}
.icon-container text {
  display: block;
  position: absolute;
  bottom: 0;
  color: #999;
  font-size: 28rpx;
  line-height: 40rpx;
}

.icon-container:nth-child(2) {
  background: url(https://m.shanhs.com/ued/mini/old-offline/detection/zhuanyeshenhe.png) no-repeat;
  background-size: 80rpx;
  background-position: center top;
}
.icon-container:nth-child(3) {
  background: url(https://m.shanhs.com/ued/mini/old-offline/detection/jishishoukuan.png) no-repeat;
  background-size: 80rpx;
  background-position: center top;
}
.icon-container:nth-child(4) {
  background: url(https://m.shanhs.com/ued/mini/old-offline/detection/privacy-icon2.png) no-repeat;
  background-size: 80rpx;
  background-position: center top;
}
.icon-container:nth-child(5) {
  background: url(https://m.shanhs.com/ued/mini/old-offline/detection/huanbaoxunhuan.png) no-repeat;
  background-size: 80rpx;
  background-position: center top;
}
</style>


