<template lang='pug'>
	.app-card
</template>

<script>
export default {
	name: 'app-card',
	props: {
    title: String,
	}
}
</script>

<style lang="stylus">
.app-card
	background #fff // temp
	border-radius 5px
	box-shadow 0 2px 4px rgba(#283848, .18)
	display flex
	height 64px
	width 100%
</style>
