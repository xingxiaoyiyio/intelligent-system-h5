<template>
    <div class='home'>
      <div class='homeTop'>
          <div class='left'></div>
            <router-link :to="'/index/shopList'">
                <div class='mid'>
                    <span class='loc'></span>
                    <span>碧桂园总部店</span>
                    <span class='down'></span>
                </div>
            </router-link>
          <div class='right'></div>
      </div>
      <swiper :list="imgList" auto></swiper>
      <div class='menus'>
                <div class='entericon'>
                     <router-link :to="'/index/menu'">
                        <div class='menu-icon'>
                            <img src="../assets/images/home_check.png" alt="">
                        </div>
                        <p>点餐</p>
                    </router-link>
                </div>
          
          <div class='entericon'>
             <router-link :to="'/index/shopQueue'">
                <div class='menu-icon'>
                    <img src="../assets/images/home_check.png" alt="">
                </div>
                <p>排号</p>
              </router-link>
          </div>
          <div class='entericon'>
              <div class='menu-icon'>
                   <img src="../assets/images/home_check.png" alt="">
              </div>
              <p>预定</p>
          </div>
          <div class='entericon'>
              <div class='menu-icon'>
                   <img src="../assets/images/home_check.png" alt="">
              </div>
              <p>外卖</p>
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
          <router-link :to="'/index/newsDetail'">
                <p class='newsItem'>{{item.title}}</p>
          </router-link>
          </swiper-item>
    </swiper>

          
      <div class='news-right'></div>
      </div>
      <div class='line'></div>
      <div class='recommend'>
          <div class='title'>
              <div class='l'>推荐菜品</div>
              <div class='r'>更多</div>
          </div>
          <div class='outbox'>
          <scroller lock-y :scrollbar-x=false>
      <div class="swipbox"  v-bind:style="{ width: swipboxWidth }">
        <div class="rec-item" v-for="(item,index) in recomendList" :key="index">
            <div class='imgbox'>
                    <img v-bind:src=item.url alt="">
            </div>
            <p>{{item.name}}</p>
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
            <div  v-for="(item,index) in shareList" :key="index">
               <router-link :to="'/index/EvaluateDetail'">
              <div class='share-item'>
                  <div class='shareimg'>
                       <img v-bind:src=item.url alt="">
                  </div>
                      <div class='r-dec'>
                          <p class='name'>{{item.title}}</p>
                          <div class='sdec'>{{item.dec}}</div>
                          <div class='rec-dishs'>
                              <div class='ltitle'>推荐菜谱</div>
                              <div class='rdish'>{{item.reclist}}</div>
                          </div>
                      </div>
                  </div>
                </router-link>
                </div>
          </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperItem, Scroller } from "vux";
export default {
  mounted() {
    this.loadBanner();
    this.$store.commit("ACTIVE_TYPE", 1);
    this.$store.commit("UPDATE_HEAD", false);
    this.$store.commit("UPDATE_FOOTER", true);
  },
  components: {
    Swiper,
    Scroller,
    SwiperItem
  },
  data() {
    return {
      imgList: [],
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
      ],
      newsList: [
        { title: "bgy机器人广州分店开业了" },
        { title: "优惠播报：每天前10个订单，85折优惠！" }
      ],
      shareList: [
        {
          url: "http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg",
          title: "机器人餐厅店铺1",
          dec:
            "机器人餐厅体验太棒了~，吃得非常愉快，最喜欢可爱的迎宾小智了看就看健康健康就",
          reclist: "酸辣牛肉、红烧排骨、蒜蓉虾"
        },
        {
          url: "http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg",
          title: "机器人餐厅店铺1",
          dec:
            "机器人餐厅体验太棒了~，吃得非常愉快，最喜欢可爱的迎宾小智了看就看健康健康就",
          reclist: "酸辣牛肉、红烧排骨、蒜蓉虾"
        }
      ]
    };
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
  methods: {
    // 获取banner
    loadBanner() {
      let self = this;
      this.baseAjax({
        url: "/index/banner",
        params: {
          shopid: "8001"
        },
        success: function(data) {
          if (data.length) {
            self.imgList = data.map(item => {
              let obj = {};
              obj.url = "javascript:";
              obj.img = item.imgUrl;
              return obj;
            });
          }
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
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
      height: 40px;
      width: 40px;
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
