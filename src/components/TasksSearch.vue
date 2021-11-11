<template lang='pug'>
	label.tasks-search
		input.tasks-search__field(type='text' placeholder='Buscar Tarefas')
		base-icon(:icon='icon' class='tasks-search__icon')
</template>

<script>
import BaseIcon from '../subcomponents/BaseIcon.vue'

export default {
	name: 'InputText',
	props: {
		icon: String,
	},
	components: {
		BaseIcon,
	},
}
</script>

<style lang="stylus">
.tasks-search
	border solid 2px #BFDAEB
	border-radius 5px
	display flex
	margin 3rem 0
	outline none
	padding 0 18px
	width 100%
	max-width 633px
	
	&__field
		border none
		background none
		color #304458
		font 600 1.5rem/1.6rem "Gilroy", serif
		height 51px
		width 100%

		&::placeholder
			color #BFDAEB

	&__icon
		fill #AECBDE
		width 24px
</style>
