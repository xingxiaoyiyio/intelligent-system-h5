<template>
    <div class='shareDetail'>
      <div class='top'>
         <div class='imgbox'>
             <img src="" alt="">
         </div>
         <div class='info'>
             <router-link :to="'shopDetail'">
            <div class='title'>碧桂园机器人餐厅2  
                  <div class='r'> 
                      <img src="../assets/images/right.png" alt="">  
                  </div>  
            </div>
             </router-link>
             <div class='comment'>
               机器人餐厅体验太棒了~，吃得非常愉快。
             </div>
             <p class='time'>用餐时间：2018-09-12</p>
         </div>
      </div>
      <div class='line'></div>
      <!-- <div v-transfer-dom>
         <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
      </div> -->
      <div class='shareImg'>
        <p class='subTitle'>分享照片</p>
           <div class='outbox'>
            <scroller lock-y :scrollbar-x=false>
              <div class="swipbox"  v-bind:style="{ width: swipboxWidth }">
                <div class="rec-item" v-for="(item,index) in recomendList" :key="index">
                   <img v-bind:src=item.url alt="">
                </div>
              </div>
            </scroller>
          </div>
         <p class='subTitle'>推荐菜品</p>
         <div class='recomendBox'>
             <div class="initem" v-for="(item,index) in recomendList" :key="index">
                <div class='imgitem'>
                      <img v-bind:src=item.url alt="">
                </div>
                <p>{{item.name }}</p>
             </div>
         </div>
      </div>
    </div>
</template>
<script>
import { Group,Scroller } from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "分享详情");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
  },
  components: {
    Group,Scroller
  },
    computed: {
    swipboxWidth() {
      const width =
        this.recomendList.length * 148 > window.innerWidth - 30
          ? this.recomendList.length * 150
          : window.innerWidth - 30;
      return width + "px";
    }
  },
  methods: {},
  data() {
    return {
           recomendList: [
        {
          url: "http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg",
          name: "红烧排骨"
        },
        {
          url: "http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg",
          name: "海鲜饭"
        },
        {
          url: "http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg",
          name: "奶油盖浇饭"
        }
      ]
    };
  }
};
</script>
<style lang='less' scoped>
.top{
    display: flex;
    padding:10px;
    .imgbox{
        width: 80px;
        padding:10px;
    }
    .info{
        width:0;
        flex:1;
    }
}
.title{
    font-size: 16px;
    font-weight: 500;
    position: relative;
    height: 35px;
    color:#333;
    .r{
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;
        height: 30px;
        text-align: center;
        img{
          height: 16px;
          margin-top: 5px;
        }
    }
}
.comment{
  min-height: 50px;
}
.time{
  color:  #929292;
}
.outbox {
  overflow-x: auto;
  padding: 15px;
  border-bottom: 1px solid #f2f2f2;
}
.swipbox {
  display: flex;
  position: relative;
}

.rec-item {
      border-radius: 4px;
    margin-right: 10px;
    height: 73px;
    width: 130px;
    overflow: hidden;
  img {
    height: 100%;
     border-radius: 4px;
  }
  p {
    line-height: 40px;
  }
}
.subTitle{
    height: 30px;
    font-size: 17px;
    text-align: center;
    margin-top: 20px;
}
.recomendBox{
  display: flex;
  padding: 15px;
  flex-wrap:wrap;
  .initem{
    border:1px solid #f2f2f2;
    border-radius: 4px;
    width:31%;
    overflow: hidden;
    margin-right: 2%;
    p{
      text-align: center;
      color: #333;
      height: 30px;
      line-height: 30px;
    }
  }
  .imgitem{
   width: 100%;
   height: 100px;
   img{
     height: 100%;
   }
  }

  .initem:nth-child(3n+3){
    margin-right: 0;
  }

}
</style>

