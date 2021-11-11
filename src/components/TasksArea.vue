<template lang='pug'>
	.task-area
		slot
</template>

<script>
export default {
	name: 'task-area',
}
</script>

<style lang="stylus">
.task-area
	display flex
	flex-direction column
	width 100%
	max-width 633px
</style>
