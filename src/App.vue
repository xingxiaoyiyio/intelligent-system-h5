<template>
  <div id="app"  style="height:100%;">
    <router-view></router-view>
  </div>
</template>

<script>

import config from '../config/proxyConfig'
console.log(config)


export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
