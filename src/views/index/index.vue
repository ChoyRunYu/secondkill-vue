<template>
  <div class="index">
    <div class="search">
      <div class="search-module">
        <input type="text" ref="searchInput" placeholder="搜索关键词" class="search-input">
        <button class="search-btn" @click="search"><i class="search-btn-img"></i></button>
      </div>
    </div>
    <div class="nav">
      <div class="nav-main">
        <div class="nav-left">
          <div class="nav-title">即将售罄</div>
        </div>
        <div class="nav-right">
          <img :src="require('@/assets/img/nav-right.png')">
        </div>
      </div>
    </div>
    <div class="goods-list">
      <div class="goods-list-title">
        <div class="title-left">即将售罄</div>
        <div class="title-right">即将卖光的商品都在这，不容错过</div>
      </div>
      <div class="goods-list-main">
        <div class="goods-items">
          <div class="goods-item" :key="msGoods.msGoodsId" v-for="msGoods in msGoodsList" >
            <router-link :to="'detail/' + msGoods.msGoodsId" >
              <div class="goods-item-main">
                <div class="goods-item-left">
                  <img :src="msGoods.goodsImg" alt="">
                </div>
                <div class="goods-item-right">
                  <div class="goods-item-title">{{msGoods.goodsTitle}}</div>
                  <div class="goods-item-price">秒杀价<span class="goods-item-ms-price">¥{{msGoods.msPrice}}</span><span class="goods-item-y-price">¥{{msGoods.goodsPrice}}</span> </div>
                  <div class="goods-item-btn">
                    <div v-if="msGoods.start === 0" class="ms-btn">即将开始</div>
                    <div v-else-if="msGoods.start === 1" class="ms-btn">立即抢购</div>
                    <div v-else class="ms-btn activity-end">活动结束</div>
                    仅剩<span class="stock">{{msGoods.msGoodsStock}}</span>件 
                    </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMsGoodsList, getMsGoodsListSearch } from '@/api/goods'


export default {
  name: "Index",
  data() {
    return {
      msGoodsList: []
    };
  },
  mounted(){
    this.getMsGoodsListApi()
  },
  methods: {
    search(){
      let keyword = this.$refs.searchInput.value
      if(keyword == null || keyword.length <= 0){
        this.getMsGoodsListApi()
        return;
      }
      getMsGoodsListSearch(keyword).then(res => {
        let newMsGoodsList = []
        res.data.msGoodsList.forEach(element => {
          let now = new Date();
          // 如果当前时间小于开始时间，则秒杀活动未开始
          // 如果当前时间大于开始时间且小于结束时间，则秒杀活动正在进行
          //     --- 如果秒杀活动开始，但库存为0，则按钮不能点击
          // 如果当前时间大于结束时间，则秒杀活动结束
          let startTime = new Date(element.startTime)
          let endTime = new Date(element.endTime)
          if (now < startTime) {
            // 活动即将开始
            element.start = 0
          } else if (now > startTime && now < endTime) {
            // 立即钱够
            element.start = 1
          } else {
            // 活动结束
            element.start = 2
          }
          newMsGoodsList.push(element)
        });
        this.msGoodsList = newMsGoodsList
      })
    },
    /** 
     * 获取秒杀商品列表
     */
    getMsGoodsListApi(){
      getMsGoodsList().then(res => {
        let newMsGoodsList = []
        res.data.msGoodsList.forEach(element => {
          let now = new Date();
          // 如果当前时间小于开始时间，则秒杀活动未开始
          // 如果当前时间大于开始时间且小于结束时间，则秒杀活动正在进行
          //     --- 如果秒杀活动开始，但库存为0，则按钮不能点击
          // 如果当前时间大于结束时间，则秒杀活动结束
          let startTime = new Date(element.startTime)
          let endTime = new Date(element.endTime)
          if (now < startTime) {
            // 活动即将开始
            element.start = 0
          } else if (now > startTime && now < endTime) {
            // 立即钱够
            element.start = 1
          } else {
            // 活动结束
            element.start = 2
          }
          newMsGoodsList.push(element)
        });
        this.msGoodsList = newMsGoodsList
      })
    }
  }
};
</script>

<style lang="scss">
a{
  color: #000;
  text-decoration: none;
}

.search{
  width: 800px;
  height: 80px;
  margin: 20px auto;
  padding: 15px;
  box-sizing: border-box;

  .search-module{
    line-height: 50px;


    .search-input{
      width: 660px;
      height: 50px;
      box-sizing: border-box;
      display: inline-block;
      vertical-align: top;
      padding: 10px 10px 10px 15px;
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
      border: 2px solid #d4d4d4;
      border-right: none;
      background: #fff;
    }
    .search-input:focus{
      outline: none;
      border-color: #ff4466;
      transition: 0.2s;
    }

    .search-btn{
      background: #ff4466;
      width: 100px;
      height: 50px;
      border: none;
      display: inline-block;
      padding: 0 40px;
      box-sizing: border-box;
      vertical-align: top;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
      cursor: pointer;

      .search-btn-img{
        display: block;
        width: 20px;
        height: 20px;
        background: url('~@/assets/icon/search-btn.png');
        background-size: 20px 20px;
        
      }
    }

    .search-btn:focus{
      outline: none;
    }
  }
}
.nav {
  width: 100%;
  min-width: 1300px;
  height: 47px;
  background: #ff4466;
  line-height: 47px;
  box-sizing: border-box;
  margin-top: 20px;

  .nav-main {
    width: 1300px;
    margin: 0 auto;

    .nav-left {
      float: left;

      .nav-title {
        color: #fff;
        font-size: 20px;
        font-weight: 550;
      }
    }

    .nav-right{
      float: right;
      height: 47px;
    }
  }
}

.goods-list{

  margin: 0 auto;
  width: 1200px;

  .goods-list-title{
    padding: 0 20px;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    
    .title-left{
      font-size: 20px;
    }

    .title-right{
      font-size: 16px;
      color: #666;
    }
  }

  .goods-list-main{
    width: 1100px;
    margin: 0 auto;
    overflow: hidden;

    .goods-items{

      width: 1300px;
      height: 100%;
      
      .goods-item{
        width: 530px;
        height: 250px;
        border: 1px solid #ccc;
        float: left;
        margin-right: 28px;
        margin-bottom: 20px;
        box-sizing: border-box;

        .goods-item-main{
          padding: 0 15px;
          display: flex;
          height: 250px;
          align-items: center;

          .goods-item-left{
            img{
              width: 220px;
              height: 220px;
            }
          } 

          .goods-item-right{
            width: 100%;
            height: 220px;
            padding: 0px 0 10px 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-sizing: border-box;

            .goods-item-title{
              font-size: 18px;
            }

            .goods-item-price{
              font-size: 16px;
              
              .goods-item-ms-price{
                font-size: 24px;
                color: #ff4466;
                margin: 0 5px;
                font-weight: 550;
              }
              .goods-item-y-price{
                font-size: 14px;
                text-decoration: line-through;
                color: #666;
              }
            }

            .goods-item-btn{
              color: #888;
              

              .ms-btn{
                width: 120px;
                height: 35px;
                line-height: 35px;
                background-color: #ff4466;
                border-radius: 4px;
                color: #fff;
                text-align: center;
                cursor: pointer;
                display: inline-block;
                margin-right: 8px;
              }

              .activity-end{
                background-color: #fa94a6 !important;
              }
              
            }
          }
        }
      }
    }

    
  }
}
</style>

