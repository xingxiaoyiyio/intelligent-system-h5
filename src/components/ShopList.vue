<template>
    <div class='shopList'>
         <router-link :to="'/index/shopCity'">
            <div class='addrLoc'>当前定位：佛山  <img class='down' src="../assets/images/down.png" alt=""> </div>
         </router-link>
        <div class='shopItem' v-for="(item,index) in shopList" :key=index>
            <div class='topName'>{{item.name}}<span class='dist'>距您{{item.dist}}</span></div>  
            <div class='time'>营业时间：{{item.work}}</div>  
            <div class='addr'>
                 <router-link :to="'/index/shopDetail'">
                     <img class='addr_loc' src="../assets/images/addr_loc.png" alt="">{{item.addr}}<img src="../assets/images/right.png" class='right' alt="">
                </router-link>
            </div>  
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
     mounted() {
          this.$store.commit('UPDATE_PAGE_TITLE', '门店列表')
          this.$store.commit('UPDATE_HEAD', true);
          this.$store.commit('UPDATE_FOOTER', false);
      },   
      data(){
          return{
              shopList:[
                  {name:'机器人餐厅(碧桂园1店)',dist:'15km',work:'09:00 - 23:00',addr:'佛山市顺德区北窖镇顺德碧桂园大道1号'},
                  {name:'机器人餐厅(碧桂园2店)',dist:'16km',work:'09:00 - 23:00',addr:'佛山市顺德区北窖镇顺德碧桂园大道2号'},
              ]
          }
      },
    computed:{
    }
}
</script>

<style lang='less' scoped>

.shopList{
    .addrLoc{
        padding: 10px 20px;
        color:#333;
        .down{
            width: 12px;
        }
    }
    .addr{
            padding: 0 20px;
     position: relative;
     a{
             color: #929292;
     }
        img{
            position: absolute;
        }
    }
    .shopItem{
              height: 90px;
    padding: 0 20px 15px 20px;
    border-bottom: 1px solid #f2f2f2;
        .topName{
            font-size: 16px;
            line-height: 40px;
            font-weight: 500;
        }
        .time{
             line-height: 30px;
        }
        .addr{
            line-height: 30px; 
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #929292;
        }
        .dist{
            float:right;
            font-size: 14px;
            color: #808080;
            font-weight: 400;
        }
        .addr_loc{
           position: absolute;
            height: 16px;
            left: 0;
            padding-top: 6px;
        }

        .right{
               position: absolute;
    right: 0;
    padding-top: 6px;
    height: 16px;
        }
    }
}
</style>

    