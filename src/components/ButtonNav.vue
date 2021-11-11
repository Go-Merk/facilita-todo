<template lang='pug'>
	button.button-nav(type='button')
		base-icon(:icon='icon')
		span.button-nav__label {{ label }}
</template>

<script>
import BaseIcon from '../subcomponents/BaseIcon.vue'

export default {
	name: 'ButtonNav',
	props: {
		label: String,
		icon: String,
	},
	components: {
		BaseIcon,
	},
}
</script>

<style lang="stylus">
.button-nav
	align-items center
	background none
	border-top solid #46A3FF 1px
	border-left solid #46A3FF 1px
	border-right solid #46A3FF 1px
	border-bottom solid #46A3FF 0
	color #fff
	display flex
	flex-direction column
	justify-content center
	font 600 1.2rem/1.2rem "Gilroy", serif
	height 83px
	text-decoration none
	width 106px

	&:last-child
		border solid #46A3FF 1px

	&--selected
		background #1182F2

	&__label
		margin-top 8px

</style>
