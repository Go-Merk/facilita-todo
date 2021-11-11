<template lang='pug' v-else>
	.app-brand
		img.app-brand__logo(:src='image')
		.app-brand__title-p1 {{ title_p1 }}
			span.app-brand__title-p2 {{ title_p2 }}
			.app-brand__subtitle {{ subtitle }}
</template>

<script>
export default {
	name: 'app-brand',
	props: {
		image: String,
		title_p1: String,
		title_p2: String,
		subtitle: String,
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.app-brand__title-p1
	color #fff
	font 700 4.8rem/4.8rem "Gilroy", serif
	margin-top .5rem
.app-brand__title-p2
	color #fff
	font 500 4.8rem/4.8rem "Gilroy", serif
.app-brand__subtitle
	font 500 1.6rem/1.6rem "Gilroy", serif
</style>
