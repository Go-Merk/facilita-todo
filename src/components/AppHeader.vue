<template lang='pug' v-else>
	.app-header
		img.app-header__profile-pic(:src='"img/" + image + ".png"')
		div
			.app-header__profile-name {{ name }}
			.app-header__profile-position {{ position }}
</template>

<script>
export default {
	name: 'app-header',
	props: {
		image: String,
		name: String,
		position: String,
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.app-header
	align-items center
	box-shadow 0px 1px 6px 0px rgba(#283848, .07);
	background #fff
	display flex
	justify-content flex-end
	height 83px
	padding 0 28px
	position fixed
	top 0
	right 0
	width calc(100% - 106px)
	z-index 2

	&__profile-pic
		height 55px
		margin-right 8px
		width 55px

	&__profile-name
		color #283848
		font 600 1.5rem/1.5rem "Gilroy", serif
	
	&__profile-position
		color #2693FF
		font 600 1.2rem/1.2rem "Gilroy", serif
		margin-top 2px
</style>
