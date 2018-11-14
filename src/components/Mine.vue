<template>
    <div class=''>
        <div></div>

          <router-link :to="'/index/keyLogin'">
                    登录
           </router-link>
    </div>
</template>
<script>
import { Group } from "vux";
export default {
  mounted() {
     this.$store.commit("ACTIVE_TYPE", 3);
    this.$store.commit("UPDATE_FOOTER", true);
  },
  components: {
    Group
  },
  methods: {},
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
</style>

