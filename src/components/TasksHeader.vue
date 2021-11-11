<template lang='pug'>
	.task-header
		.task-header__title Minhas Tarefas
		.task-header__subtitle
			| Olá 
			span.task-header__user Eduardo Pereira 
			| você tem 
			span.task-header__task-number {{count}} tarefas
			| pendentes
</template>

<script>
export default {
	name: 'task-area',
	data: function () {
    return {
      count: 0
    }
  },
}
</script>

<style lang="stylus">
.task-header
	display flex
	flex-direction column
	justify-content flex-start
	width 100%
	max-width 633px

	&__title
		color #283848
		font 700 2.6rem/2.6rem "Gilroy", serif
		margin-bottom 8px

	&__subtitle
		color #77899E
		font 600 1.7rem/1.7rem "Gilroy", serif

	&__user
		color #2693FF

	&__task-number
		color #2693FF
		margin-right 5px
		text-decoration underline
</style>
