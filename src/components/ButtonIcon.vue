<template lang='pug'>
	button.button-icon(type='button')
		base-icon(:icon='icon')
</template>

<script>
import BaseIcon from '../subcomponents/BaseIcon.vue'

export default {
	name: 'ButtonIcon',
	props: {
		icon: String,
	},
	components: {
		BaseIcon,
	},
}
</script>

<style lang="stylus">
.button-icon
	background none
	border none
	height 10px
	width 10px
</style>
