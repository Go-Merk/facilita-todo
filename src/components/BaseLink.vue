<template lang='pug'>
	a.base-link(:href='url') {{ label }}
</template>

<script>
export default {
	name: 'base-link',
	props: {
		label: String,
    url: String,
	}
}
</script>

<style lang="stylus">
.base-link
	color #2693FF
	font 600 1.3rem/1.3rem "Gilroy", serif

	&--forgot-password
		margin-top 3.2rem
</style>
