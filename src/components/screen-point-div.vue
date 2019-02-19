<template lang="pug">
  .screen-point-div(@touchmove="touchEvent" @touchstart="touchEvent" @touchend='touchend')
    .line(v-for="(items,index) in lineArray" :key="index")
      .item(v-for="(item,idx) in items" :key="idx" :class="{activity: item.activity}")
</template>

<script>
  export default {
    data () {
      return {
        countPoint: 0,
        pointNumber: 0,
        allItems: [],
        lineArray: [],
        itemWidth: 0,
        itemHeight: 0
      }
    },
    methods: {
      touchEvent (e) {
        let {clientX, clientY} = e.touches[0]
        this.allItems.every(t => {
          let topDis = [t.offsetTop, t.offsetTop + this.itemHeight]
          let leftDis = [t.offsetLeft, t.offsetLeft + this.itemWidth]
          if (clientX >= leftDis[0] && clientX <= leftDis[1] && clientY >= topDis[0] && clientY <= topDis[1]) {
            this.allItems.splice(this.allItems.indexOf(t), 1)
            t.activity = true
            this.pointNumber++
            // this.$emit('point', {countPoint: this.countPoint, pointNumber: this.pointNumber})
            // console.log(this.countPoint, this.pointNumber)
            return false
          }
          return true
        })
      },
      touchend () {
        this.$emit('point', {countPoint: this.countPoint, pointNumber: this.pointNumber})
      }
    },
    onLoad () {
      let res = wx.getSystemInfoSync()
      let windowWidth = res.windowWidth
      let windowHeight = res.windowHeight
      const clientWidth = windowWidth
      const clientHeight = windowHeight
      const itemMaxNumber = 11
      const lineNumber = 20
      this.itemWidth = clientWidth / itemMaxNumber
      this.itemHeight = clientHeight / lineNumber
      const getItem = (line, itemIndex, itemNumber) => {
        let addit = (itemMaxNumber - itemNumber) / (itemNumber - 1)
        itemIndex = itemIndex * (addit + 1) // 根据每行个数算偏移个数
        return {
          offsetLeft: itemIndex * this.itemWidth,
          offsetTop: line * this.itemHeight,
          activity: false
        }
      }
      for (let i = 0; i < lineNumber; i++) {
        let itemArray = []
        let itemNumber = 3 // 每行个数 默认3个
        if (i === 0 || i === lineNumber - 1 || i === parseInt(lineNumber / 2)) {
          itemNumber = itemMaxNumber // 如果是第一行或者最后一行或者是中间一行，就最大个数
        }
        for (let n = 0; n < itemNumber; n++) {
          let item = getItem(i, n, itemNumber)
          this.allItems.push(item)
          itemArray.push(item)
        }
        this.lineArray.push(itemArray)
      }
      this.countPoint = this.allItems.length
    },
    onUnload () {
      if (this.$options.data) {
        Object.assign(this.$data, this.$options.data())
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .screen-point-div{
    display: flex;
    flex-direction: column;
    background: #fff;
    height: 100%;
    width: 100%;
    // overflow: hidden;
    .line{
      flex: 1;
      display: flex;
      justify-content: space-between;
      .item{
        width: 9.09090909%;
        border: 1rpx solid #1ab499;
        margin-right: -1rpx;
        margin-bottom: -1rpx;
        &.activity{
          border-color: #1ab499;
          background: #1ab499;
        }
      }
    }
  }
</style>
