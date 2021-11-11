<template lang='pug'>
	app-view
		app-sidebar
			.brand-area
				app-brand(image='img/logo.svg' title_p1='FACILITA' title_p2='TASKS' subtitle='Gestão de tarefas pessoais')
		app-login
			form-login(title='Entre com os dados de acesso.')
				input-text(label='Nome de usuário ou e-mail:' name='')
				input-text(label='Senha:' name='')
				router-link(class='button button--wide' to="/Dashboard") Entrar
				base-link(url='#' label='Esqueci minha senha' class='base-link--forgot-password')
</template>

<script>
import AppBrand from '../components/AppBrand.vue'
import AppLogin from '../components/AppLogin.vue'
import AppSidebar from '../components/AppSidebar.vue'
import AppView from '../components/AppView.vue'
import BaseButton from '../components/BaseButton.vue'
import BaseLink from '../components/BaseLink.vue'
import FormLogin from '../components/FormLogin.vue'
import InputText from '../components/InputText.vue'

export default {
	name: 'Login',
	components: {
		AppBrand,
		AppLogin,
		AppSidebar,
		AppView,
		BaseButton,
		BaseLink,
		FormLogin,
		InputText,
	},
}
</script>

<style lang="stylus">
.app-container
	display flex
	flex 1

.brand-area
	align-items center
	background #2693FF 
	display flex
	justify-content center
	height 100%
	position fixed
	width 624px
	z-index 1
</style>
