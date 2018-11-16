<template>
    <div class='shopCity'>
        <div class='top'>
            <p>定位/最近访问</p>
            <flexbox :gutter="0" wrap="wrap" class='cityBox'>
                  <flexbox-item :span="1/4"><div class="cityItem">  <div class='active' @click='cityChange' > <img src="../assets/images/addr_loc.png" alt=""> {{shopInfo.city || constData.defaultCityName}}</div> </div></flexbox-item>
                  <!-- <flexbox-item :span="1/4"><div class="cityItem">  <div>广州</div> </div></flexbox-item>
                  <flexbox-item :span="1/4"><div class="cityItem">  <div>深圳</div> </div></flexbox-item> -->
            </flexbox>
        </div>
        
        <div class='cityPannel' v-for="(value,key) in cityList" :key="key">
          <p class='title'>{{key}}</p>
          <div v-for="(item,index) in value" :key="index" @click='cityChange(item.CITY_NO,item.CITY_ZN)'>{{item.CITY_ZN}}</div>
        </div>
    </div>
</template>
<script>
import { Group ,Flexbox, FlexboxItem} from "vux";
import {api} from '../config/api'
import {mapGetters} from 'vuex';

const {searchCityList} = api;

export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "定位");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
    this.loadCityList()
  },
  components: {
    Group,Flexbox, FlexboxItem
  },
  computed: {
    ...mapGetters(['shopInfo'])
  },
  methods: {
    cityChange(code,name){
      this.$router.push({path:"/index/shopList",query:{code:code,name:name}})
    },
    loadCityList(){
         let self = this;
         const bObj={};
          this.baseAjax({
            url: searchCityList,
            success: function(data) {
              if (data.RESULT) {
                console.log(data.RESULT)
                data.RESULT.forEach(element => {
                   const first=element.CITY_EN.substr(0,1)
                   if(!bObj[first]) {
                        bObj[first]=[element];
                     }else{
                        bObj[first].push(element);
                     }
                });
              }
          self.cityList=bObj;
            }
          });
         
    }
  },
  data() {
    return {
      cityList:{'F':[{CITY_ZN:'佛山'}]}
    };
  }
};
</script>
<style lang='less' scoped>
.cityBox{
  height: 60px;
}
.top{
  padding: 10px 20px;
}
.cityItem{
  .active{
    position: relative;
     img{
      position: absolute;
      width: 15px;
      left: 3px;
      top: 5px;
     }
  }
  >div{
   width: 80px;
    padding-left: 10px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 4px;
    overflow: hidden;
    border:1px solid #eee;
  }
}
 .cityPannel{
    border-top: 1px solid #f2f2f2;
    
    .title{
      height: 25px;
      padding:0 20px;
      line-height: 25px;
      background: #eee;
      color:#ccc
    }
    >div{
      height: 30px;
      line-height: 30px;
       padding:0 20px;
      border-bottom: 1px solid #f2f2f2
    }
  }
</style>

