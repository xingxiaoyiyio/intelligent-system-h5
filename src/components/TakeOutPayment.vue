<template>
    <div class='takeOutPayment'>
        <div class='top'>
           <router-link :to='"/index/shopList"'>
               <p class='subtitle'>自取门店 <img src="../assets/images/down.png" alt=""></p>
           </router-link>
           <div class='name'>机器人餐厅1（碧桂园总部店）       <span class='dist'>15km</span> </div>
           <div class='addr'>  <img src="../assets/images/addr_loc.png" alt="">佛山市顺德区北窖镇顺德碧桂园大道1号</div>
        </div>
        <div class='info'>
            <div class='left'>
              <p>联系方式</p>
              <input  placeholder="请输入姓名" class="weui-input"  type="text">
            </div>
            <div class='right'>
              <p>自取时间</p>
              <p class='light relative'> <popup-picker :data='timeList'  v-model='time' @on-change='changeTime'></popup-picker> </p>
            </div>
        </div>
        <div class='dishBox'>
            <div class='dishItem' v-for="(item,index) in dishList" :key='index'>
              <div class='img'>
                <img src="../assets/img/img1.jpg" alt="">
              </div>
              <div class='flex1box'>
                <p class='name'>{{item.name}}</p>
                <p class='qty'>x{{item.qty}}</p>
              </div>
              <div class='price'>￥{{item.price}}</div>
            </div>
        </div>
        <div class='other'>
          <div class='packagePay'>包装费  <span>￥5</span> </div>
          <div class='discount'>优惠    <span>￥15</span> </div>
          <div class='total'>合计：￥{{totalPayment}}</div>
        </div>
        <div class='submitBtn'>￥{{totalPayment}}<span>立即支付</span>  </div>
    </div>
</template>
<script>
import { Group,PopupPicker } from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "订单结算");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
  },
  components: {
    Group,PopupPicker
  },
  methods: {
    changeTime(value){
       console.log(value)
    }
  },
  data() {
    return {
      timePop:false,
      time:['今天','12','00'],
      totalPayment:98,
      dishList:[
        {name:'红烧排骨饭',qty:'3',price:'23'},
        {name:'香辣虾',qty:'1',price:'83'},
        {name:'番茄炒蛋',qty:'1',price:'13'},
      ],
      timeList:[['今天','明天'],['11','12','13','14','15','16','17','18','19','20','21','22','23'],['00','15','30','45']]
    };
  }
};
</script>
<style lang='less' scoped>
.takeOutPayment{
 
  .top{
       padding: 10px 20px;
       border-bottom: 1px solid #f2f2f2;
    .subtitle{
      height: 30px;
      color:#333;
      line-height: 30px;
      img{    width: 12px;}
    }
   .addr{
         color:#929292;
         padding-left: 20px;
         position: relative;
         img{
              width: 16px;
               position: absolute;
               left: 0;
         }
      }
    .name{
        font-size: 17px;
        height: 30px;
        position: relative;
        padding-right: 80px;
        overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
      .dist{
            color: #929292;
            position: absolute;
            text-align: right;
            right: 0;
      }
    }
   
  }
   .info{
      display:flex;
      padding:20px;
      >div{
        width: 50%;
        border-right: 1px solid #f2f2f2;
      }
    
      .right{
        padding-left: 15px;
        border: none;
        img{
              height: 14px;
              position: absolute;
              right: 0;
              top: 5px;
          }
        }
       
          border-bottom: 1px solid #f2f2f2;
    }
  .light{
    color:#ccc
  }
  .dishBox{
    padding: 10px;
    border-bottom: 1px solid #f2f2f2
  }
  .dishItem{
    display: flex;
    margin-top: 10px;
    padding-right: 10px;
    .img{
      width: 60px;
      img{
        display: block;
        width: 40px;
        margin: 0 auto
      }
    }
    .name{
      font-size: 16px
    }
    .qty{
      color: #929292
    }
    .price{
       font-size: 16px;
       width: 50px;
       text-align: right;
    }
  }
  .packagePay{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f2f2f2;
    span{
      float: right
    }
  }
  .discount{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f2f2f2;
    span{
      float: right;
      color: red
    }
  }
  .total{
    height: 50px;
    line-height: 50px;
    text-align: right;
  }
  .other{
    padding: 0 20px;
  }
  .submitBtn{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    position: absolute;
    bottom: 0;
    background-image: linear-gradient(-180deg, #FDC135 0%, #FA8829 100%);
    span{
      padding-left: 20px;
      color:#fff;
    }
  }
 
}
</style>

