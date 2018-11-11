<template>
    <div class=''>

    </div>
</template>
<script>
import { Group } from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "评价详情");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
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

