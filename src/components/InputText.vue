<template lang='pug'>
	label.input-text
		span.input-text__label {{ label }}
		input.input-text__field( :name='name' type='text')
</template>

<script>
export default {
	name: 'InputText',
	props: {
		label: String,
		name: String,
	}
}
</script>

<style lang="stylus">
.input-text
	display flex
	flex-direction column
	margin-bottom 1rem
	outline none
	
	&__field
		border solid 2px #BFDAEB
		border-radius 5px
		color #304458
		font 600 1.5rem/1.6rem "Gilroy", serif
		height 55px
		margin-bottom .6rem
		padding 0 18px
		
		&:focus
			border solid 2px #2693FF
			
	&__label
		color #4E657B
		font 600 1.3rem/1.3rem "Gilroy", serif
		margin-bottom .6rem
</style>
