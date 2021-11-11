<template lang='pug'>
	.app-filters
		.app-filters__title {{ title }}
		slot
</template>

<script>
export default {
	name: 'app-filters',
	props: {
    title: String,
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.app-filters
	background #F4FBFF // temp
	display flex
	height 100%
	justify-content center
	padding-left 40px
	flex-direction column
	width 227px

	&__title
		color #4E5F70
		font 700 1.7rem/1.7rem "Gilroy", serif
		margin-bottom 6rem
</style>
