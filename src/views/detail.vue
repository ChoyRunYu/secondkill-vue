<template>
    <div class="detail">
        <div class="bg-img">
            <div class="bg-title">今日秒杀</div>
        </div>
        <div class="goods-detail">
            <div class="goods-detail-div">
                <div class="goods-img">
                    <img
                        src="../assets/goods.jpg"
                        alt=""
                    >
                </div>
                <div class="goods-mess">
                    <div class="goods-desc-title">子俊男装冬季加厚高领针织衫男韩版潮流宽松拼接撞色森系毛衣外套</div>
                </div>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
.detail {
  .bg-img {
    width: 100%;
    height: 60px;
    margin-top: 40px;
    background: #ff4466;
    padding: 0 300px;
    line-height: 60px;
    box-sizing: border-box;

    .bg-title {
      color: #fff;
      font-size: 20px;
      font-weight: 550;
    }
  }

  .goods-detail {
    padding: 0 300px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    
    .goods-detail-div{
        margin-top: 30px;
        padding: 20px;
        box-sizing: border-box;
        width: 100%;
        border: 1px solid #efefef;

        .goods-img{
            width: 400px;
            height: 400px;
            display: inline-block;
        }

        .goods-mess{
            display: inline-block;
            width: 100%;
            height: 100px;
            border: 1px solid #ff4466;
            
        }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {};
  }
};
</script>

