<template>
    <div>
这里是订单
    </div>
</template>

<script>
export default {
     mounted() {
          this.$store.commit('ACTIVE_TYPE', 2)
         this.$store.commit('UPDATE_HEAD', false);
	}
}
</script>
