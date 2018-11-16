<template>
    <div class='home' :style="{height: height}">
      <div class='homeTop'>
          <div class='left'></div>
            <router-link :to="'/index/shopList'">
                <div class='mid'>
                    <span class='loc'></span>
                    <span>{{shopInfo.name || '选取餐厅'}}</span>
                    <span class='down'></span>
                </div>
            </router-link>
          <router-link :to='"/index/msgCenter"' class='right'>
          </router-link>
         
      </div>
      <swiper :list="imgList" auto></swiper>
      <div class='menus'>
                <div class='entericon'>
                     <router-link :to="'/index/menu'">
                        <div class='menu-icon'>
                            <img src="../assets/images/menu_icon.png" alt="">
                        </div>
                        <p>点餐</p>
                    </router-link>
                </div>
          <div class='entericon'>
             <router-link :to="'/index/shopQueue'">
                <div class='menu-icon'>
                    <img src="../assets/images/menu_icon.png" alt="">
                </div>
                <p>排号</p>
              </router-link>
          </div>
          <div class='entericon'>
              <router-link :to="'/index/book'">
                <div class='menu-icon'>
                    <img src="../assets/images/menu_icon.png" alt="">
                </div>
                <p>预定</p>
              </router-link>
          </div>
          <div class='entericon'>
             <router-link :to="'/index/takeOut'">
                <div class='menu-icon'>
                    <img src="../assets/images/menu_icon.png" alt="">
                </div>
                <p>外卖</p>
              </router-link>
          </div>
      </div>
      <div class='news'>
           <router-link :to="'/index/newsList'">
            <div class='lefticon' >
                    <p>餐厅</p>
                    <p>头条</p>
            </div>
           </router-link>
          <swiper auto height="30px" direction="vertical" :interval=2000 class="newsbox" :show-dots="false">
               <swiper-item v-for="(item,index) in newsList" :key="index">
                <router-link :to="'/index/newsDetail/'+item.id">
                      <p class='newsItem'>{{item.name}}</p>
                </router-link>
          </swiper-item>
    </swiper>
         <div class='news-right'></div>
      </div>
      <div class='line'></div>
      <div class='recommend'>
          <div class='title'>
              <div class='l'>推荐菜品</div>
              <div class='r'> <router-link :to="'/index/recommendList'">
                      <div>更多</div>
                    </router-link></div>
          </div>
          <div class='outbox'>
            <scroller lock-y :scrollbar-x=false>
              <div class="swipbox"  v-bind:style="{ width: swipboxWidth }">
                <div class="rec-item" v-for="(item,index) in recomendList" :key="index">
                    <div class='imgbox'>
                            <img v-bind:src=item.productIcon alt="">
                    </div>
                    <p>{{item.productName}}</p>
              </div>
              </div>
            </scroller>
          </div>
      </div>
       <div class='line'></div>
        <div class='shareInfo'>
          <div class='title'>
              <div class='l'>热门分享</div>
              <div class='r'>
                    <router-link :to="'/index/shareList'">
                      <div>更多</div>
                    </router-link>
              </div>
          </div>
          <div class='shareBox'>
            <div  v-for="(item,index) in shareList" :key="index" @click="toDetail(item.id)">
              <div class='share-item'>
                  <div class='shareimg'>
                       <img v-bind:src=item.branchIcon  alt="">
                  </div>
                      <div class='r-dec'>
                          <p class='name'>{{item.branchName}}</p>
                          <div class='sdec'>{{item.content}}</div>
                          <div class='rec-dishs'>
                              <div class='ltitle'>推荐菜谱</div>
                              <div class='rdish'>{{item.productName}}</div>
                          </div>
                      </div>
                  </div>
                </div>
          </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperItem, Scroller } from "vux";
import {api} from '../config/api'
import BMap from "BMap";

const {bannerUrl, newsUrl,shareUrl,recomendUrl,searchShopList} = api;
import { mapGetters } from 'vuex'

