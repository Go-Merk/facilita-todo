<template lang='pug'>
	form.form-login
		.form-login__title {{ title }}
		slot
</template>

<script>
export default {
	name: 'form-login',
	props: {
    title: String,
	}
}
</script>

<style lang="stylus">
.form-login
	display flex
	flex-direction column
	width 100%
	max-width 368px

	&__title
		color #283848
		font 700 1.8rem/1.8rem "Gilroy", serif
		margin-bottom 3.2rem
</style>
