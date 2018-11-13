<template>
    <div class='recomendFood'>
           <!-- 菜品分类 -->
        <div class='menuTop'>
            <scroller lock-y :scrollbar-x=false>
                <div class="box1" v-bind:style="{ width: swipboxWidth }">
                    <div :class="activeMenu === index ?'activeMenu box1-item':'box1-item'"  v-for="(item,index) in menuLevel1" :key="index"  @click="clickMenu(index)">
                        <span>{{item}}</span>
                    </div>
                </div>
            </scroller>
        </div>
          <div class='recomendBox'>
             <div class="initem" v-for="(item,index) in recomendList" :key="index">
                <div class='imgitem'>
                      <img v-bind:src=item.url alt="">
                      <div class='checked' v-show="item.ischeck">
                             <check-icon class='checkIcon' :value="true"></check-icon>
                      </div>
                </div>
                <p>{{item.name }}</p>
             </div>
         </div>
    </div>
</template>
<script>
import { Group,Scroller,CheckIcon } from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "推荐菜品");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
  },
  components: {
    Group,
    CheckIcon,
    Scroller
  },
  methods: {
    clickMenu(){}
  },
  computed: {
    swipboxWidth() {
      const width =
        this.menuLevel1.length * 80 > window.innerWidth - 30
          ? this.menuLevel1.length * 80
          : window.innerWidth - 30;
      return width + "px";
    }
  },
  data() {
    return {
      menuLevel1: ["美味主食", "酒水饮料", "粤式点心", "传统干锅", "麻辣湘菜"],
      activeMenu: 0,
        recomendList: [
        {
          url: "http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg",
          name: "红烧排骨"
        },
        {
          url: "http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg",
          name: "海鲜饭",
          ischeck:true
        },
        {
          url: "http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg",
          name: "奶油盖浇饭"
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
.menuTop {
  padding: 10px 20px;
  .box1 {
    height: 30px;
    position: relative;
  }
  .box1-item {
    width: 70px;
    height: 30px;
    display: inline-block;
    margin-left: 10px;
    float: left;
    text-align: center;
    line-height: 30px;
  }
  .box1-item:first-child {
    margin-left: 0;
  }
  .activeMenu {
    color: #fa8a29;
  }
}
.recomendBox{
  display: flex;
  padding: 0 15px;
  flex-wrap:wrap;
  .initem{
    border:1px solid #f2f2f2;
    border-radius: 4px;
    width:31%;
    overflow: hidden;
    margin-right: 2%;
     margin-top: 10px;
    p{
      text-align: center;
      color: #333;
      height: 30px;
      line-height: 30px;
    }
    .checkIcon{
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  .imgitem{
   width: 100%;
   height: 100px;
   position:relative;
  
   img{
     height: 100%;
   }
 
   .checked{
     position:absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background: rgba(255,255,255,0.5)
   }
  }

  .initem:nth-child(3n+3){
    margin-right: 0;
  }

  .vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before{
      color: #FA8A29;
      background: #fff;
      border-radius: 50%;
   }

}
</style>

