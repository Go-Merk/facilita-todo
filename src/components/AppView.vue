<template lang='pug'>
	.app-view
		slot
</template>

<script>
export default {
	name: 'app-view',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.app-view
	background #E9F4FB // temp
	display flex
	flex 1
</style>
