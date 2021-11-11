<template lang='pug'>
	.app-tasks
		slot
</template>

<script>
export default {
	name: 'app-tasks',
	data: function () {
    return {
      count: 0
    }
  },
}
</script>

<style lang="stylus">
.app-tasks
	align-items center
	display flex
	flex-direction column
	margin 8rem
	width 100%
	padding 83px 0 0 333px
</style>
