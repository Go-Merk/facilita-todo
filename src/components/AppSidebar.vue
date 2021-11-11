<template lang='pug'>
	.app-sidebar
		slot
</template>

<script>
export default {
	name: 'app-sidebar',
}
</script>

<style lang="stylus">
.app-sidebar
	background #F4FBFF //2693FF
	display flex
	height 100%
	position fixed
	z-index 1
</style>
