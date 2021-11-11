<template lang='pug'>
	.navigation
		slot
</template>

<script>
export default {
	name: 'app-navigation',
}
</script>

<style lang="stylus">
.navigation
	align-items center
	background #2693FF
	display flex
	flex-direction column
	height 100%
	width 106px
	justify-content space-between
</style>
