<template lang='pug'>
	.input-text-area
		span.input-text-area__label {{ label }}
		textarea.input-text-area__field
</template>

<script>
export default {
	name: 'InputTextArea',
	props: {
		label: String,
	}
}
</script>

<style lang="stylus">
.input-text-area
	display flex
	flex-direction column
	margin-bottom 1rem
	outline none
		
	&__field
		border solid 2px #BFDAEB
		border-radius 5px
		color #304458
		font 600 1.5rem/1.6rem "Gilroy", serif
		height 183px
		margin-bottom .6rem
		padding 18px
		resize none
		
	&:focus
		border solid 2px #2693FF
			
	&__label
		color #4E657B
		font 600 1.3rem/1.3rem "Gilroy", serif
		margin-bottom .6rem
</style>
