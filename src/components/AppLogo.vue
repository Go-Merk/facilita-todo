<template lang='pug'>
	.app-logo
		base-icon(:icon='icon'  width='56px')
</template>

<script>
import BaseIcon from '../subcomponents/BaseIcon.vue'

export default {
	name: 'app-logo',
	props: {
		icon: String,
	},
	components: {
		BaseIcon,
	},
}
</script>

<style lang="stylus">
.app-logo
	align-items center
	color #fff
	display flex
	justify-content center
	margin-left 6px
	height 83px
	width 106px
</style>
