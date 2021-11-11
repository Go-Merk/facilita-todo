<template lang='pug'>
	#app
		router-view
</template>

<script>

export default {
	name: 'App',
}
</script>

<style lang="stylus">

@font-face
	font-family: 'Gilroy';
	src: local('Gilroy Medium'), local('Gilroy-Medium'), url('assets/fonts/SVN-Gilroy_Medium.woff2') format('woff2')
	font-weight: 400;
	font-style: normal;

@font-face
	font-family: 'Gilroy';
	src: local('Gilroy Regular'), local('Gilroy-Regular'), url('assets/fonts/SVN-Gilroy_Regular.woff2') format('woff2')
	font-weight: 500;
	font-style: normal;

@font-face
	font-family: 'Gilroy';
	src: local('Gilroy Semibold'), local('Gilroy-Semibold'), url('assets/fonts/SVN-Gilroy_SemiBold.woff2') format('woff2')
	font-weight: 600;
	font-style: normal;

@font-face
	font-family 'Gilroy'
	src local('Gilroy Bold'), local('Gilroy-Bold'), url('assets/fonts/SVN-Gilroy_Bold.woff2') format('woff2')
	font-weight bold
	font-style normal

html
	box-sizing border-box
	font-size 62.5%

*, *:before, *:after
	box-sizing inherit

body
	margin 0
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale

#app
	display flex
	height 100vh

input:focus, textarea:focus, select:focus
	outline none
</style>
