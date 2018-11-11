<template>
    <div>
这里是我的
 <router-link :to="'/index/keyLogin'">
        登录
  </router-link>
    </div>
</template>

<script>
export default {
     mounted() {
          this.$store.commit('ACTIVE_TYPE', 3)
          this.$store.commit('UPDATE_HEAD', false);
	}
}
</script>
