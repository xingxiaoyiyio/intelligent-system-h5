<template>
    <div class='order'>
        <tab :line-width="1" custom-bar-width="60px">
          <tab-item class='item' v-for="(item,index) in menu" :key="index">{{item}}</tab-item>
        </tab>
        <div class='line'></div>
       <p class='subtitle'>最近订单</p>
       <div class='orderListBox'>
         <router-link  v-for="(item,index) in orderList" :key='index' :to='item.to'>
            <div  class='orderItem'>
              <div class='left'>
                <img src="../assets/images/robot.jpg" alt="">
              </div>
              <div class='mid'>
                <p class='name'>{{item.name}}</p>
                <p class='time'>{{item.time}}</p>
              </div>
              <div class='right'>
                  <div class='status'>{{item.status}}   <img src="../assets/images/right.png" alt="">
                  </div>
                  <div  class='payment' v-show="item.payment">买单</div>
                  <div  class='evaluate' v-show="item.evaluate">评价</div>
              </div>
            </div>
           </router-link>
       </div>
       <div class='more'>查看全部 <img src="../assets/images/right.png" alt=""> </div>
    </div>
</template>
<script>
import { Group, Tab, TabItem } from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "订单");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", true);
    this.$store.commit("ACTIVE_TYPE", 2);
  },
  components: {
    Group,
    Tab,
    TabItem
  },
  methods: {
    
  },
  data() {
    return {
      menu: ["点餐", "排号", "预定", "外卖", "全部订单"],
      orderList: [
        {
          name: "小智餐厅碧桂园分店",
          time: "2018-10-30  12:00",
          status: "正在进行中",
          payment: true,
          to:'/index/orderDetail'
        },
        {
          name: "小智餐厅碧桂园分店2",
          time: "2018-10-30  12:00",
          status: "排号中",
          payment: false,
           to:'/index/queueDetail'
        },
        {
          name: "小智餐厅碧桂园分店2",
          time: "2018-10-30  12:00",
          status: "已完成",
          evaluate:true,
          payment: false,
           to:'/index/evaluate'
        }
      ]
    };
  }
};
</script>
<style lang='less'>
.order {
  .more{
    color: #929292;
    text-align: center;
    margin-top: 20px;
    img{
      height: 12px;
      padding-left: 10px;
    }
  }
  .scrollable .vux-tab-item {
    width: 20%;
    flex: 0 0 20%;
  }
  .vux-tab .vux-tab-item.vux-tab-selected {
    color: #fa8829;
    border-color: #fa8829;
  }
  .subtitle{
        line-height: 40px;
    padding: 0 10px;
    font-size: 16px;
  }

  .vux-tab-bar-inner {
    height: 0;
  }
  .orderItem {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #f2f2f2;
    .payment{
        border-radius: 4px;
        background: #FD431D;
        width: 63px;
        height: 25px;
        line-height: 25px;
        float: right;
        text-align: center;
        color: #fff;
    }
    .evaluate{
        border-radius: 4px;
        width: 63px;
        height: 25px;
        line-height: 25px;
        border: 1px solid #929292;
        color: #929292;
        float: right;
        text-align: center;
    }
    .left {
      width: 40px;
      padding-top: 4px;
      img {
        width: 20px;
      }
    }
    .mid {
      flex: 1;
      width: 0;
    }
    .name {
      font-size: 17px;
      line-height: 30px;
      color: #333;
    }
    .time {
      color: #929292;
    }
    .right {
      width: 120px;
    }
    .status {
      position: relative;
      padding-right: 20px;
      height: 25px;
      color: #FD431D;
      text-align: right;
      img {
        height: 16px;
        position: absolute;
        top: 3px;
        right: 0;
      }
    }
  }
}
</style>

