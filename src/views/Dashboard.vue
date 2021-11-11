<template lang='pug'>
	app-view
		app-header(image='profile', name='Eduardo Pereira da Costa', position='Front-end Developer')
		app-sidebar
			app-navigation
				app-logo(icon='logo')
				nav
					button-nav(icon='dashboard', label='Dashboard' class='button-nav--selected')
					button-nav(icon='tasks', label='Tarefas')
					button-nav(icon='config', label='Configurações')
				div(style='opacity: 0')
					app-logo(icon='logo')
			app-filters(title='Categorias')
				filter-link(icon='arrow' label='Todas' class='filter-link--activated')
				filter-link(icon='arrow' label='Urgentes')
				filter-link(icon='arrow' label='Importantes')
				filter-link(icon='arrow' label='Outras')
				filter-link(icon='arrow' label='Finalizadas')
		app-tasks
			tasks-header
			tasks-search(icon='search')
			tasks-area
				app-card
	
			floating-action-button(icon='plus' v-on:open-modal="name = true")
			app-modal(icon='close' v-if="name === true" v-on:open-modal="name = false")
				input-text(label='' name='' )
				input-text-area(label='Descrição')
				.section(style='display: flex; justify-content: space-between')
					div
					base-button(class='button' label='Adicionar')

</template>

<script>
import AppCard from '../components/AppCard.vue'
import AppFilters from '../components/AppFilters.vue'
import AppHeader from '../components/AppHeader.vue'
import AppLogo from '../components/AppLogo.vue'
import AppModal from '../components/AppModal.vue'
import AppNavigation from '../components/AppNavigation.vue'
import AppSidebar from '../components/AppSidebar.vue'
import AppTasks from '../components/AppTasks.vue'
import BaseButton from '../components/BaseButton.vue'
import BaseIcon from '../subcomponents/BaseIcon.vue'
import ButtonNav from '../components/ButtonNav.vue'
import AppView from '../components/AppView.vue'
import FilterLink from '../components/FilterLink.vue'
import FloatingActionButton from '../components/FloatingActionButton.vue'
import InputText from '../components/InputText.vue'
import TasksHeader from '../components/TasksHeader.vue'
import TasksSearch from '../components/TasksSearch.vue'
import TasksArea from '../components/TasksArea.vue'
import InputTextArea from '../components/InputTextArea.vue'

export default {
	name: 'Dashboard',
	data: function () {
		return {
			name: 'false',
			tasks:[],
			newTask:null
		}
	},
	components: {
		AppCard,
		AppFilters,
		AppHeader,
		AppLogo,
		AppModal,
		AppNavigation,
		AppSidebar,
		AppTasks,
		AppView,
		BaseButton,
		BaseIcon,
		ButtonNav,
		FilterLink,
		FloatingActionButton,
		InputText,
		InputTextArea,
		TasksHeader,
		TasksSearch,
		TasksArea,
	},

	// preparation for the task storages, non functional tho.

	mounted() {
		if(localStorage.getItem('tasks')) {
			try {
				this.tasks = JSON.parse(localStorage.getItem('tasks'));
			} catch(event) {
				localStorage.removeItem('tasks');
			}
		}
	},
	methods: {
		addTask() {
			if(!this.newTask) return;
			this.tasks.push(this.newTask);
			this.newTask = '';
			this.saveTasks();
		},
		removeTask(x) {
			this.tasks.splice(x,1);
			this.saveTasks();
		},
		saveTasks() {
			let parsed = JSON.stringify(this.tasks);
			localStorage.setItem('tasks', parsed);
		}
	},
}
</script>

<style lang="stylus">
</style>