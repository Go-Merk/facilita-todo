<template lang='pug'>
	button.fab(type='button' v-on:click="$emit('open-modal')")
		base-icon(:icon='icon')
</template>

<script>
import BaseIcon from '../subcomponents/BaseIcon.vue'

export default {
	name: 'floating-action-button',
	props: {
		icon: String,
	},
	components: {
		BaseIcon,
	},
}
</script>

<style lang="stylus">
.fab
	align-items center
	background #1AD18F
	border none
	border-radius 50%
	bottom 28px
	color #fff
	display flex
	justify-content center
	height 77px
	right 28px
	position fixed
	text-decoration none
	width 77px
</style>
