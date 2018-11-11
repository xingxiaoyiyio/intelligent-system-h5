<template>
     <div class='specModal' v-transfer-dom >
             <confirm v-model="specModal" :show-cancel-button="false" :show-confirm-button="false">
                 <div class='top'>{{activeDish.name}}  <span class='closed'> <img src="" alt=""> </span></div> 
                 <div class='specItemsBox'>
                     <div class='specItem' v-for="(item,index) in activeDish.spec" :key=index>{{item}}</div>
                 </div> 
                 <div class='bottom'>
                     <div>￥32.00</div>
                     <div class='addtoshop' @click='specModal=false'>加入购物车</div>
                 </div>
              </confirm>
        </div>
</template>
<script>
import {Confirm,TransferDomDirective as TransferDom} from 'vux'
export default {
     components: {
       Scroller,
       PopupPicker,
       Popup,
       Confirm
    },
    props:{
        specDish:Object,
        specModal:Boolean
    },
    directives: {
    TransferDom
  },
  mounted(){
      this.activeObj = this.specDish;
      this.showModal = this.specModal
  },
    data(){
        return{
            showModal:false,
            showItem:{}
        }
    }
}
</script>

<style lang='less'>
    .specModal {
    .weui-dialog__bd:first-child {
        padding: 15px 0 0 0;
    }
    .top{
        height: 40px;
        line-height: 40px;
        position: relative;
        font-size: 16px;
        text-align: left;
        padding-left: 20px;
        span{
            position: absolute;
            display: block;
            width: 20px;
            height: 20px;
            right: 5px;
            top: 5px;
        }
      
    }
    .bottom{
        height: 40px;
        line-height: 40px;
        display: flex;
        border-top: 1px solid #f2f2f2;
        margin-top: 25px;
        >div{
            width:50%;
            text-align: center;
        }
        .addtoshop{
            background: #FA8829;
            border-left: 1px solid #f2f2f2;
            color:#fff;
        }
    }
    .specItemsBox{
       
        display: flex;
        flex-wrap: wrap;
        >div{
            width: 27%;
            margin-left: 4%;
            margin-top: 10px;
            height: 30px;
            line-height: 30px;
            border: 1px solid #F2f2f2;
        }
       
    }
}
</style>

