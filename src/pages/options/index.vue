<template lang="pug">
  .outer-wrapper
    //- scroll-view(scroll-y scroll-with-animation :scroll-into-view='scrollTop')
    //-   .scroll-view-item(v-for="(list,index) in lists" :key="index"  v-if="index<=showIndex" :id="'view'+index")
    //-     .title {{index+1}}、{{list.detailName}}
    //-     .item(v-for="(item,idx) in list.selectList" :key="idx" @click="chooseItem(index)") {{item.detailName}}
    van-button(type="primary") aaaa
</template>

<script>
import homeApi from '@/service/apiService.js'
import {mapGetters} from 'vuex'
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      scrollTop: 'view0',
      showIndex: 0,
      lists: [
        {
          detailName: '型号',
          detaiId: '01',
          selectList: [
            {
              detailId: '011',
              detailName: 'A1660'
            },
            {
              detailId: '012',
              detailName: 'A1780'
            },
            {
              detailId: '013',
              detailName: '其他型号'
            }
          ]
        },
        {
          detailName: '存储容量',
          detaiId: '02',
          selectList: [
            {
              detailId: '021',
              detailName: '32G'
            },
            {
              detailId: '022',
              detailName: '64G'
            },
            {
              detailId: '023',
              detailName: '256G'
            }
          ]
        },
        {
          detailName: '颜色',
          detaiId: '03',
          selectList: [
            {
              detailId: '031',
              detailName: '玫瑰金'
            },
            {
              detailId: '032',
              detailName: '金色'
            },
            {
              detailId: '033',
              detailName: '银色'
            },
            {
              detailId: '034',
              detailName: '亮黑色'
            },
            {
              detailId: '035',
              detailName: '黑色'
            },
            {
              detailId: '036',
              detailName: '红色'
            }
          ]
        },
        {
          detailName: '保修',
          detaiId: '04',
          selectList: [
            {
              detailId: '041',
              detailName: '国行有保一个月以上'
            },
            {
              detailId: '042',
              detailName: '有保一个月以上'
            },
            {
              detailId: '043',
              detailName: '无保或有保一个月以下'
            }
          ]
        }
      ],
      regForm: {
        username: 'yanggg',
        password: '444444',
        checkPassword: '444444'
      }
    }
  },
  computed: {
    ...mapGetters(['isLogin'])
  },
  async mounted () {
    let data = await homeApi.userRegister(this.regForm)
    this.topics = data
    setTimeout(() => {
      console.log(this.isLogin)
    })
  },
  methods: {
    chooseItem (index) {
      this.showIndex = index + 1
      this.scrollTop = 'view' + (index + 1)
    }
  }
}
</script>

<style lang="less" scoped>
.outer-wrapper{
  height: 100%;
  scroll-view{
    height: 100%;
  }
  .scroll-view-item{
    // height: 100%;
    .title{
      font-weight: bold;
      padding: 20rpx;
    }
    .item{
      margin: 0 auto;
      width: 85%;
      background: #ffffff;
      border-radius: 3rpx;
      padding: 30rpx;
    }
  }
}
</style>

