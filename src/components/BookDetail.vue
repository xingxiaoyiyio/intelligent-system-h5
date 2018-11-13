<template>
    <div class='queueDetail'>
        <div class='top'>
            <div class='flexbox'>
            <div class='scu'>已成功预定！</div>
            </div>
        </div>
        <div class='detail'>
            <div class='cellBox'>
                <div class='label'>门店选择</div>
                <div class='value'>碧桂园大道店</div>
            </div>
             <div class='cellBox'>
                <div class='label'>餐桌型号</div>
                <div class='value'>小桌</div>
            </div>
            <div class='cellBox'>
                <div class='label'>定位时间</div>
                <div class='value'>2018-11-15  18:00</div>
            </div>
             <div class='cellBox'>
                <div class='label'>定位编号</div>
                <div class='value'>A25</div>
            </div>
        </div>
          <div class='line'></div>

        <div class='info2'>
            <div class='itembox'>
                <div class='label'>姓名</div>
                <div class='value'> Lisav</div>
                <div class='checkIcon'>  
                <check-icon :value="false">先生</check-icon>
                <check-icon :value="true">女士</check-icon></div>
            </div>
            <div class='itembox'>
                <div class='label'>手机号码</div>
                <div class='value'>18245443432</div></div>
        </div>
        <div class='cancel' @click='cancelQueue'>
            取消预定
        </div>
    </div>
</template>
<script>
import { Group,Cell,CheckIcon } from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "预定详情");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
  },
  components: {
    Group,Cell,CheckIcon
  },
  methods: {
      cancelQueue(){
          this.$router.push({path: '/index/home'});
      }
  },
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.top{
    padding: 10px;
    background: #F2F2F2;
}
.scu{
    color: #30ACCF;
    font-size: 17px;
    padding-left: 15px;
}
.detail{
    padding: 10px;
}

 .cellBox{
        display: flex;
        border-bottom: 1px solid #f2f2f2;
        .label{
            color: #333;
            min-width: 80px;
        }
        .value{
            text-align: right;
            color: #929292;
        }
        >div{
            width:50%;
            height: 44px;
            line-height: 44px;
        }
    }
.flexbox{
   background: #FFFFFF;
    box-shadow: 0 4px 6px 0 #CCCCCC;
    border-radius: 4px;
    line-height: 85px;
    height: 85px;
    display: flex;
        >div{
            width: 50%
        }
}
.info2{
    padding: 0 10px;
    .itembox{
        display: flex;
        border-bottom: 1px solid #f2f2f2;
        height:44px;
        line-height: 44px;
    }
    .label{
        min-width: 100px;
        color: #333
    }
.value{
    color:#929292;
    min-width: 80px;
}
}

.cancel{
    width: 150px;
    height: 50px;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    line-height: 50px;
    margin:0 auto;
    margin-top: 30px;
    text-align: center;
    color:#929292;
    font-size: 17px;
}
</style>

