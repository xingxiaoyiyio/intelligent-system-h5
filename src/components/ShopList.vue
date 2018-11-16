<template>
    <div class='shopList'>
         <router-link :to="'/index/shopCity'">
            <div class='addrLoc'>当前定位：{{cityName}} <img class='down' src="../assets/images/down.png" alt=""> </div>
         </router-link>
            <div class='shopItem' @click="selectShop(item)" v-for="(item,index) in shopList" :key=index>
                <div class='topName'>{{item.name}}<span class='dist'>距您{{item.distance}}km</span></div>  
                <div class='time'>营业时间：{{item.work}}</div>  
                <div class='addr' @click="toDetail(item)">
                        <img class='addr_loc' src="../assets/images/addr_loc.png" alt="">{{item.address}}<img src="../assets/images/right.png" class='right' alt="">
                </div>  
            </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {api} from '../config/api'
const {searchShopList} = api;
export default {
     mounted() {
          this.$store.commit('UPDATE_PAGE_TITLE', '门店列表')
          this.$store.commit('UPDATE_HEAD', true);
          this.$store.commit('UPDATE_FOOTER', false);
          this.loadBranchList()
      },   
      data(){
          return{
              shopList:[
                  {name:'机器人餐厅(碧桂园1店)',distance:'15km',work:'09:00 - 23:00',address:'佛山市顺德区北窖镇顺德碧桂园大道1号'}
              ]
          }
      },
      methods:{
           toDetail(item){
              this.$router.push({path:'/index/shopDetail',query:{item:item}})
           },
           selectShop(item){
              
              this.$store.commit('SHOP_INFO', item);
              this.$router.push({path:'/index/home'})
           },
           loadBranchList(){
            
               const self = this;
               const cityCode = this.$route.params.code || this.constData.defaultCityCode;
                this.baseAjax({
                    url: searchShopList,
                    params:{
                        cityCode:cityCode,
                        longitude:22.930312, 
                        latitude:113.275255
                    },
                    success: function(data) {
                    if (data.result) {
                        self.$store.commit('SHOP_INFO', data.result [0] || {})
                        self.shopList = data.result;
                        }
                    }
                });
                },
      },
    computed:{
         ...mapGetters([
            'shopInfo'
         ]),
         cityName(){
             if(this.$route.params.name){
                 return this.$route.params.name
             }else{
                 return this.shopInfo.city || this.constData.defaultCityName
             }
         }
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

    