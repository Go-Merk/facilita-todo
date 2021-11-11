<template lang='pug'>
	img(:src="'img/' + icon + '.svg'")
</template>

<script>

export default {
	name: 'BaseIcon',
	props: {
		icon: String,
	},
}
</script>

<style lang="stylus">
.icon
	height auto
	width 100%
</style>