export default {
  mounted() {
    this.loadBanner();   //加载banner
    this.loadNews();     //加载头条
    this.loadRecomends();   //推荐菜品
    this.getMyLocation();   //获取本人信息
    this.loadShareList();   //热门分享
    this.$store.commit("ACTIVE_TYPE", 1);
    this.$store.commit("UPDATE_HEAD", false);
    this.$store.commit("UPDATE_FOOTER", true);
    this.height = `${(window.innerHeight - 46 - 53)}'px'`;
    this.route=this.$route.name
  },
  components: {
    Swiper,
    Scroller,
    SwiperItem
  },
  data() {
    return {
      height:'auto',
      route:'',
      imgList: [
        {
          url : "/index/newsDetail",
          img : 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=735113195,958349734&fm=200&gp=0.jpg'
        }
      ],
      recomendList: [
        {
          productIcon: "http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg",
          productName: "红烧排骨"
        }
      ],
      newsList: [
        { name: "bgy机器人广州分店开业了",id:1 }
      ],
      shareList: [
        {
          productIcon: "http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg",
          branchName: "机器人餐厅店铺1",
          id:1,
          content:"机器人餐厅体验太棒了~，吃得非常愉快，最喜欢可爱的迎宾小智了看就看健康健康就",
          productName: "酸辣牛肉、红烧排骨、蒜蓉虾"
        }
      ]
    };
  },

  computed: {
      ...mapGetters([
      'shopInfo'
    ]),
    swipboxWidth() {
      const width =
        this.recomendList.length * 148 > window.innerWidth - 30
          ? this.recomendList.length * 150
          : window.innerWidth - 30;
      return width + "px";
    }
  },
  methods: {
    // 获取banner
    loadBanner() {
      let self = this;
      this.baseAjax({
        url: bannerUrl,
        success: function(data) {
          console.log(data)
          if (data.result && data.result.length) {
            self.imgList = data.result.map(item => {
              let obj = {};
              obj.url = item.jumpPath || "javascript:";
              obj.img = item.path;
              return obj;
            });
          }
        }
      });
    },
    toDetail(id){
     this.$router.push({path:  '/index/EvaluateDetail/'+id});
    },
    loadNews(){
      let self = this;
      this.baseAjax({
        url: newsUrl,
        success: function(data) {
          if (data.result && data.result.length) {
            self.newsList = data.result;
          }
        }
      });
    },
    loadRecomends(){
      let self = this;
          this.baseAjax({
            url: recomendUrl,
            success: function(data) {
              if (data.result && data.result.length) {
                self.recomendList = data.result;
              }
            }
       });
    },
    loadBranchList(point={}){
      let self = this;
      console.log(this.shopInfo)
        //  if(this.shopInfo)  return;
      const postData={
          longitude:point.lng,
          latitude:point.lat
      }
      if(!postData.longitude || !postData.latitude){
          postData.cityCode=this.constData.defaultCityCode    //默认定位佛山
      }
      this.baseAjax({
        url: searchShopList,
        params:postData,
        success: function(data) {
          if (data.result) {
             self.$store.commit('SHOP_INFO', data.result [0] || {})
          }
        }
      });
    },
    loadShareList(){
      let self = this;
      this.baseAjax({
        url: shareUrl,
        success: function(data) {
          if (data.result && data.result.length) {
            self.shareList = data.result;
          }
        }
      })
      },
    getMyLocation(){
          const geolocation = new BMap.Geolocation();
          const self = this;
          geolocation.getCurrentPosition(function(r){
            console.log(r.point)
              if(this.getStatus() == BMAP_STATUS_SUCCESS){
                  const point = new BMap.Point(r.point.lng,r.point.lat);//用所定位的经纬度查找所在地省市街道等信息
                  self.loadBranchList(r.point)
                  const gc = new BMap.Geocoder();
                  self.$store.commit('MY_LOCATION', {lng:r.point.lng,lat:r.point.lat})
                  gc.getLocation(point, function(rs){
                    // const addComp = rs.addressComponents; 
                    // const city = rs.addressComponents.city;
                    // console.log(city)
                     
                  });
                }
          },function(){
             self.loadBranchList()
          })
    },
  }
 
};
</script>

<style scoped lang="less">
.home{
  margin-bottom: 10px;
  overflow: scroll;
    -webkit-overflow-scrolling: touch;
}
.homeTop {
  height: 44px;
  display: flex;
  padding: 0 5px;
  justify-content: space-between;
}
.mid {
  display: flex;
  line-height: 44px;
  font-size: 17px;
  color: #333;
}
.menus {
  display: flex;
  height: 84px;
  padding: 0 10px;
  justify-content: space-around;
  p {
    color: #333;
  }
  .entericon {
    text-align: center;
    padding-top: 10px;
    width: 25%;
    height: 50px;
  }
  .menu-icon {
    width: 100%;
    img {
      height: 38px;
      width: 38px;
    }
  }
}
.news {
  height: 44px;
  padding: 5px 10px;
  display: flex;
  border-top: 1px solid #eee;
}

.newsbox {
  overflow: hidden;
  padding-left: 5px;
  height: 30px;
  margin-top: 10px;
  margin-left: 5px;
  border-left: 1px solid #eee;
  flex: 1;
  p {
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.line {
  height: 5px;
  margin-top: 5px;
  background: #f2f2f2;
}

.recommend {
  padding: 15px;
}
.shareInfo {
  padding: 15px;
}

.title {
  display: flex;
  .l {
    font-size: 20px;
    color: #333;
    width: 50%;
  }
  .r {
    color: #929292;
    width: 50%;
    line-height: 38px;
    text-align: right;
    a {
      color: #929292;
    }
  }
}
.outbox {
  width: 100%;
  overflow-x: auto;
  margin-top: 10px;
}
.swipbox {
  display: flex;
  position: relative;
}

.rec-item {
  border-radius: 4px;
  border: 1px solid #eee;
  text-align: center;
  margin-right: 10px;
  width: 135px;
  overflow: hidden;
  .imgbox {
    width: 135px;
    height: 80px;
    overflow: hidden;
    text-align: center;
    display: flex;
    align-items: center;
  }
  img {
    width: 100%;
  }
  p {
    line-height: 40px;
  }
}
.newsItem {
  color: #333;
}

.share-item {
  overflow: hidden;
  display: flex;
  height: 110px;
  padding-bottom: 10px;
  p {
    font-size: 16px;
  }
  .name {
    color: #333;
  }
  .shareimg {
    width: 130px;
    height: 110px;
    overflow: hidden;
    display: flex;
    align-items: center;
    background: #f2f2f26b;
    img {
      height: 100%;
    }
  }
  .r-dec {
    flex: 1;
    width: 0;
    padding-left: 10px;
  }

  .sdec {
    height: 45px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #929292;
    margin-top: 5px;
  }
  .rec-dishs {
    height: 30px;
    display: flex;
    font-size: 12px;
    margin-top: 5px;
    .ltitle {
      width: 55px;
      text-align: center;
      line-height: 20px;
      height: 20px;
      border: 1px solid #30accf;
      border-radius: 2px;
      color: #30accf;
    }
    .rdish {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 25px;
      padding-left: 5px;
      color: #30accf;
      white-space: nowrap;
    }
  }
}
</style>
