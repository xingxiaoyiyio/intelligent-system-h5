<template>
    <div class='shareList'>
        <div class='shareBox'>
               <div  v-for="(item,index) in shareList" :key="index">
               <router-link :to="'/index/EvaluateDetail'">
              <div class='share-item'>
                  <div class='shareimg blankImg'>
                       <img v-bind:src=item.branchIcon alt="">
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
                </router-link>
                </div>
          </div>
    </div>
</template>
<script>
import { Group } from "vux";
import {api} from '../config/api'

const {shareUrl} = api;
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "热门分享");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
    this.loadShareList()
  },
  components: {
    Group
  },
  methods: {
      loadShareList(){
      let self = this;
      this.baseAjax({
        url: shareUrl,
        success: function(data) {
          if (data.result) {
            self.shareList = data.result;
          }
        }
      })
      },
  },
  data() {
    return {
      shareList: []
    };
  }
};
</script>
<style lang='less' scoped>
.shareBox {
  padding: 20px;
  .share-item {
    overflow: hidden;
    display: flex;
    height: 110px;
    padding-bottom: 10px;
    .name{
        color:#333;
    }
    p {
      font-size: 16px;
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
}
</style>

