<template lang='pug'>
	a.filter-link
		svg(width="5" height="8" viewBox="0 0 5 8" xmlns="http://www.w3.org/2000/svg")
			path(d="M4.68601 4.26557L0.890156 7.88987C0.738709 8.03671 0.493815 8.03671 0.342368 7.88987L0.113586 7.66803C-0.0378618 7.52119 -0.0378618 7.28373 0.113586 7.13689L3.40998 4L0.116808 0.863113C-0.0346396 0.716267 -0.0346396 0.478813 0.116808 0.331967L0.34559 0.110135C0.497037 -0.0367116 0.741931 -0.0367116 0.893379 0.110135L4.68923 3.73443C4.83746 3.88127 4.83746 4.11873 4.68601 4.26557Z")
		span.filter-link__label {{ label }}
</template>

<script>
import BaseIcon from '../subcomponents/BaseIcon.vue'

export default {
	name: 'filter-link',
	props: {
		icon: String,
		label: String,
	},
	components: {
		BaseIcon,
	},
}
</script>

<style lang="stylus">
.filter-link
	color #283848
	fill currentcolor
	font 600 1.5rem/1.5rem "Gilroy", serif
	margin-bottom 2.4rem

	&--activated
		color #2693FF

	&__label
		margin-left 1rem
</style>
