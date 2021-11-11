<template lang='pug'>
	button.button(type='button') {{ label }}
</template>

<script>
export default {
	name: 'base-button',
	props: {
    label: String,
	}
}
</script>

<style lang="stylus">
.button
	align-items center
	background #1AD18F
	border none
	border-radius 5px
	color #fff
	display inline-flex
	justify-content center
	font 700 1.6rem/1.6rem "Gilroy", serif
	height 55px
	text-decoration none
	width 118px

	&--wide
		width 100%
</style>
