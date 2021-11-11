<template lang='pug'>
	.background-modal
		.app-modal
			.app-modal__header
				.app-modal__title Cadastrar Tarefa
				button.icon-button(v-on:click="$emit('open-modal')")
					base-icon(:icon='icon')
			slot
</template>

<script>
import BaseIcon from '../subcomponents/BaseIcon.vue'

export default {
	name: 'app-modal',
	props: {
		icon: String,
	},
	components: {
		BaseIcon,
	},
}
</script>

<style lang="stylus">
.app-modal
	background #fff
	border-radius 8px
	height 488px
	width 660px
	padding 40px

	&__header
		display flex
		justify-content space-between

	&__title
		color #283848
		font 700 2.5rem/1rem "Gilroy", serif
		margin-bottom 5rem

.background-modal
	align-items center
	background rgba(#465D76, .6)
	display flex
	height 100%
	justify-content center
	left 0
	position fixed
	top 0
	width 100%
	z-index 9999

.icon-button
	background none
	border none
	height 10px
	width 10px
	
</style>
