
<template>
  <div class="index" style="height: 100%">
      <!-- <view-box ref="viewbox"  v-bind:style="{ paddingTop: headShow ? '46px' :0 }"> -->
      <view-box ref="viewbox">
     <div  v-show="headShow">
        <x-header :left-options="{backText: ''}">{{pageTitle}}</x-header>
     </div>
     <div v-transfer-dom class="loading-box">
        <loading :show="loading" position="absolute"></loading>
    </div>
    <router-view></router-view>
    <!-- 底部tab -->
    <tabbar slot='bottom' v-show="footerShow">
      <tabbar-item selected link="/index/home">
        <img slot="icon"  v-show="activeType === 1" src="../assets/images/home_check.png">
        <img slot="icon"  v-show="activeType !== 1" src="../assets/images/home.png">
        <span slot="label" v-bind:class="{activeLabel:activeType === 1}">首页</span>
      </tabbar-item>
      <tabbar-item link="/index/order">
         <img slot="icon"  v-show="activeType === 2" src="../assets/images/order_check.png">
        <img slot="icon"  v-show="activeType !== 2" src="../assets/images/order.png">
        <span slot="label" v-bind:class="{activeLabel:activeType ===2}">订单</span>
      </tabbar-item>
      <tabbar-item link="/index/mine">
        <img slot="icon"  v-show="activeType === 3" src="../assets/images/mine_check.png">
        <img slot="icon"  v-show="activeType !== 3" src="../assets/images/mine.png">
        <span slot="label" v-bind:class="{activeLabel:activeType === 3}">我的</span>
      </tabbar-item>
    </tabbar>
</view-box>
  </div>
</template>

<script>

import { Tabbar, TabbarItem ,XHeader,Loading,ViewBox} from 'vux'
import { mapGetters } from 'vuex'
import { TransferDomDirective as TransferDom } from 'vux'


export default {
  data () {
    
    return {
     
    }
  },

 mounted() {
     this.$store.commit('UPDATE_HEAD', false);
	},
   
  computed: {
      ...mapGetters([
      'loading',
      'showMsgCtn',
      'pageTitle',
      'headShow',
      'showMsg',
      'footerShow',
      'activeType'
    ])
  },
  directives: {
    TransferDom
  },

  components: {
    Tabbar,
    XHeader,
    Loading,
    ViewBox,
    TabbarItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

.activeLabel{
  color: #FA8A29;
}




</style>
